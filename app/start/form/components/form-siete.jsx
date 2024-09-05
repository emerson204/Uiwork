import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";
import ContentForms from "../../components/content-forms";

export default function FormSiete() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <section>
        <div className="bg-white relative items-center w-[90%] px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Reset password</h2>
              </div>
            </div>
            <form>
              <input
                value="https://jamstacker.studio/thankyou"
                type="hidden"
                name="_redirect"
              />
              <div className="mt-4 space-y-6">
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-full">
                  <button
                    type="submit"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
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
      <section>
        <div className="bg-white relative items-center w-[90%] px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Reset password</h2>
              </div>
            </div>
            <form>
              <input
                value="https://jamstacker.studio/thankyou"
                type="hidden"
                name="_redirect"
              />
              <div className="mt-4 space-y-6">
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-full">
                  <button
                    type="submit"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentForms>
  );
}
