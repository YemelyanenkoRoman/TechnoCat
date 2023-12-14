"use client";

import { useState, useEffect, useRef } from "react";
import PhoneIcon from "../public/icons/phone-24-px.svg";
import CrossIcon from "../public/icons/cross-12-px.svg";
import FormCall from "./FormCall";
import { useColor } from "./ColorNavigation";
import { usePathname } from "next/navigation";
import Loader from "./loader/Loader";
import Image from "next/image";
import { useWindowWidth } from "@/utils/hooks/useWindowWidth";

interface ModalProps {
  svgHover: string;
  svgStroke: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

export default function Modal({
  svgHover,
  svgStroke,
  bgColor,
  hoverColor,
  textColor,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMassage, setErrorMessage] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const width = useWindowWidth();
  const pathname = usePathname();

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsOpen(false);
        setIsSent(false);
        setErrorMessage(false);
      }, 3000);
    }
  }, [isSent]);

  useEffect(() => {
    if (isOpen) {
      const hanbdleEvent = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setIsSent(false);
          setErrorMessage(false);
        }
      };
      document.addEventListener("click", hanbdleEvent);

      return () => {
        document.removeEventListener("click", hanbdleEvent);
        console.log("remove");
      };
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="flex cursor-pointer xs:pt-[4px] md:pt-0"
        style={{
          color: isHovered ? `${svgHover}` : "",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PhoneIcon
          stroke={svgStroke}
          className="xs:mr-4 md:mr-2 xs:w-8 xs:h-8 md:w-6 md:h-6"
          style={{
            color: isHovered ? `${svgHover}` : "rgba(0,0,0, 0)",
          }}
        />
        {width > 820 ? <p>Заказать звонок</p> : ""}
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 max-md:top-[96px] z-50 flex justify-center w-full h-full md:items-center md:bg-black md:bg-opacity-50 xs:items-end xs:bg-none xs:bg-opacity-0"
        >
          <div
            className={`
            
            ${
              pathname === "/" ||
              pathname === "/about" ||
              pathname === "/contacts"
                ? "md:bg-[#EBF4FF] xs:bg-[#36568B]"
                : `${bgColor}`
            }
            
            ${
              pathname === "/" ||
              pathname === "/about" ||
              pathname === "/contacts"
                ? "md:text-[#36568B] xs:text-[#EBF4FF]"
                : `${textColor}`
            }  relative z-10 shadow-lg md:rounded-lg md:w-[510px] md:h-[500px] xs:w-screen h-full xs:rounded-none`}
          >
            {errorMassage ? (
              <div className="z-10 absolute flex items-center justify-center bg-white bg-opacity-50 md:rounded-lg md:w-[510px] md:h-[500px] xs:w-screen xs:h-screen xs:rounded-none">
                <div
                  onClick={() => setErrorMessage(false)}
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <h2 className="font-gilroy text-3xl flex mb-4">
                    Ошибка отправки формы
                  </h2>
                  <p className="font-gilroy text-3xl flex mb-4 ">
                    отправить ещё раз
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}

            {isLoading ? (
              <div className="z-10 absolute flex items-center justify-center  bg-white bg-opacity-50 md:rounded-lg md:w-[510px] md:h-[500px] xs:w-screen xs:h-screen xs:rounded-none">
                <Loader />
              </div>
            ) : (
              <></>
            )}

            {isSent ? (
              <div className="m-[60px] flex items-center  flex-col">
                <div className="w-[346px] flex flex-col ">
                  <h3 className="font-gilroy text-3xl flex content-center justify-center">
                    Спасибо
                  </h3>
                  <p className="font-poppins text-fourteen mt-[15px]  text-center">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
                <div className="flex mt-10 relative">
                  <Image
                    src="/formImg/Magician.svg"
                    alt="Изображение девушка волшебник достаёт зайчика из шляпы."
                    width={275}
                    height={275}
                  />
                </div>
              </div>
            ) : (
              <div className="m-[60px] flex items-center justify-center flex-col">
                <div className="w-[346px] flex flex-col ">
                  <h3 className="font-gilroy text-3xl flex">
                    Заказ обратного звонка
                  </h3>
                  <p className="font-poppins text-fourteen mt-[15px]  text-center">
                    Заполните форму и наши специалисты свяжутся с вами в течение
                    рабочего дня.
                  </p>
                </div>
                <div
                  className={`flex mt-10 relative md:text-inherit ${
                    pathname === "/" ||
                    pathname === "/about" ||
                    pathname === "/contacts"
                      ? "xs:text-[#36568B]"
                      : `xs:${textColor}`
                  }`}
                >
                  <FormCall
                    setIsLoading={setIsLoading}
                    setIsSent={setIsSent}
                    setErrorMessage={setErrorMessage}
                  />
                </div>
              </div>
            )}
            {width >= 768 ? (
              <div
                onClick={() => {
                  setIsOpen(false);
                  setIsSent(false);
                  setErrorMessage(false);
                }}
                className="absolute top-5 right-5 cursor-pointer z-50"
              >
                <CrossIcon className={`stroke-current ${hoverColor}`} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}
