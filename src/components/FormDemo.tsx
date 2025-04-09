import { useUser } from '@/hooks/useUser';
import React, { useEffect, useState } from 'react'

export const FormDemo = () => {
    const { userDetails } = useUser();
    const [usermail, setUsermail] = useState("");
    
    useEffect(()=>{
        if(!userDetails) return
        setUsermail(userDetails?.email)
    }, [userDetails]);

    const handleChange = () => {

    }

    return (
    <div>
        <form>
            <input className='bg-neutral-100 border' type="email" name='userMail' onChange={handleChange} value={usermail}/>
        </form>
    </div>
  )
}
