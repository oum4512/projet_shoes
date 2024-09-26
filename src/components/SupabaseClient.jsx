import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://chfleqwkkztbxptrjngh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoZmxlcXdra3p0YnhwdHJqbmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTMzNDUsImV4cCI6MjA0MjgyOTM0NX0.C2Er-Ykb4YcEgcipFWyLv9NAFM8kgOCM97fbzGmWuvM';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
