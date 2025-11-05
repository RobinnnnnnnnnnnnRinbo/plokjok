import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootPath = join(__dirname, '..', '..')

dotenv.config({ path: join(rootPath, '.env') })

export const supabaseUrl = process.env.VITE_SUPABASE_URL
export const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials not found in environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export const supabaseHeaders = {
  apikey: supabaseKey,
  Authorization: `Bearer ${supabaseKey}`,
  "Content-Type": "application/json",
};

// Test connection function
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('products').select('count')
    if (error) throw error
    return data
  } catch (error) {
    throw new Error(`Database connection error: ${error.message}`)
  }
}

export { supabase }