import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";
import ContentForms from "../../components/content-forms";

export default function FormDos() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="emails"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="passwords"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div>
            <a className="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </a>
        </div>
      </div>
  `;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(copyCode);
      setCopyText(true);

      toast({
        title: "Copiado correctamente ✅",
      });

      setTimeout(() => {
        setCopyText(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContentForms className="bg-[#212121]">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 bg-white"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 bg-white"
            />
          </div>
          <div>
            <a className="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </a>
        </div>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentForms>
  );
}
