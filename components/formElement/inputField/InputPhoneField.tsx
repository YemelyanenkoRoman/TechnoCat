import { Control, Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import InputPhone from '@/components/input/InputPhone';

import Input from '../../input/Input';
import { Mistake } from './Mistake';
import PhoneInput from '@/components/input/InputPhone';

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
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div className="flex items-center">
              {fieldState.error && <Mistake error={fieldState.error} />}

              <PhoneInput
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
