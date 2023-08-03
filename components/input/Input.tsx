type InputProps = {
  focus: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder?: string;

  width: string;
  height: string;
  borderColor: string;
};

const Input = (props: InputProps) => (
  <input
    // borderColor: props.borderColor
    style={{ width: props.width, height: props.height }}
    className={`border-2 rounded-lg font-poppins text-sexteen pl-5 focus:outline-none  ${props.focus} ${props.borderColor}`}
    // className={`border-2 rounded-lg font-poppins text-sexteen pl-5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 ${props.borderColor}`}

    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    placeholder={props.placeholder}
  />
);

export default Input;
