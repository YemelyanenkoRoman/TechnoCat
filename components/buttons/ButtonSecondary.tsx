export type PropsButton = {
  width: string;
  height: string;
  backgroundColor: string;
  title: string;
  type: any;
  bgHover: string;
  focus: string;
};

const ButtonSecondary = (props: PropsButton) => {
  return (
    <button
      type={props.type}
      style={{ width: props.width, height: props.height }}
      className=" flex items-center content-center cursor-pointer justify-center px-[30px] py-[14px] font-gilroy text-eighteen border-[2px] border-local-gray-t text-[#FFFFFF] rounded-lg"
    >
      {props.title}
    </button>
  );
};

export default ButtonSecondary;
