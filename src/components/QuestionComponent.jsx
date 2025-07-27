import React from "react";
import { useTranslation } from "react-i18next";

function QuestionComponent() {
  const { t } = useTranslation();
  const faqs = t("faq", { returnObjects: true });
  return (
    <section className="my-[100px]">
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col">
            <p className="uppercase text-outlineDark text-[18px] leading-[180%]">
              {t("question.subtitle")}
            </p>
            <h2 className=" text-[48px] text-textPrimary leading-[130%]">
              {t("question.heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group p-6 bg-white rounded-xl shadow border border-gray-200 open:shadow-lg open:bg-primary2 open:text-white  transition-all"
              >
                <summary className="cursor-pointer flex items-center justify-between text-textPrimary font-semibold text-[18px] group-open:text-white">
                  {item.question}
                  <span className="text-primary2 text-[24px] transition-transform duration-300 group-open:rotate-45  group-open:text-white ">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-bodyText text-[16px] leading-relaxed group-open:text-white">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionComponent;
