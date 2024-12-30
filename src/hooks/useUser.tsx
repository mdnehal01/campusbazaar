"use client"
import { UserDetails } from "@/types";

import { User } from "@supabase/auth-helpers-nextjs";

// KNOW: useUser will fetch the current user from {auth table} {the user who is logged in based on the session}
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    // subscription: Subscription | null;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
)

export interface Props {
    [propName: string]: any;   
}

export const MyUserContextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    
    // KNOW: Here the user who is logged in is stored in a variable name user
    const user = useSupaUser();

    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null); 
    // const [subscription, setSubscription] = useState<Subscription | null>(null);

    // KNOW: here we are getting the user details from the {Public users table}
    const getUserDetails = () => supabase.from('users').select('*').eq('user_id', user?.id).single();

    // const getSubscription = () =>
    //     supabase
    //         .from('subscriptions')
    //         .select('*, prices(*, products(*))')
    //         .eq('user_id', user?.id) // Filter by the current user's ID
    //         .in('status', ['trialing', 'active'])
    //         .single();

    useEffect(() => {
        if (user && !isLoadingData && !userDetails /* && !subscription*/) {
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails() /*,getSubscription()*/]).then(
                (results) => {
                    const userDetailsPromise = results[0];
                    // const subscriptionPromise = results[1];

                    if(userDetailsPromise.status === "fulfilled") {
                        setUserDetails(userDetailsPromise.value.data as UserDetails);
                    }

                    // if(subscriptionPromise.status === "fulfilled") {
                    //     setSubscription(subscriptionPromise.value.data as Subscription);
                    // }

                    setIsLoadingData(false);

                }
            );
        } else if(!user && !isLoadingUser && !isLoadingData){
            setUserDetails(null);
            // setSubscription(null);
        }
    }, [user, isLoadingUser]);

    const value = {
        accessToken, 
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        // subscription
    };
 
    return <UserContext.Provider value={value} {...props} />
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a MyUserContextProvider");
    } 

    return context;
}