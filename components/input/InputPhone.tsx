// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input/input';
type InputPhoneProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder?: string;
  country: any;

  width: string;
  height: string;
};

const InputPhone = (props: InputPhoneProps) => (
  <PhoneInput
    style={{ width: props.width, height: props.height }}
    className="border-2 border-local-gray-t rounded-lg font-poppins text-sexteen pl-5"
    value={props.value}
    country={props.country}
    onChange={props.onChange}
    onBlur={props.onBlur}
    placeholder={props.placeholder}
  />
);

export default InputPhone;
