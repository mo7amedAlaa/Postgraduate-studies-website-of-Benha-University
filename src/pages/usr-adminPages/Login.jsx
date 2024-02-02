import { facLogo, uniLogo } from '../../assets';

const Login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center flex items-center gap-1 justify-center ">
          <label className="mr-1">Benha University || BFCAI</label>
          <button
            type="button"
            className="mx-1 h-7 w-7 p-1  rounded-full bg-main hover:bg-cyan-400   text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <img
              src={uniLogo}
              alt="bfcai Image"
              className="flex justify-center items-center h-full  w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-7 w-7  p-1 rounded-full bg-main hover:bg-cyan-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <img
              src={facLogo}
              alt=""
              className="flex justify-center items-center h-full w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Postgraduate courses
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className=" text-main hover:text-cyan-400 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4  bg-main hover:bg-cyan-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{' '}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;