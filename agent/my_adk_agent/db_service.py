
from supabase import Client
from .supabase_client import get_supabase_client

class DbService:
    def __init__(self):
        self.supabase: Client = get_supabase_client()

    async def submit_contact(self, submission):
        try:
            data, count = self.supabase.table('contact_submissions').insert(submission).execute()
            return data
        except Exception as e:
            return {"error": str(e)}

    async def subscribe_newsletter(self, email):
        try:
            data, count = self.supabase.table('newsletter_subscriptions').insert({"email": email}).execute()
            return data
        except Exception as e:
            return {"error": str(e)}

    async def get_user_profile(self, user_id):
        try:
            data, count = self.supabase.table('user_profiles').select('*').eq('id', user_id).execute()
            return data
        except Exception as e:
            return {"error": str(e)}

    async def update_user_profile(self, user_id, updates):
        try:
            data, count = self.supabase.table('user_profiles').update(updates).eq('id', user_id).execute()
            return data
        except Exception as e:
            return {"error": str(e)}
