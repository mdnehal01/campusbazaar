import InputType1 from '@/components/customs/inputType1'
import React from 'react'

var inputClass="w-[450px] border-black rounded-md h-[35px] p-2 border-l-2 border-b-2 focus:border-l-0 focus:border-b-0 focus:outline-none transition-all duration-200";

function page() {
  return (
    <div className='h-screen w-screen bg-white'>
        <div className="outer-div h-full mt-20 mx-[15%] flex ">
            
            <div className="reportBugManual text-gray-500 w-[60%] mx-[2%] ">
                <h1 className="font-bold font-sans text-4xl m-[5%] ">Manual on how to Report Bugs?</h1>

            <ul className='list-disc'>
                <li> <strong> Title: </strong>Write a brief title for the Bug you are about to report, in less than 15 words </li>
                <li> <strong> Environment: </strong> On which environment did you notice this bug? Please specify: Desktop/Mobile & OS:Windows/Linux/Android/MacOS etc</li>
                <li> <strong> Steps to Reproduce the Bug: </strong> Briefly describe the steps you took, so that this bug can be reproduced. <br/> For example: Go to settings > Profile > Log Out </li>
                <li> <strong> Expected Result: </strong> What should happen when you trigger the call to action? <br/> Expected: “...the app should not crash.“</li>
                <li> <strong> Actual Result: </strong> What happened actually, example: “button does not work as expected”</li>
                <li> <strong>Severity of the Bug: </strong>
                    We recommend using one of three categories of severity in your bug report  <br/>
                    1. High/Critical: Anything that impacts the normal user flow or blocks app usage <br/>
                    2. Medium: Anything that negatively affects the user experience <br/>
                    3. Minor: ALL else (e.g., typos, missing icons, layout issues, etc.) 
                </li>
                <li><strong> Proof: </strong>Please attach any screenshots, videos, or log files if required</li>
            </ul>
                
            </div>

            <div className="reportBugForm w-[40%] mx-[2%]">
                <h1 className="font-bold text-blue-900 font-sans text-4xl m-[5%]">Report Bugs Form</h1>
                <form action="" className='flex flex-col gap-y-4 '>
                
                    <input type="text" placeholder="Title" className={inputClass} required />
                    <input type="text" placeholder="Environment  (Mobile/Desktop)" className={inputClass} required />
                    <input type="text" placeholder="Reproduce" className={inputClass} required/>
                    <input type="text" placeholder="Expected Result" className={inputClass} required/>
                    <input type="text" placeholder="Actual Result" className={inputClass} required/>
                    <input type="text" placeholder="Severity" className={inputClass} required/>
                    <br/>
                    <input type="file" name="reportedBugs" />

                </form>
            </div>

        </div>
    </div>
  )
}

export default page