import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";
import ContentForms from "../../components/content-forms";

export default function FormNueve() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <div>
        <section className="rounded-md p-2 bg-white">
          <div className="flex items-center justify-center my-3">
            <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2"></div>
              <h2 className="text-2xl font-bold leading-tight text-black">
                Sign up to create account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account? Sign In
              </p>
              <form className="mt-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Full Name"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  text-black"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        placeholder="Password"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                        name="password"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <label className="text-base font-medium text-gray-900">
                        Profile Picture
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="file-input w-full max-w-xs"
                        type="file"
                        name="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
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
    <ContentForms className="bg-gray-300">
      <div>
        <section className="rounded-md p-2 bg-white">
          <div className="flex items-center justify-center my-3">
            <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2"></div>
              <h2 className="text-2xl font-bold leading-tight text-black">
                Sign up to create account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account? Sign In
              </p>
              <form className="mt-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Full Name"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  text-black"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        placeholder="Password"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                        name="password"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <label className="text-base font-medium text-gray-900">
                        Profile Picture
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="file-input w-full max-w-xs"
                        type="file"
                        name="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentForms>
  );
}
