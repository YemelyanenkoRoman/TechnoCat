type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: any;

  width: string;
  height: string;
};

export const Checkbox = (props: CheckboxProps) => (
  <input
    type="checkbox"
    style={{ width: props.width, height: props.height }}
    checked={props.checked}
    onChange={props.onChange}
  />
);
