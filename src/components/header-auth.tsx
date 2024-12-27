import { signOutAction } from "@/app/actions";
import Link from "next/link";
import ButtonType1 from "./customs/buttontype1"; 
import { createClient } from "@/utils/supabase/server";
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { VscSignIn } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <div className="nav-cart md:w-50 bg-[#EBF0FE] md:px-5 md:py-2 px-2 py-2 rounded-3xl flex gap-2"> <CgShoppingCart className='cursor-pointer' size={23} />  <span className='lg:flex hidden'>Cart</span></div>
      <form action={signOutAction}>
        <ButtonType1 className="bg-[#EBF0FE] text-neutral-600 hover:bg-white" type="submit">
          Sign out
        </ButtonType1>
      </form>
    </div>
  ) : (
      <div className="flex gap-x-5">
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link className="p-3 bg-blue-main hover:bg-white rounded-full text-sm flex items-center"  href="/sign-up">{/*<FiUserPlus size={15}/>*/} Sign up</Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign up</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link className="p-3 bg-blue-main hover:bg-white rounded-full text-sm flex items-center" href="/sign-in">{/*<CgLogIn/>*/} Sign in</Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign in</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </div>
  );
}
