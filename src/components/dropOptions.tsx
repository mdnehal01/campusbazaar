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


export function DropDownOptions() {

  const router = useRouter();

  // TODO: if profile picture there then show profile picture instead of Static image icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-9 rounded-full border-2 border-pink-300 cursor-pointer h-9 bg-center bg-contain" style={{
          backgroundImage: `url('/category/1.png')`
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

          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite friends</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>via Whatsapp</DropdownMenuItem>
                <DropdownMenuItem>via Link</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem onClick={()=>router.push("/report-bugs")}>
            Report Bugs
            <DropdownMenuShortcut>🪲</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
