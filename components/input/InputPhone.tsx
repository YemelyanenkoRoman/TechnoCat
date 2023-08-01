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
};

const PhoneInput = ({ value, onChange, onBlur, placeholder, width, height, borderColor }: InputPhoneProps) => (
  <InputMask
    mask="+375 (99) 999-99-99"
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    style={{ width, height, borderColor }}
    className="border-2  rounded-lg font-poppins text-sexteen pl-5"
  ></InputMask>
);
export default PhoneInput;
