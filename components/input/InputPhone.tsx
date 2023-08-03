import React from 'react';
import InputMask from 'react-input-mask';

type InputPhoneProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder?: string;

  width: string;
  height: string;
  borderColor: string;
  focus: string;
};

const PhoneInput = ({ value, onChange, onBlur, placeholder, width, height, focus, borderColor }: InputPhoneProps) => (
  <InputMask
    mask="+375 (99) 999-99-99"
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    style={{ width, height }}
    className={`border-2 rounded-lg font-poppins text-sexteen pl-5 focus:outline-none  ${focus} ${borderColor}`}
  ></InputMask>
);
export default PhoneInput;
