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
  borderColor: string;
};

const SelectDirection = (props: SelectProps) => (
  <Select
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '8px',
        borderWidth: '2px',
      }),
      container: (baseStyles) => ({
        ...baseStyles,
        width: props.width,
        height: props.height,
      }),
      valueContainer: (baseStyles) => ({
        ...baseStyles,
        height: props.height,
        paddingLeft: '20px',
        borderWidth: '0px',
      }),
    }}
    className={`${props.borderColor}`}
    classNames={{
      container: () => '',
      indicatorsContainer: () => '',
      control: () => props.borderColor,
      valueContainer: () => 'font-poppins text-sexteen',
      input: () => '',
    }}
    // unstyled={true}
    options={props.options}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    onBlur={props.onBlur}
    defaultValue={props.defaultValue}
  />
);

export default SelectDirection;
