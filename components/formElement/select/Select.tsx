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
  optionClass: string;
  optionClassSelected: string;
  width: string;
  height: string;
  borderColor: string;

  menuListClass?: any;
};

const SelectDirection = (props: SelectProps) => (
  <Select
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '8px',
        borderWidth: '2px',
        backgroundColor: 'white',
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
      menu: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: 'white',
        marginTop: '8px',
        borderRadius: '8px',
      }),
      option: (baseStyles) => ({
        ...baseStyles,
        padding: '10px 20px',
      }),
      indicatorsContainer: (baseStyles) => ({
        ...baseStyles,
        paddingRight: '5px',
      }),
      // menuList: (baseStyles) => ({
      //   ...baseStyles,
      //   height: '180px',
      // }),
    }}
    classNames={{
      container: () => '',
      indicatorsContainer: () => '',
      control: () => props.borderColor,
      valueContainer: () => 'font-poppins text-sexteen',
      input: () => '',
      option: (state) => (state.isSelected ? props.optionClassSelected : props.optionClass),
      menuList: () => props.menuListClass,
    }}
    unstyled
    options={props.options}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    onBlur={props.onBlur}
    defaultValue={props.defaultValue}
  />
);

export default SelectDirection;
