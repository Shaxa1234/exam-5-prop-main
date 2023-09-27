import React from "react";
import data from "../../../db_data";
import "./style.scss";
import LinkIcon from "../../../assets/icons/linkicon.svg";

const index = () => {
  const { works } = data;

  return (
    <div className="flex justify-between flex-col gap-y-4 ">
    {works?.map((item, index) => (
      <ul
        className="flex justify-between dark:bg-black gap-x-4 hover:shadow-2xl flexys bg-slate-50 p-4"
        key={index}
      >
        {index % 2 === 0 ? (
          <>
            <img
              className="left_img dark:bg-black w-[480px] h-[304px] transition duration-300 ease-in-out hover:scale-110  max-h-[90%]"
              src={item.img}
              alt=""
            />
  
            <div className="flex  dark:bg-black flex-col w-[576px] gap-y-4">
              <div>
                <h3 className="balo dark:text-white">{item.title}</h3>
              </div>
              <div>
                <p className="bak dark:text-white">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {item.language.map((language, index) => (
                  <button
                    className="hover:shadow-2xl hover:text-white hover:bg-[#000000] px-4 tugma cursor-pointer"
                    key={index}
                  >
                    {language}
                  </button>
                ))}
              </div>
              <div className="badge">
                <a href={item.link} >
                  <img
                    src={LinkIcon}
                    className=""
                    alt=""
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-[576px] gap-y-4">
              <div>
                <h3 className="balo dark:text-white">{item.title}</h3>
              </div>
              <div>
                <p className="bak dark:text-white">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {item.language.map((language, index) => (
                  <button
                    className="hover:shadow-2xl hover:text-white hover:bg-[#000000] px-4 tugma cursor-pointer"
                    key={index}
                  >
                    {language}
                  </button>
                ))}
              </div>
              <div className="badge">
                <a href={item.link} >
                  <img
                    src={LinkIcon}
                    className=""
                    alt=""
                  />
                </a>
              </div>
            </div>
            <img
              className="left_img w-[480px] h-[304px] transition duration-300 ease-in-out hover:scale-110"
              src={item.img}
              alt=""
            />
          </>
        )}
      </ul>
    ))}
  </div>
  
  );
};

export default index;
