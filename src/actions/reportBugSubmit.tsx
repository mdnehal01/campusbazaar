"use client"
import { supabase } from "@/lib/supabase"
import toast from "react-hot-toast";

const reportBugSubmit = async(formdata:FormData) => {
    const title=formdata.get("title");
    const environment=formdata.get("environment");
    const reproduce=formdata.get("reproduce");
    const expectedres=formdata.get("expectedres");
    const actualres=formdata.get("actualres");
    const severity=formdata.get("severity");
    const reportedBugs=formdata.get("reportedBugs") as File;    //TODO:insha - add form data to google cloud

    const {data,error}=await supabase
            .from("report_bugs")
            .insert({"title":title, "environment":environment, "reproduce":reproduce, "expectedres":expectedres, "actualres":actualres, "severity":severity})


    if(error){
        toast.error(error.message);
    }
    else{
        toast.success("Report submitted. Thankyou for your time!");
    }
    
}

export default reportBugSubmit