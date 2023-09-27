import data from "../../../db_data";
import "./style.scss"

const index = () => {
    const { data_experience } = data;
    return (
        <div className="center-card mb-[96px] flex flex-col justify-between gap-y-[48px]">
          {data_experience?.map((item) => (
            
              
                <div className="flex ulli btrr hover:shadow-2xl cardss  p-8 justify-between dark:bg-[#1F2937]">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex justify-between bgid  text-center gap-x-[48px]">
                    <div>
                      <h3 className="one"> {item.title}</h3>
                      <div className="imenem">
                        <p className=" items-start text-start">{item.work_1}</p>
                        <p className=" items-start text-start">{item.work_1}</p>
                        <p className=" items-start text-start">{item.work_1}</p>


                      </div>
                    </div>


                    <div>
                      {" "}
                      <h4>{item.duration}</h4>
                    </div>
                  </div>
                </div>
          
            
            ))}
            </div>
    );
};

export default index;