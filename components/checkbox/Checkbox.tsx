type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: any;

  width: string;
  height: string;
  borderColor: string;
};

export const Checkbox = (props: CheckboxProps) => (
  <input
    type="checkbox"
    style={{ width: props.width, height: props.height }}
    className={` border-2 ${props.borderColor}`}
    checked={props.checked}
    onChange={props.onChange}
  />
);
