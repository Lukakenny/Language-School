import { useTranslation } from "react-i18next";
import logo from "../assets/LogoFooter.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

function FooterComponent() {
  const { t } = useTranslation();
  return (
    <footer className="my-[100px]">
      <div className="container mx-auto w-[90%] px-[70px] pt-[50px] pb-[100px]  bg-bgDark rounded-[40px]">
        <div className="flex flex-col md:flex-row  items-start justify-between gap-[50px]">
          <div className="flex flex-col ">
            <img src={logo} alt="logo" className="block" />
            <p className="text-bodyText text-[12px] leading-[24px]">
              20 Osgood Rd, Milford, NH 03055, USA
            </p>
          </div>

          <div className="flex flex-col  gap-[24px]">
            <p className="text-textPrimary text-[16px] leading-[24px] font-bold">
              {t("navBar.menu")}
            </p>
            <ul className="flex flex-col  gap-[16px]">
              <li>
                <a href="">{t("navBar.courses")}</a>
              </li>
              <li>
                <a href="">{t("navBar.aboutUs")}</a>
              </li>
              <li>
                <a href="">{t("navBar.teachers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.pricing")}</a>
              </li>
              <li>
                <a href="">{t("navBar.careers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.blog")}</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-[24px]">
            <p className="text-textPrimary text-[16px] leading-[24px] font-bold">
              {t("navBar.menu")}
            </p>
            <ul className="flex flex-col  gap-[16px]">
              <li>
                <a href="">{t("navBar.courses")}</a>
              </li>
              <li>
                <a href="">{t("navBar.aboutUs")}</a>
              </li>
              <li>
                <a href="">{t("navBar.teachers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.pricing")}</a>
              </li>
              <li>
                <a href="">{t("navBar.careers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.blog")}</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-[24px]">
            <p className="text-textPrimary text-[16px] leading-[24px] font-bold">
              {t("navBar.menu")}
            </p>
            <ul className="flex flex-col  gap-[16px]">
              <li>
                <a href="">{t("navBar.courses")}</a>
              </li>
              <li>
                <a href="">{t("navBar.aboutUs")}</a>
              </li>
              <li>
                <a href="">{t("navBar.teachers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.pricing")}</a>
              </li>
              <li>
                <a href="">{t("navBar.careers")}</a>
              </li>
              <li>
                <a href="">{t("navBar.blog")}</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center gap-[11px]">
            <button className="bg-white py-[10px] px-[10px] rounded-full cursor-pointer">
              <FaFacebook className="" />
            </button>
            <div className="bg-white py-[10px] px-[10px] rounded-full cursor-pointer">
              <BsInstagram className="" />
            </div>
            <div className="bg-white py-[10px] px-[10px] rounded-full cursor-pointer">
              <BsTwitter className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
