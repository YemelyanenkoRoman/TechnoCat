import Select from 'react-select';

export interface Option {
  value: string;
  label: string;
}

type SelectProps = {
  focus: string;
  value?: Option;
  options: Option[];
  onChange: (value: any) => void;
  onBlur: () => void;
  placeholder?: string;
  defaultValue?: Option;

  width: string;
  height: string;
  borderColor?: string;
};

const SelectDirection = (props: SelectProps) => (
  <Select
    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
        ...theme.colors,
        primary25: 'rgba(117, 179, 125, 0.5)',
        primary: 'none',
      },
    })}
    // classNames={{
    //   control: () => 'border border-gray-300 rounded-md',
    // }}
    options={props.options}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    onBlur={props.onBlur}
    defaultValue={props.defaultValue}
  />
);

export default SelectDirection;
