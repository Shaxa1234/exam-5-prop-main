import "./style.scss"
import WorkCard from "../UI/WorkCard"
const index = () => {
    return (
        <section id="work" className="work pb-[96px] dark:bg-[#030712] dark:text-white">
     <div className="container">
     <div className="flex items-center bordiringa">
          <button
            id="hww bg-[#E5E7EB]"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 text-black hover:shadow-2xl hover:text-white hover:bg-black "
          >
            Work
          </button>
        </div>
        <div className="expert flex md:flex flex-col">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="bordiringa hello  flex items-center dark:text-white">
              {" "}
              Some of the noteworthy projects I have built:
            </h3>
          </div>


<WorkCard/>
         
        </div>  
     </div>
      </section>
    );
};

export default index;