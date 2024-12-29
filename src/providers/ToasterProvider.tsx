"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            position="top-center"

            toastOptions={{
                success:{
                    style:{
                        background:"green",
                        color:"white"
                    }
                },
                error:{
                    style: {
                        background: 'red',
                        color: 'white'
                    }
                }
            }}
        />
    )
}

export default ToasterProvider;