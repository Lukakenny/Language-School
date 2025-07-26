import { useTranslation } from "react-i18next";
import play from "../assets/Play.png";
import glass from "../assets/Glass Icons.png";
import paper from "../assets/Paper.png";

function ValuseComponent() {
  const { t } = useTranslation();

  return (
    <section className="my-[200px]">
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col items-center justify-center md:gap-[50px]">
          <div className="flex flex-col items-center">
            <p className="text-[18px] text-bold text-outlineDark leading-[190%] uppercase">
              {t("value.subtitle")}
            </p>
            <h2 className="text-textPrimary text-[48px] leading-[130%]">
              {t("value.heading")}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center  gap-[120px] md:gap-[0px] mt-[120px] md:mt-[50px]">
            <div className="flex flex-col items-center justify-center gap-[47px] ">
              <img src={play} alt="" />
              <div className="flex flex-col items-center justify-center text-center w-[60%] gap-[20px]">
                <h5 className="text-[24px] leading-[36px] text-textPrimary">
                  {t("value.valueTitleOne")}
                </h5>
                <p className="text-[18px] leading-[190%] text-bodyText ">
                  {t("value.valueDescriptionOne")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[47px]  ">
              <img src={glass} alt="" />
              <div className="flex flex-col items-center justify-center text-center w-[60%] gap-[20px]">
                <h5 className="text-[24px] leading-[36px] text-textPrimary">
                  {t("value.valueTitleTwo")}
                </h5>
                <p className="text-[18px] leading-[190%] text-bodyText ">
                  {t("value.valueDescriptionTwo")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[47px]  ">
              <img src={paper} alt="" />
              <div className="flex flex-col items-center justify-center text-center w-[60%] gap-[20px]">
                <h5 className="text-[24px] leading-[36px] text-textPrimary">
                  {t("value.valueTitleThree")}
                </h5>
                <p className="text-[18px] leading-[190%] text-bodyText ">
                  {t("value.valueDescriptionThree")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuseComponent;
