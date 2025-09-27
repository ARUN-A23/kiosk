// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Read environment variables from Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a single supabase client for the whole app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
