import { createClient } from "@supabase/supabase-js";

console.log("Supabase URL:", process.env.EXPO_PUBLIC_SUPABASE_URL); // Debugging

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY!;



const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
