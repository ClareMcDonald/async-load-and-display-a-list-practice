const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNDkzMiwiZXhwIjoxOTU1MDgwOTMyfQ.qkjn4G9iVR8fq07h5llNRqFChEHuWRxt4DhPuuCdM8I';

const SUPABASE_URL = 'https://dhnqrpqiduiavjxubliy.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getCandies() {
    const response = await client
        .from('candies')
        .select();
    
    return response.data;
}

export async function getCats() {
    const response = await client
        .from('cats')
        .select();
    
    return response.data;
}