import React from "react";
import Link from "./Link";

function Card({ datas }) 
{

  return (
    <div className="bg-white shadow-md border border-red-600 shadow-gray-400 mt-5 w-[660px] rounded-2xl ">
      <div className="bg-pink-600 h-14 text-2xl text-sky-200 text-center rounded-t-2xl pt-2">
        {datas.topic}
      </div>
      {datas.data.map((data, index) => {
        return <Link key={index} data={data} />;
      })}
    </div>
  );
}

export default Card;
