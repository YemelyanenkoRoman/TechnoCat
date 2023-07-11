import { Control, Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { formatPhoneNumberIntl } from 'react-phone-number-input';

import InputPhone from '@/components/input/InputPhone';

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
      {/* <div>{props.label}</div> */}
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div>
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
              {fieldState && fieldState.error && <p className="absolute text-xs">{fieldState.error.message}</p>}
            </div>
          );
        }}
        rules={props.rules}
      />
    </>
  );
};

export default InputPhoneField;
