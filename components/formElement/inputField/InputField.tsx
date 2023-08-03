import { Controller } from 'react-hook-form';
import Input from '../../input/Input';
import { Mistake } from './Mistake';
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

const InputField = (props: InputProps) => {
  const color = useColor();
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

              <Input
                focus={color.formBorderActive}
                borderColor={fieldState.error ? 'border-[#E0474E]' : `${color.formBorder}`}
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

export default InputField;
