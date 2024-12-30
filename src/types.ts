export interface UserDetails{
    user_id: string;
    name: string;
    avatar_url?: string;
    email:string;
    phone_number?:number;
    college:string;
    recent_searches:string[];
    created_at:string;
}
