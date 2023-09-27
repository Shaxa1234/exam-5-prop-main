import React from "react";
import SecondCard from "../UI/SecondCard"
const index = () => {
 
  return (
    <section id="experience" className="experience dark:bg-[#111827] dark:text-white">
      <div className="container">
        <div className="flex items-center bordiringa">
          <button
            id="hww bg-[#E5E7EB]"
            className="px-[20px] text-black mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-black"
          >
            Experience
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="bordiringa hello  flex items-center px-[30px] dark:text-white">
              {" "}
              Here is a quick summary of my most recent experiences:
            </h3>
          </div>
<SecondCard/>
         
        </div>
      </div>
    </section>
  );
};

export default index;
