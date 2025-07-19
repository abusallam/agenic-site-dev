// Mock Supabase client for development when environment variables are not available
const createMockClient = () => ({
  auth: {
    signUp: async () => ({ data: null, error: { message: "Supabase not configured" } }),
    signInWithPassword: async () => ({ data: null, error: { message: "Supabase not configured" } }),
    signOut: async () => ({ error: { message: "Supabase not configured" } }),
    getUser: async () => ({ data: { user: null }, error: { message: "Supabase not configured" } }),
    resetPasswordForEmail: async () => ({ data: null, error: { message: "Supabase not configured" } }),
  },
  from: () => ({
    insert: () => ({ select: () => ({ data: null, error: { message: "Supabase not configured" } }) }),
    select: () => ({ eq: () => ({ single: () => ({ data: null, error: { message: "Supabase not configured" } }) }) }),
    update: () => ({ eq: () => ({ select: () => ({ data: null, error: { message: "Supabase not configured" } }) }) }),
  }),
})

let supabase: any

try {
  if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    const { createClient } = require("@supabase/supabase-js")
    supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  } else {
    supabase = createMockClient()
  }
} catch (error) {
  console.warn("Supabase client creation failed, using mock client:", error)
  supabase = createMockClient()
}

export { supabase }

// Types for our database
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  company?: string
  service_interest?: string
  message: string
  created_at?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  created_at?: string
}

export interface User {
  id?: string
  email: string
  first_name: string
  last_name: string
  company?: string
  role?: string
  created_at?: string
  updated_at?: string
}

const API_URL = 'http://localhost:8000';

// Auth helper functions with error handling
export const authHelpers = {
  async signUp(email: string, password: string, userData: Partial<User>) {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, user_data: userData }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Authentication service unavailable" } };
    }
  },

  async signIn(email: string, password: string) {
    try {
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Authentication service unavailable" } };
    }
  },

  async signOut() {
    try {
      const response = await fetch(`${API_URL}/auth/signout`, {
        method: 'POST',
      });
      return await response.json();
    } catch {
      return { error: { message: "Authentication service unavailable" } };
    }
  },

  async getCurrentUser() {
    try {
      const response = await fetch(`${API_URL}/auth/user`);
      return await response.json();
    } catch {
      return { user: null, error: { message: "Authentication service unavailable" } };
    }
  },

  async resetPassword(email: string) {
    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Authentication service unavailable" } };
    }
  },
};

// Database helper functions with error handling
export const dbHelpers = {
  async submitContact(submission: ContactSubmission) {
    try {
      const response = await fetch(`${API_URL}/db/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submission }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Database service unavailable" } };
    }
  },

  async subscribeNewsletter(email: string) {
    try {
      const response = await fetch(`${API_URL}/db/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Database service unavailable" } };
    }
  },

  async getUserProfile(userId: string) {
    try {
      const response = await fetch(`${API_URL}/db/user/${userId}`);
      return await response.json();
    } catch {
      return { data: null, error: { message: "Database service unavailable" } };
    }
  },

  async updateUserProfile(userId: string, updates: Partial<User>) {
    try {
      const response = await fetch(`${API_URL}/db/user/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates }),
      });
      return await response.json();
    } catch {
      return { data: null, error: { message: "Database service unavailable" } };
    }
  },
};
