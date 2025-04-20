export interface UserDetails{
    user_id: string;
    name: string;
    avatar_url?: string;
    email:string;
    phone_number?:number;
    college:string;
    department:string;
    year:string;
    recent_searches:string[];
    created_at:string;
    profile_pic_url:string;
}

export interface Products{
    product_id:string;
    seller:string;
    condition:number;
    title:string;
    category:string;
    brand:string;
    price:number;
    current_price:number;
    description:string;
    created_at:string;
    image_urls:{
        primary: string[];
        secondaryLeft: string;
        secondaryRight: string;
        secondaryBack:string;
    };
    category_id:string;
    total_likes:number;
    size:string;
    defect:string;
    listed:boolean;
    sold:boolean;
    keywords:string[];
}

