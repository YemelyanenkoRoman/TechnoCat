type InputProps = {
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
    style={{ width: props.width, height: props.height, borderColor: props.borderColor }}
    className="border-2 border-local-gray-t rounded-lg font-poppins text-sexteen pl-5"
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    placeholder={props.placeholder}
  />
);

export default Input;
