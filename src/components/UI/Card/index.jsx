import data from "../../../db"
import "./style.scss"
const index = () => {
    const { languages,second } = data;

    return (
        
        <div>
             <div className=" wrapper flex flex-wrap  justify-between mb-[48px]">
        {languages?.map((item) => (
          
           <div className="card   flex flex-col items-center p-3">
            <div className="languages flex items-center mb-[8px] ">
              <img className="w-[64px] h-[64px] " src={item.img} alt="" />
              
            </div>

            <h4 className="flex text-center justify-center title ">
              {item.title}
            </h4>
        
          </div>
        
          
        ))}
      </div>
      
     
        </div>
    );
};

export default index;