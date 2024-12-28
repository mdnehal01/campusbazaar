import { signUpNew } from '@/actions/signUpNew';
import { FormMessage, Message } from '@/components/FormMessage';


const Signup = async (props: {searchParams: Promise<Message>;}) => {

    const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }
  
    return (
    <div className="main h-screen flex">
      <div className="left h-full w-[70%] bg-blue-50"></div>
      <div className="right h-full w-[30%] bg-blue-900"></div>
      <div className="box flex absolute top-[200px] left-[400px] h-[60%] w-[50%] bg-transparent border-white border-8 rounded-3xl ">
        <div className="box-left h-full w-[40%] bg-transparent"></div>
        <div className="box-right h-full w-[61%] bg-white">
          <div className="main-content mx-[20%] my-[10%] h-[80%]">
            <h1 className="text-2xl text-center font-semibold text-slate-700">
              Sign Up for Sustainability
            </h1>
            <h2 className="text-center text-slate-500 text-sm">
              By Buying & Selling old goods, you give them <br /> a new life,
              And reduce wastage
            </h2>
            <br />
            <form method="POST">
              <label className="text-slate-500 text-[14px]">Full Name</label> <br />
              <input
                name="name"
                required
                className="bg-slate-100 text-slate-500 w-full border-2 rounded-3xl border-slate-300"
              />{' '}
              <br />
              <label className="text-slate-500 text-[14px]">Email</label> <br />
              <input
                name="email"
                required
                className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"
              />{' '}
              <br />
              <label className="text-slate-500 text-[14px]">Password</label> <br />
              <input
                name="password"
                type="password"
                required
                className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"
              />{' '}
              <br />
              <label className="text-slate-500 text-[14px]">Confirm Password</label>{' '}
              <br />
              <input
                name="confirm-pass"
                type="password"
                required
                className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"
              />{' '}
              <br />
              <br />
              <button
                type="submit"
                formAction={signUpNew}
                className="bg-blue-500 h-8 text-white w-full border-2 rounded-3xl border-slate-300"
              >
                Sign Up
              </button>{' '}
              <br />
            </form>

            <FormMessage message={searchParams}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
