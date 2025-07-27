import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

function TestimonialsComponent() {
  const { t } = useTranslation();

  const testimonials = t("testimonials", { returnObjects: true });

  return (
    <section className="my-[100px]">
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="uppercase text-outlineDark text-[18px] leading-[180%]">
              {t("testimonial.subtitle")}
            </p>
            <h2 className=" text-[48px] text-textPrimary leading-[130%]">
              {t("testimonial.heading")}
            </h2>
          </div>

          <div>
            <Swiper
              // install Swiper modules
              spaceBetween={50}
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="pb-[80px] relative"
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-row gap-[128px]">
                      <div className=" hidden lg:block w-[50%]">
                        <img src={testimonial.image} alt="" />
                      </div>

                      <div className="flex flex-col gap-[20px] w-full lg:w-[50%]  lg:justify-center">
                        <div className="flex flex-col gap-[19px]">
                          <h3 className="text-textPrimary text-[32px] leading-[36px] font-bold">
                            {testimonial.name}
                          </h3>
                          <p className="  text-[18px] leading-[190%] text-bodyText">
                            {testimonial.course}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[26px] leading-[40px] text-textPrimary">
                            {testimonial.quote}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6 swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsComponent;
