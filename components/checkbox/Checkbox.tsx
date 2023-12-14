type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: any;

  width: string;
  height: string;
  borderColor: string;
  focusColor: any;
};

export const Checkbox = (props: CheckboxProps) => (
  <input
    type="checkbox"
    style={{ width: props.width, height: props.height }}
    className={`      
    border-2 rounded-md  focus:outline-none focus:ring-0 ${props.borderColor} ${props.focusColor}`}
    checked={props.checked}
    onChange={props.onChange}
  />
);
