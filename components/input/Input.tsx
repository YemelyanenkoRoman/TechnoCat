type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder?: string;
};

const Input = (props: InputProps) => (
  <input value={props.value} onChange={props.onChange} onBlur={props.onBlur} placeholder={props.placeholder} />
);

export default Input;
