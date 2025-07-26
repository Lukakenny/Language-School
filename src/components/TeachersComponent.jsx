import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import teachers from "../data/teachersData";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRef } from "react";

function TeachersComponent() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="my-[100px]">
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-row  justify-between ">
          <div className="flex flex-col  mb-[60px] ">
            <p className="uppercase text-outlineDark text-[18px] leading-[180%]">
              {t("teachers.subtitle")}
            </p>
            <h2 className=" text-[48px] text-textPrimary leading-[130%]">
              {t("teachers.heading")}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center gap-[30px]">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary2 hover:text-white"
            >
              <IoChevronBack />
            </button>
            <button
              ref={nextRef}
              className=" w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center  hover:bg-primary2 hover:text-white"
            >
              <IoChevronForward />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {teachers.map((teacher, index) => {
            return (
              <SwiperSlide role={index}>
                <div className="flex flex-col gap-[40px]">
                  <img src={teacher.image} alt="teacherImage" />

                  <div className="flex flex-col gap-[16px]">
                    <h5 className="text-textPrimary text-[24px] leading-[36px]">
                      {teacher.name}
                    </h5>

                    <div className="flex items-center gap-[12px]">
                      <img
                        src={teacher.flag}
                        alt="flag"
                        className="w-6 h-6 object-cover rounded-full"
                      />
                      <p className="text-[18px] text-bodyText leading-[190%]">
                        {teacher.roleKey}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default TeachersComponent;
