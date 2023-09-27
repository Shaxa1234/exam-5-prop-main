import Card from '../UI/Card'
import "./style.scss";

const index = () => {
  return (
    <section id="skills" className='dark:bg-[#030712]'>
      <div className='container'>
      <div className="pb-[106px]">
        <div className="flex items-center bordiringa">
          <button
            id="hww bg-[#E5E7EB]"
            className="px-[20px] mt-[40px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-black "
          >
            Skills
          </button>
        </div>
        <div className="v">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="bordiringa hello  flex items-center px-[30px] dark:text-white">
              The skills, tools and technologies I am really good at:
            </h3>
          </div>
        </div>
        <Card/>
      </div>
      </div>
    </section>
  );
};

export default index;
