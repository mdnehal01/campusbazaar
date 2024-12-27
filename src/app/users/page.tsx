'use client'

import React, { useEffect } from "react";
import { useUser } from "@/hooks/useUser"; // Adjust import path

const Page = () => {
    const { user, userDetails, isLoading } = useUser(); // Now this should work fine

    useEffect(() => {
        if (isLoading) {
            console.log("Loading user details...");
        } else {
            console.log("User:", user);
            console.log("User Details:", userDetails);
        }
    }, [user, userDetails, isLoading]);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <p>User: {user?.email}</p>
                    <p>Details: {userDetails ? JSON.stringify(userDetails) : 'No details available'}</p>
                </div>
            )}
        </div>
    );
};

export default Page;
