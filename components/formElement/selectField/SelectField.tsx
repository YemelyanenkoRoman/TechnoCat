import { Controller } from 'react-hook-form';
import { Mistake } from '@/components/formElement/inputField/Mistake';
import { useColor } from '@/components/ColorNavigation';
import SelectDirection, { Option } from '../select/Select';

type SelectProps = {
  control: any;
  options: Option[];
  name: string;
  label?: string;
  rules?: Object;
  defaultValue?: string;
  placeholder?: string;

  width: string;
  height: string;
};

const SelectField = (props: SelectProps) => {
  const color = useColor();
  // const { trigger } = useFormContext();
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          console.log(props.defaultValue, field.value, props.options, 'cjj,otybt');
          return (
            <div className="flex items-center">
              {fieldState.error && <Mistake error={fieldState.error} />}

              <SelectDirection
                options={props.options}
                focus={color.formBorderActive}
                borderColor={fieldState.error ? 'border-[#E0474E]' : `${color.formBorder}`}
                width={props.width}
                height={props.height}
                placeholder={props.placeholder}
                value={props.options.find((c) => c.value === field.value)}
                onChange={(option) => {
                  field.onChange(option.value);
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

export default SelectField;
