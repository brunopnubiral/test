import { socialMediaLogin } from "@/actions";

const Login = () => {
  return (
      <form className='flex flex-row gap-4' action={socialMediaLogin}>
        <button className='px-2 py-4 text-xl text-black font-bold uppercase bg-white/80 brightness-[80%] hover:brightness-100 transition-all rounded-md' type="submit" name="action" value="google">
          sign in with google
        </button>
        <button className='px-2 py-4 text-xl text-black font-bold uppercase bg-white/80 brightness-[80%] hover:brightness-100 transition-all rounded-md' type="submit" name="action" value="google">
         sign in with github
        </button>
      </form>

  )
}
export default Login
