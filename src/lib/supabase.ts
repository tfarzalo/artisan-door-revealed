
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = "https://obfufvpbajnqmrinhmqi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZnVmdnBiYWpucW1yaW5obXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNzUxMzksImV4cCI6MjA2MTY1MTEzOX0.qQZ_gyI9DJ27KM0ASS96yHahXPF3vep4hacyUALKq-o";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
