'use client';

import { Control, Controller } from 'react-hook-form';
import { Checkbox } from '@/components/checkbox/Checkbox';
import { useColor } from '@/components/ColorNavigation';
import { usePathname } from 'next/navigation';

interface CheckboxProps {
  control: Control<any>;
  name: string;
  rules?: Object;
  height: string;
  width: string;
}

export const CheckboxField = (props: CheckboxProps) => {
  const color = useColor();
  const pathname = usePathname();

  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{ validate: (value) => (value ? true : '<p>!!!</p>') }}
      render={({ field }) => (
        <Checkbox
          focusColor={
            pathname === '/' || pathname === '/about' || pathname === '/contacts'
              ? 'text-[#36568B]'
              : `${color.activeColor}`
          }
          borderColor={color.formBorder}
          width={props.width}
          height={props.height}
          checked={field.value || false}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      )}
    />
  );
};
