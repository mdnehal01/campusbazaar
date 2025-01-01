"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            position="top-center"

            toastOptions={{
                success:{
                    style:{
                        background:"#D0E8C5",
                        color:"black"
                    }
                },
                error:{
                    style: {
                        background: '#FFE2E2',
                        color: 'black'
                    }
                }
            }}
        />
    )
}

export default ToasterProvider;