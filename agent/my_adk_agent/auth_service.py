
from supabase import Client
from .supabase_client import get_supabase_client

class AuthService:
    def __init__(self):
        self.supabase: Client = get_supabase_client()

    async def sign_up(self, email, password, user_data):
        try:
            response = self.supabase.auth.sign_up({
                "email": email,
                "password": password,
                "options": {
                    "data": user_data
                }
            })
            return response
        except Exception as e:
            return {"error": str(e)}

    async def sign_in(self, email, password):
        try:
            response = self.supabase.auth.sign_in_with_password({
                "email": email,
                "password": password
            })
            return response
        except Exception as e:
            return {"error": str(e)}

    async def sign_out(self):
        try:
            response = self.supabase.auth.sign_out()
            return response
        except Exception as e:
            return {"error": str(e)}

    async def get_current_user(self):
        try:
            response = self.supabase.auth.get_user()
            return response
        except Exception as e:
            return {"error": str(e)}

    async def reset_password(self, email):
        try:
            response = self.supabase.auth.reset_password_for_email(email)
            return response
        except Exception as e:
            return {"error": str(e)}
