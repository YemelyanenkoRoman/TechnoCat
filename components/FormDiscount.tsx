'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';
import Button from './buttons/Button';
import InputPhoneField from './formElement/inputField/InputPhoneField';
import { CheckboxField } from './formElement/checkboxField/CheckboxField';
import MistakeIcon from '@/public/icons/formMistake.svg';

const MyForm = () => {
  const methods = useForm<FormData>({ mode: 'onBlur' });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data, 'FormDiscount.tsx');
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between">
        <InputField
          width="280px"
          height="51px"
          placeholder="Имя"
          defaultValue=""
          control={control}
          name={'name'}
          rules={{
            required: 'Введите ваше имя',
            pattern: {
              message: 'Используйте только буквы',
              value: /^[A-Za-zА-Яа-я]+$/,
            },
            minLength: {
              message: 'Минимум 2 символа',
              value: 2,
            },
            maxLength: {
              message: 'Максимум 20 символов',
              value: 20,
            },
          }}
        />

        <InputPhoneField
          width="280px"
          height="51px"
          placeholder="Телефон"
          defaultValue=""
          name={'newphone'}
          rules={{
            required: 'Введите номер телефона',
            pattern: {
              message: 'Проверьте правильность введенного номера',
              value: /^[+]375\s(17|25|29|33|44)\s\d{3}\s\d{2}\s\d{2}$/,
            },
          }}
          control={control}
        />

        <InputField
          width="280px"
          height="51px"
          placeholder="Направление"
          defaultValue=""
          control={control}
          name={'direction'}
          rules={{
            required: 'Поле обязательно',
            minLength: {
              message: 'Минимум два символа',
              value: 2,
            },
            maxLength: {
              message: 'Максимум 50 символов',
              value: 50,
            },
          }}
        />

        <Button width={'280px'} height={'50'} title={'Записаться на занятие'} type={'submit'} />
        <div className="flex max-w-[280px] h-[32px]">
          <div className="mr-[10px]">
            <CheckboxField control={control} name="checkBox" height="24px" width="24px" />
          </div>

          <p className=" font-poppins text-twelve">Даю согласие на обработку данных персональных</p>
        </div>
        <div className="absolute top-[352px] flex">
          {!!Object.keys(errors).length && (
            <div className="max-w-[282px] text-twelve flex items-center">
              <div className="mr-[10px]">
                <MistakeIcon stroke="#36568B" />
              </div>

              <p className="font-poppins text-twelve">Пожалуйста, проверьте введенные данные</p>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MyForm;
