
from fastapi import FastAPI, Depends
from my_adk_agent.auth_service import AuthService
from my_adk_agent.db_service import DbService
from pydantic import BaseModel

app = FastAPI()

auth_service = AuthService()
db_service = DbService()

class SignUpRequest(BaseModel):
    email: str
    password: str
    user_data: dict

class SignInRequest(BaseModel):
    email: str
    password: str

class ResetPasswordRequest(BaseModel):
    email: str

class ContactSubmissionRequest(BaseModel):
    submission: dict

class NewsletterSubscriptionRequest(BaseModel):
    email: str

class UpdateProfileRequest(BaseModel):
    user_id: str
    updates: dict

@app.post("/auth/signup")
async def sign_up(request: SignUpRequest):
    return await auth_service.sign_up(request.email, request.password, request.user_data)

@app.post("/auth/signin")
async def sign_in(request: SignInRequest):
    return await auth_service.sign_in(request.email, request.password)

@app.post("/auth/signout")
async def sign_out():
    return await auth_service.sign_out()

@app.get("/auth/user")
async def get_current_user():
    return await auth_service.get_current_user()

@app.post("/auth/reset-password")
async def reset_password(request: ResetPasswordRequest):
    return await auth_service.reset_password(request.email)

@app.post("/db/contact")
async def submit_contact(request: ContactSubmissionRequest):
    return await db_service.submit_contact(request.submission)

@app.post("/db/newsletter")
async def subscribe_newsletter(request: NewsletterSubscriptionRequest):
    return await db_service.subscribe_newsletter(request.email)

@app.get("/db/user/{user_id}")
async def get_user_profile(user_id: str):
    return await db_service.get_user_profile(user_id)

@app.put("/db/user/{user_id}")
async def update_user_profile(user_id: str, request: UpdateProfileRequest):
    return await db_service.update_user_profile(user_id, request.updates)
