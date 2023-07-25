import { Control, Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { formatPhoneNumberIntl } from 'react-phone-number-input';

import InputPhone from '@/components/input/InputPhone';

import Mistake from '@/public/icons/formMistake.svg';
import { useState } from 'react';

type InputProps = {
  control: any;
  name: string;
  label?: string;
  rules?: Object;
  defaultValue?: string;
  placeholder?: string;

  width: string;
  height: string;
};

const InputPhoneField = (props: InputProps) => {
  // const { trigger } = useFormContext();

  const [isMistakeHoverd, setIsMistakeHovered] = useState(false);

  const handleMistakeMouseEnter = () => {
    setIsMistakeHovered(true);
  };

  const handleMistakeMouseLeave = () => {
    setIsMistakeHovered(false);
  };

  return (
    <>
      {/* <div>{props.label}</div> */}
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          return (
            // ерор
            <div className="flex items-center">
              {fieldState && fieldState.error && (
                <div
                  className="absolute left-[80px]"
                  onMouseEnter={handleMistakeMouseEnter}
                  onMouseLeave={handleMistakeMouseLeave}
                >
                  {/* Этой хуйнёй мы render или не render компонент в зависимости от состояния */}
                  {isMistakeHoverd && (
                    <div className="absolute top-[40px] bg-local-gray-b-2 shadow-lg w-[280px] rounded-lg font-poppins text-twelve p-2">
                      <p>{fieldState.error.message}</p>
                    </div>
                  )}
                  <Mistake />
                </div>
              )}
              <InputPhone
                width={props.width}
                height={props.height}
                value={field.value}
                country="BY"
                onChange={(value) => {
                  field.onChange(formatPhoneNumberIntl(value));
                }}
                onBlur={() => {
                  field.onBlur();
                }}
                placeholder={props.placeholder}
              />
            </div>
          );
        }}
        rules={props.rules}
      />
    </>
  );
};

export default InputPhoneField;
