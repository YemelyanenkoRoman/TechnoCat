'use client';

import { Control, Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import InputPhone from '@/components/input/InputPhone';

import Input from '../../input/Input';
import { Mistake } from './Mistake';
import PhoneInput from '@/components/input/InputPhone';
import { useColor } from '@/components/ColorNavigation';

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

  const color = useColor();
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          console.log(fieldState.error, 'соси хуй');

          return (
            <div className="flex items-center">
              {fieldState.error && <Mistake error={fieldState.error} />}

              <PhoneInput
                borderColor={fieldState.error ? '#E0474E' : `${color.svgHover}`}
                width={props.width}
                height={props.height}
                placeholder={props.placeholder}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                onBlur={() => {
                  field.onBlur();
                }}
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
