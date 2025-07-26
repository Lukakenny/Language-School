import { Trans, useTranslation } from "react-i18next";
import heroImage from "../assets/heroImage.png";

function HeroComponent() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col gap-[40px] md:flex-row ">
          <div className="   flex flex-col items-start justify-center gap-[20px] w-[100%] md:w-[50%]">
            <h1 className=" text-center md:text-start text-textPrimary text-[56px] leading-[126%]">
              <Trans i18nKey="hero.heading">
                A <span className="text-primary2 text-bold">unique</span>
                approach to learning foreign languages online
              </Trans>
            </h1>

            <p className="text-center md:text-start text-[14px] text-bodyText  leading-[190%]  lg:w-[250px]">
              {t("hero.description")}
            </p>
            <button className=" mx-auto md:mx-0 text-white bg-primary2 rounded-[73px] py-[17px] px-[34px]">
              {t("hero.getStarted")}
            </button>
          </div>

          <img
            src={heroImage}
            alt="heroImage"
            className=" w-[100%] md:w-[50%]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
