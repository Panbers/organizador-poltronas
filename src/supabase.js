import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://https://jnydylymxpkrqllqcyse.supabase.co
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueWR5bHlteHBrcnFsbHFjeXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwOTgxMTgsImV4cCI6MjA4ODY3NDExOH0.fxUbdm7oItzJdW8ycpuLJtznVjwTzmLOz8ialZ96Yt0'

export const supabase = createClient(supabaseUrl, supabaseKey)