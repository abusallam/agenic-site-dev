
from fastapi import FastAPI, Request, Depends
from fastapi.responses import HTMLResponse, RedirectResponse
from google.adk.agents.base_agent import BaseAgent
from google.adk.tools.function_tool import FunctionTool
from my_adk_agent.auth_service import AuthService
from google.adk.web import ADKWebApp
import uvicorn

app = FastAPI()
adk_web_app = ADKWebApp()
auth_service = AuthService()

class UserAgent(BaseAgent):
    def __init__(self):
        super().__init__()

    def run(self, command: str):
        return f"You commanded me to: {command}"

adk_web_app.add_agent("user", UserAgent())

@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if request.url.path == "/login" or request.url.path.startswith("/static"):
        return await call_next(request)

    user = await auth_service.get_current_user()
    if not user:
        return RedirectResponse(url="/login")

    return await call_next(request)

@app.get("/login", response_class=HTMLResponse)
async def login_page():
    return """
    <html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <h1>Login</h1>
            <form action="/login" method="post">
                <input type="email" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <button type="submit">Login</button>
            </form>
        </body>
    </html>
    """

@app.post("/login")
async def login(request: Request):
    form = await request.form()
    email = form.get("email")
    password = form.get("password")
    response = await auth_service.sign_in(email, password)
    if response.error:
        return HTMLResponse(content=f"<h1>Login Failed</h1><p>{response.error.message}</p>", status_code=400)
    return RedirectResponse(url="/", status_code=302)

app.mount("/", adk_web_app.get_app())

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8002)
