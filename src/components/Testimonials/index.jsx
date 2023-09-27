import "./style.scss"
import CardTestimonials from "../UI/CardTestimonials"
const index = () => {
  return (
    <>
      <section id="testimonials" className="testimonials pt-[96px] pb-[96px] dark:bg-[#111827] dark:text-white">
        <div className="flex items-center bordiringa">
          <button
            id="hww bg-[#E5E7EB]"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB] text-black  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-black "
          >
            Testimonials
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center  mb-[48px]">
            <h3 className="bordiringa hello  flex items-center dark:text-white">
              {" "}
              Nice things people have said about me:
            </h3>
          </div>



          <CardTestimonials />


        </div>
      </section>
    </>
  );
};

export default index;