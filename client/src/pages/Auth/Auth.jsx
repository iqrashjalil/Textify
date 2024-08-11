import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import logo from "../../assets/logo.png";
const Auth = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [passwordHidden, setPasswordHidded] = useState(false);
  const switchToRegister = () => {
    if (!register) {
      setAnimating(true);
      setTimeout(() => {
        setRegister(true);
        setLogin(false);
        setAnimating(false);
      }, 100);
    }
  };

  const switchToLogin = () => {
    if (!login) {
      setAnimating(true);
      setTimeout(() => {
        setRegister(false);
        setLogin(true);
        setAnimating(false);
      }, 100);
    }
  };

  const eyeClick = () => {
    setPasswordHidded(!passwordHidden);
  };
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-4/5 h-4/5 flex justify-center items-center p-5 md:p-10 border-2 border-slate-100 lg:p-15 xl:p-20 flex-col shadow-md rounded-2xl md:w-3/5 lg:w-2/5">
          <div className="h-fit w-full md:p-4 flex flex-col items-center">
            <h1 className="flex items-center gap-5 font-extrabold text-4xl md:text-5xl">
              Welcome
              <span>
                <img className="w-[60px]" src={logo} alt="" />
              </span>
            </h1>
            <p className="text-slate-400 text-sm  md:text-base pt-4">
              Your chats await — log in to continue!
            </p>
          </div>
          <div className="w-full">
            <button
              onClick={switchToLogin}
              className={`w-2/4 p-2 border-b-2 ${
                login ? "border-slate-700" : "border-slate-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={switchToRegister}
              className={`w-2/4 p-2 border-b-2 ${
                register ? "border-slate-700" : "border-slate-200"
              }`}
            >
              Register
            </button>
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
              {/* Login Form */}
              <form
                className={`absolute w-full transition-transform duration-500 ease-in-out ${
                  login && !animating
                    ? "translate-x-0"
                    : login && animating
                    ? "-translate-x-full"
                    : "-translate-x-full"
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 mt-4 border-2 border-slate-200 rounded-full outline-none focus:border-slate-700"
                />
                <div className="relative">
                  <input
                    type={`${passwordHidden ? "password" : "text"}`}
                    placeholder="Password"
                    className="w-full p-3 mt-4 border-2 border-slate-200 rounded-full outline-none focus:border-slate-700"
                  />
                  <FaRegEye
                    onClick={eyeClick}
                    className={`absolute ${
                      passwordHidden ? "" : "hidden"
                    } top-8 text-2xl cursor-pointer right-5`}
                  />
                  <FaRegEyeSlash
                    onClick={eyeClick}
                    className={`absolute ${
                      passwordHidden ? "hidden" : ""
                    } top-8 text-2xl cursor-pointer right-5`}
                  />
                </div>
                <button className="w-full p-4 mt-4 border-b-2 rounded-full border-slate-200 bg-slate-700 text-white active:border-slate-800 hover:bg-slate-800">
                  Login
                </button>
              </form>

              {/* Register Form */}
              <form
                className={`absolute w-full transition-transform duration-500 ease-in-out ${
                  register && !animating
                    ? "translate-x-0"
                    : register && animating
                    ? "translate-x-full"
                    : "translate-x-full"
                }`}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 mt-4 border-2 border-slate-200 rounded-full outline-none focus:border-slate-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 mt-4 border-2 border-slate-200 rounded-full outline-none focus:border-slate-700"
                />
                <div className="relative">
                  <input
                    type={`${passwordHidden ? "password" : "text"}`}
                    placeholder="Password"
                    className="w-full p-3 mt-4 border-2 border-slate-200 rounded-full outline-none focus:border-slate-700"
                  />
                  <FaRegEye
                    onClick={eyeClick}
                    className={`absolute ${
                      passwordHidden ? "" : "hidden"
                    } top-8 text-2xl cursor-pointer right-5`}
                  />
                  <FaRegEyeSlash
                    onClick={eyeClick}
                    className={`absolute ${
                      passwordHidden ? "hidden" : ""
                    } top-8 text-2xl cursor-pointer right-5`}
                  />
                </div>
                <button className="w-full p-4 mt-4 border-b-2 rounded-full border-slate-200 bg-slate-700 text-white active:border-slate-800 hover:bg-slate-800">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
