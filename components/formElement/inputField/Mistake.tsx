import { useState } from 'react';
import { FieldError, useForm, useFormState } from 'react-hook-form';
import MistakeIcon from '@/public/icons/formMistake.svg';
type Props = {
  error: FieldError;
};

export const Mistake = (props: Props) => {
  const [isMistakeHoverd, setIsMistakeHovered] = useState(false);

  const handleMistakeMouseEnter = () => {
    setIsMistakeHovered(true);
  };

  const handleMistakeMouseLeave = () => {
    setIsMistakeHovered(false);
  };

  return (
    <>
      <div
        className="absolute left-[80px]"
        onMouseEnter={handleMistakeMouseEnter}
        onMouseLeave={handleMistakeMouseLeave}
      >
        {isMistakeHoverd && (
          <div className="absolute top-[40px] bg-local-gray-b-2 shadow-lg w-[280px] rounded-lg font-poppins text-twelve p-2">
            <p>{props.error.message}</p>
          </div>
        )}
        <MistakeIcon />
      </div>
    </>
  );
};
