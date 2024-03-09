import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dumhitkuecajzeddtgin.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bWhpdGt1ZWNhanplZGR0Z2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5ODgwNjEsImV4cCI6MjAyNTU2NDA2MX0.qKZOh5SKGlTNdiQGFXehcD-mHEtVjwovYEzZAzUdOTo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
