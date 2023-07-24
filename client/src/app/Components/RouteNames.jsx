"use client";

import React from "react";
import { useRouter } from "next/navigation";

function RouteNames() {
  const router = useRouter();

  return (
    <div className="bg-[#D1D1D1] hidden lg:block">
      <div className="w-4/5 mx-auto flex justify-between">
        <h1 onClick={() => router.push("/career")} className="text-black poppins-medium hover:cursor-pointer">
          CAREER
        </h1>
        <h1 onClick={() => router.push("/studenthq")} className="text-black poppins-medium hover:cursor-pointer">
          STUDENT-HQ
        </h1>
        <h1 onClick={() => router.push("/xplore")} className="text-black poppins-medium hover:cursor-pointer">
          XPLORE
        </h1>
        <h1 onClick={() => router.push("/campuslife")} className="text-black poppins-medium hover:cursor-pointer">
          CAMPUS LIFE
        </h1>
        <h1 onClick={() => router.push("/news")} className="text-black poppins-medium hover:cursor-pointer">
          NEWS
        </h1>
        <h1 onClick={() => router.push("/spotlight")} className="text-black poppins-medium hover:cursor-pointer">
          SPOT LIGHT
        </h1>
      </div>
    </div>
  );
}

export default RouteNames;
