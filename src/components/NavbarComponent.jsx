import { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useTranslation } from "react-i18next";

function NavbarComponent() {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="container mx-auto w-[90%] py-[39px]  ">
      <div className=" flex items-center justify-between">
        <img src={logo} alt="logo" />

        <div>
          <div className=" hidden md:flex items-center justify-center gap-[24px]   ">
            <a href="" className="text-[14px] text-bodyText hover:text-red-200">
              {t("navBar.courses")}
            </a>
            <a href="" className="text-[14px] text-bodyText">
              {t("navBar.aboutUs")}
            </a>
            <a href="" className="text-[14px] text-bodyText">
              {t("navBar.teachers")}
            </a>
            <a href="" className="text-[14px] text-bodyText">
              {t("navBar.pricing")}
            </a>
            <a href="" className="text-[14px] text-bodyText">
              {t("navBar.careers")}
            </a>
            <a href="" className="text-[14px] text-bodyText">
              {t("navBar.blog")}
            </a>
          </div>

          <GiHamburgerMenu
            className={`${isActive ? "hidden" : "block"} md:hidden`}
            onClick={() => setIsActive(true)}
          />
          <IoClose
            className={`${isActive ? "block" : "hidden"} md:hidden`}
            onClick={() => setIsActive(false)}
          />
        </div>

        <div>
          <select onClick={(e) => changeLanguage(e.target.value)}>
            <option value="en">{t("navBar.english")}</option>
            <option value="srb">{t("navBar.serbian")}</option>
            <option value="de">{t("navBar.german")}</option>
          </select>
        </div>
      </div>
      {isActive && (
        <div className=" md:hidden flex flex-col gap-[20px] mt-[20px]">
          <a href="" className="text-[14px] text-bodyText hover:text-red-200">
            {t("navBar.courses")}
          </a>
          <a href="" className="text-[14px] text-bodyText">
            {t("navBar.aboutUs")}
          </a>
          <a href="" className="text-[14px] text-bodyText">
            {t("navBar.teachers")}
          </a>
          <a href="" className="text-[14px] text-bodyText">
            {t("navBar.pricing")}
          </a>
          <a href="" className="text-[14px] text-bodyText">
            {t("navBar.careers")}
          </a>
          <a href="" className="text-[14px] text-bodyText">
            {t("navBar.blog")}
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavbarComponent;
