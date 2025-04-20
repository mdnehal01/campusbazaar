"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import signOut from "@/actions/signOut"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useUser } from "@/hooks/useUser";
import { PrelinkImage } from "@/data";
import ShareModal from "./ui/ShareModal";


export function DropDownOptions() {

  const router = useRouter();
  const {userDetails} = useUser();
  const avatar = userDetails?.profile_pic_url;
  //for dialog box
  const [showModal, setShowModal] = useState(false);


  // TODO: if profile picture there then show profile picture instead of Static image icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-9 rounded-full border-2 border-pink-300 cursor-pointer h-9 bg-center bg-contain" style={{
          backgroundImage: `url('${PrelinkImage}${avatar}')`
        }}></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push("/my-products")}>
            My Products
          </DropdownMenuItem>

          <DropdownMenuItem onClick={()=>router.push("/report-bugs")}>
            Report Bugs
            <DropdownMenuShortcut>🪲</DropdownMenuShortcut>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          
          <DropdownMenuItem onClick={()=>setShowModal(prev => !prev)}>
            Invite friends
          </DropdownMenuItem>

          <DropdownMenuItem onClick={()=>router.push("/about-us")}>
            About Us
          </DropdownMenuItem>

          <DropdownMenuItem disabled>
            Settings
          </DropdownMenuItem>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>


      {/* dialog */}

      {showModal && (
        <ShareModal
          url={`localhost:3000/signup?referralcode=${userDetails?.user_id}`}
          onClose={() => setShowModal(false)}
        />
      )}


{/* 
      {dialogBox && 
      <div className="h-screen w-screen bg-green-400/10 absolute left-0 top-0 grid place-items-center backdrop-blur-sm">

      <div className="h-[250px] w-[450px] bg-white border border-blue-950 shadow-lg rounded-md z-10">
        <div className="p-5 flex justify-between rounded-md">
          <h6>Share now! </h6>
          <CgClose onClick={()=>setDialogBox(false)} color="red"/>
        </div>
      </div>

      </div>
      } */}
      


    </DropdownMenu>
  )
}
