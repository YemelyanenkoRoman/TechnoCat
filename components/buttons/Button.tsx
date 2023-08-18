'use client';
import { PropsButton } from './ButtonSecondary';

const Button = (props: PropsButton) => {
  return (
    <button
      type={props.type}
      style={{ width: props.width, height: props.height }}
      className={`${props.backgroundColor} ${props.bgHover} ${props.textColor} ${props.focus} px-[30px] py-[14px] cursor-pointer font-gilroy text-eighteen  rounded-lg flex justify-center content-center items-center`}
    >
      {props.title}
    </button>
  );
};

export default Button;
