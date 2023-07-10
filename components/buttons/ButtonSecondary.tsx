export type PropsButton = {
  width: any;
  height: any;
  title: string;
  type: any;
};

const ButtonSecondary = (props: PropsButton) => {
  return (
    <button
      type={props.type}
      style={{ width: props.width, height: props.height }}
      className=" flex items-center content-center cursor-pointer justify-center px-[30px] py-[14px] font-gilroy text-eighteen border-[2px] border-local-gray-t text-local-gray-t rounded-lg"
    >
      {props.title}
    </button>
  );
};

export default ButtonSecondary;
