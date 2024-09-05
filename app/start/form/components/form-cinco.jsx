import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";
import ContentForms from "../../components/content-forms";

export default function FormCinco() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl text-sky-900 font-bold mb-6">
          Update Your Profile
        </h2>

        <form method="post" action="#">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full border border-blue-300 rounded-md bg-white"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md border-blue-300 bg-white"
              name="email"
              id="emails"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 "
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md border-blue-300 bg-white"
              rows="3"
              name="bio"
              id="bio"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
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
    <ContentForms className="bg-white">
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl text-sky-900 font-bold mb-6">
          Update Your Profile
        </h2>

        <form method="post" action="#">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full border border-blue-300 rounded-md bg-white text-black"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md border-blue-300 bg-white text-black"
              name="email"
              id="email"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 "
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md border-blue-300 bg-white text-black"
              rows="3"
              name="bio"
              id="bio"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentForms>
  );
}
