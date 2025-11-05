import { createClient } from '@supabase/supabase-js'

const isDev = process.env.NODE_ENV === 'development'
const useLocal = process.env.USE_LOCAL_SUPABASE === 'true'

export const supabaseConfig = {

  url: useLocal 
    ? process.env.SUPABASE_LOCAL_URL 
    : process.env.SUPABASE_URL,
  
  anonKey: useLocal 
    ? process.env.SUPABASE_LOCAL_ANON_KEY 
    : process.env.SUPABASE_ANON_KEY,
  
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  
  options: {
    auth: {
      autoRefreshToken: !isDev, 
      persistSession: !isDev,  
      detectSessionInUrl: !isDev,
      storage: isDev ? undefined : localStorage, 
    },
    
    db: {
      schema: 'public'
    },
    
    global: {
      headers: {
        'x-application-name': 'my-app',
        'x-environment': isDev ? 'development' : 'production'
      }
    },
    

    realtime: {
      enabled: !isDev
    }
  },
  

  dev: {
    skipAuth: isDev && process.env.SKIP_AUTH_IN_DEV === 'true',
    enableLogging: isDev && process.env.ENABLE_QUERY_LOGGING === 'true',
    mockData: isDev, 
    useLocal: useLocal
  }
}
