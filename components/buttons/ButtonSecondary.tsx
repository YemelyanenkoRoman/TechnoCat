export type PropsButton = {
  width: any;
  height: any;
  title: string;
};

const ButtonSecondary = (props: PropsButton) => {
  return (
    <button
      style={{ width: props.width, height: props.height }}
      className=" flex items-center content-center justify-center px-[30px] py-[14px] font-gilroy text-eighteen border-[2px] border-local-gray-t text-local-gray-t rounded-lg"
    >
      {props.title}
    </button>
  );
};

export default ButtonSecondary;
