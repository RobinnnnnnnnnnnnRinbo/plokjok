import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from './supabase.config.js'

// Create the main client (uses anon key)
export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey,
  supabaseConfig.options
)

// Create admin client (uses service role key) - Server-side only!
export const supabaseAdmin = supabaseConfig.serviceRoleKey 
  ? createClient(
      supabaseConfig.url,
      supabaseConfig.serviceRoleKey,
      {
        ...supabaseConfig.options,
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : null

// Development logger
const logger = {
  log: (...args) => {
    if (supabaseConfig.dev.enableLogging) {
      console.log('[Supabase]', ...args)
    }
  },
  error: (...args) => {
    if (supabaseConfig.dev.enableLogging) {
      console.error('[Supabase Error]', ...args)
    }
  }
}