"use client";
import React from "react";
import InfluenceReadinessTest from "../Components/InfluenceReadinessTest";
const page = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="flex flex-col md:flex-row gap-0 max-md:max-w-full">
        <div className="hidden md:flex md:flex-none w-[80px] overflow-hidden flex-col pl-4 pt-6 pb-12 border-r border-solid items-end max-md:flex-wrap">
          <div className="w-justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] bg-slate-800 flex flex-col w-7 h-7 px-2 rounded-[70px] border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7f8e42e71148649c566d8fedaa340dce36bd24b9ab13060beba7ce68de6c5f?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
              className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
            />
          </div>
          <div className="items-center self-stretch flex flex-col mt-6 mb-[580px] pl-4 pr-8 py-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8a494c5374191464628c32f59170127d7f0509c1dbbdcc898577dac075b7ff?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
              className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/663b62b15ec6a8be01d4fe01f46b9e3cdef96376a95a6f02dbf5078bdd69917d?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
              className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden mt-10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d802558c65a15c1ee809920905da10723b94353d1b1aa3272b5cea939de930?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
              className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden  mt-10"
            />
          </div>
        </div>
        <InfluenceReadinessTest></InfluenceReadinessTest>
      </div>
    </div>
  );
};

export default page;
