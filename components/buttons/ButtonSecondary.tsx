export type PropsButton = {
  width: string;
  height: string;
  backgroundColor: string;
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  bgHover: string;
  focus: string;
  textColor?: string;
};

const ButtonSecondary = (props: PropsButton) => {
  return (
    <button
      type={props.type}
      style={{ width: props.width, height: props.height }}
      className={`${props.backgroundColor} ${props.bgHover} ${props.textColor} ${props.focus} flex items-center content-center cursor-pointer justify-center px-[30px] py-[14px] font-gilroy text-eighteen border-[2px]  text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.3)] rounded-lg`}
    >
      {props.title}
    </button>
  );
};

export default ButtonSecondary;
