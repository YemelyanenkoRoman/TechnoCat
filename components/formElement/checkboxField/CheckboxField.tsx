import { Control, Controller } from 'react-hook-form';
import { Checkbox } from '@/components/checkbox/Checkbox';

interface CheckboxProps {
  control: Control<any>;
  name: string;
  rules?: Object;
  height: string;
  width: string;
}

export const CheckboxField = (props: CheckboxProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{ validate: (value) => (value ? true : '<p>!!!</p>') }}
      render={({ field }) => (
        <Checkbox
          width={props.width}
          height={props.height}
          checked={field.value || false}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      )}
    />
  );
};
