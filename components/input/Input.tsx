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
    style={{ width: props.width, height: props.height }}
    className={`border-2 rounded-lg font-poppins text-sexteen pl-5 focus:outline-none focus:ring-0 ${props.focus} ${props.borderColor}`}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    placeholder={props.placeholder}
  />
);

export default Input;
