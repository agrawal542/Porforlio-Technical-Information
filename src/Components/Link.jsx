import React, { useState } from "react";

function Link({ data }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="container mx-auto p-4 border border-gray-300  shadow-md ">
      <div className="flex justify-between space-x-4">
        <div>
            <a
            href={data.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl hover:text-blue-800 font-semibold mr-2"
            >
            {data.title}
            </a>
            <span className={copied ? `text-sm bg--300 bg-gray-200 text-blue-800 rounded-xl px-2 py-1` : `text-sm bg-gray-200 rounded-xl px-2 py-1`}>{data.src}</span>
        </div>
        

        <div className="relative">
            <button onClick={() => copyToClipboard(data.src)} className="bg-red-500 text-sm hover:bg-red-600 text-white font-bold py-1 px-2 rounded-xl focus:outline-none focus:shadow-outline">
                
                Copy URL
            </button>
            {copied && (
            <p className="bg-green-400 text-white px-2 py-1 rounded-full text-s absolute left-[85px] bottom-0">
                copied
            </p>
            )}
        </div>
       
      </div>
    </div>
  );
}

export default Link;
