"use client";

import Image from "next/image";

import { v4 as uuidv4 } from "uuid";
import { NavItems } from "../TheHeader";
import Navigation from "../MainNavigation";
import Link from "next/link";

import AcademicCap from "@/public/icons/academic-cap-24-px.svg";
import Book from "@/public/icons/book-24-px.svg";
import Location from "@/public/icons/location-pin-24-px.svg";
import Time from "@/public/icons/time-24-px.svg";
import Instagram from "@/public/icons/instagram-16-px.svg";
import FooterNavBlock from "./FooterNavBlock";
import { useColor } from "../ColorNavigation";

const TheFooter = () => {
  const color = useColor();
  const width = typeof window === "undefined" ? 0 : window.innerWidth;
  return (
    <footer
      className={`${color.textColor} ${color.bgColor} font-poppins font-normal    xl:text-sexteen md:text-fourteen`}
    >
      {width >= 768 ? (
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-row justify-between items-center h-[209px]    xl:px-[60px] md:px-[30px]">
            <div className="flex">
              <div className=" max-h-[109px] flex flex-col max-w-[100px]    xl:mr-[125px] md:mr-[95px]">
                <Link href="/">
                  <Image
                    src="/logo/technocat-logo-min.svg"
                    alt="Логотип образовательного центра ТехноКот"
                    width={100}
                    height={35}
                  />
                </Link>
                <ul className="mt-5 flex  flex-col gap-2 ">
                  <Navigation navLinks={NavItems} />
                </ul>
              </div>
              <div className="flex    xl:gap-14 md:gap-10">
                <FooterNavBlock
                  iconSvg={<AcademicCap stroke={color.svgStroke} />}
                  title={"Мы научим"}
                  startIndex={0}
                  endIndex={3}
                />
                <FooterNavBlock
                  iconSvg={<Book stroke={color.svgStroke} />}
                  title={"Мы поможем"}
                  startIndex={3}
                  endIndex={5}
                />
              </div>
            </div>
            <div className="flex    xl:gap-14 md:gap-10">
              <div className="flex flex-col max-w-[175px] ">
                <div className="flex flex-row">
                  <Location stroke={color.svgStroke} />
                  <h2 className="ml-[10px] font-gilroy    xl:text-twenty md:text-eighteen">
                    Мы находимся
                  </h2>
                </div>
                <Link className="mt-5" href="/contacts">
                  г. Гомель, ул. Кирова, д. 55, каб. 318
                </Link>
              </div>
              <div className="flex flex-col max-w-[185px]">
                <div className="flex flex-row">
                  <Time stroke={color.svgStroke} />
                  <h2 className="ml-[10px] font-gilroy xl:text-twenty md:text-eighteen">
                    Мы на связи
                  </h2>
                </div>
                <div className="mt-5 flex flex-col gap-2 ">
                  <p>ежедневно: 9:00-20:30</p>
                  <p>+ 375 (29) 330-20-79</p>
                  <Link
                    className="flex"
                    href="https://instagram.com/techno_cat_gomel?igshid=MzRlODBiNWFlZA=="
                  >
                    <Instagram stroke={color.svgStroke} />{" "}
                    <p className="ml-[6px]">Instagram</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[166px] w-screen">
          <div className="flex justify-between px-4 py-[30px] ">
            <div className="flex flex-col max-w-[200px]">
              <div className="flex flex-row">
                <Time stroke={color.svgStroke} />
                <h2 className="ml-[10px] font-gilroy text-eighteen">
                  Мы на связи
                </h2>
              </div>
              <div className="mt-5 flex flex-col gap-2 text-fourteen">
                <p>ежедневно: 9:00-20:30</p>
                <p>+ 375 (29) 330-20-79</p>
              </div>
            </div>
            <div className="flex flex-col max-w-[158px] ">
              <div className="flex flex-row">
                <Location stroke={color.svgStroke} />
                <h2 className="ml-[10px] font-gilroy text-eighteen ">
                  Мы находимся
                </h2>
              </div>
              <Link
                className="mt-5 text-fourteen flex flex-col gap-2"
                href="/contacts"
              >
                <p>г. Гомель, ул. Кирова, </p>
                <p>д. 55, каб. 318</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export { TheFooter };
