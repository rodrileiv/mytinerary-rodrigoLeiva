import React, { useState, useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "@react-oauth/google";
import { server } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { userSignIn } from "../store/actions/userActions";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputEmail = useRef();
  const inputPass = useRef();

  const handleChangeData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const userData = { ...data };
    const res = await server.post("/auth/signin", userData);
    console.log(res.data);
  };

  const handleSubmit = async () => {
    const userData = {
      email: inputEmail.current.value,
      password: inputPass.current.value,
    };
    const res = await server.post("/auth/signin", userData);
    console.log(res.data);
    dispatch(userSignIn(res.data));
    navigate("/");
  };

  const handleSubmitGoogle = async (data) => {
    const userData = { ...data };
    if (userData.terms) delete userData.terms;
    const res = await server.post("/auth/signin", userData);
    console.log(res.data);
    dispatch(userSignIn(res.data));
    navigate("/");
  };

  return (
    <div className="w-full max-w-[800px] px-3 mx-auto flex-1 items-center shrink-0 mt-64">
      <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
          <h5>Login with</h5>
        </div>
        <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
            {}
            <GoogleLoginButton fn={handleSubmitGoogle} />
          <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
            <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">
              or
            </p>
          </div>
        </div>
        <div className="flex-auto p-6">
          <form role="form text-left" onSubmit={handleSubmitData}>
            <div className="mb-4">
              <input
                name="email"
                onChange={handleChangeData}
                value={data.email}
                ref={inputEmail}
                aria-describedby="email-addon"
                aria-label="Email"
                placeholder="Email"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="email"
              />
            </div>
            <div className="mb-4">
              <input
                name="password"
                onChange={handleChangeData}
                value={data.password}
                ref={inputPass}
                aria-describedby="password-addon"
                aria-label="Password"
                placeholder="Password"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="password"
              />
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="flex justify-center w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <p className="mt-4 mb-0 leading-normal text-sm">
              Don&apos;t have an account?{" "}
              <Anchor className="font-bold text-slate-700" to="/signup">
                Sign up
              </Anchor>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;