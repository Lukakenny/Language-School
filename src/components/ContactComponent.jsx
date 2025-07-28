import React from "react";
import { useTranslation } from "react-i18next";

function ContactComponent() {
  const { t } = useTranslation();
  return (
    <section className="my-[100px] lg:py-[100px] flex items-center justify-center ">
      <div className="flex flex-col gap-[16px] items-center text-center">
        <h2 className="text-[48px] leading-[1.3] text-textPrimary">
          {t("contact.heading")}
        </h2>
        <p className="text-[18px] leading-[1.9] text-bodyText">
          {t("contact.subtitle")}
        </p>

        <div className="flex  flex-row items-center gap-[20px] mt-[40px]">
          <input
            type="text"
            className="bg-#F8FAFE rounded-[73px] border border-outlineDark px-[30px] py-[15px] focus:border-blue-500 focus:outline-none w-[300px] sm:w-[350px] md:w-[400px] "
            placeholder="Enter your Email"
          />
          <button className="rounded-full bg-primary2 text-white text-18px py-[17px] px-[32px]">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
