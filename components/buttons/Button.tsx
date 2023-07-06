'use client';
import { PropsButton } from './ButtonSecondary';

const Button = (props: PropsButton) => {
  return (
    <button
      style={{ width: props.width, height: props.height }}
      className="px-[30px] py-[14px] font-gilroy text-eighteen bg-local-gray-act-3 text-local-gray-t-2 rounded-lg flex justify-center content-center items-center"
    >
      {props.title}
    </button>
  );
};

export default Button;
