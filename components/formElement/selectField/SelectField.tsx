"use client";
import { Controller } from "react-hook-form";
import { Mistake } from "@/components/formElement/inputField/Mistake";
import { useColor } from "@/components/ColorNavigation";
import SelectDirection, { Option } from "../select/Select";
import { useWindowWidth } from "@/utils/hooks/useWindowWidth";

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
  const width = useWindowWidth();
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

              <SelectDirection
                options={props.options}
                focus={color.formBorderActive}
                borderColor={
                  fieldState.error ? "border-[#E0474E]" : `${color.formBorder}`
                }
                menuListClass={width >= 768 ? `h-[180px]` : `h-[150px]`}
                optionClass={color.option}
                optionClassSelected={color.selectedOption}
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
