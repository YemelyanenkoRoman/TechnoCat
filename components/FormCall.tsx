'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';
import Button from './buttons/Button';
import InputPhoneField from './formElement/inputField/InputPhoneField';
import { CheckboxField } from './formElement/checkboxField/CheckboxField';

const FormCall = () => {
  const methods = useForm<FormData>({ mode: 'onBlur' });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data, 'FormCall.tsx');
    methods.reset();
  };
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[15px]">
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
          // label="Имя"
        />

        <InputPhoneField
          width="280px"
          height="51px"
          placeholder="Телефон"
          defaultValue=""
          name={'newphone'}
          rules={{
            required: 'Введите номер телефона в формате +375291111111',
            pattern: {
              message: 'Введите номер телефона в формате +375291111111',
              value: '/^[+]375s(17|25|29|33|44)sd{3}sd{2}sd{2}$/',
            },
          }}
          control={control}
        />

        <Button width={'280px'} height={'50'} title={'Записаться на занятие'} type={'submit'} />

        <div className="flex max-w-[280px] h-[32px]">
          <CheckboxField control={control} name="checkBox" height="18px" width="18px" />
          <p className="ml-[10px] font-poppins text-twelve">Даю согласие на обработку данных персональных</p>
        </div>
        <div>{!!Object.keys(errors).length && 'ошибка'}</div>
      </form>
    </FormProvider>
  );
};

export default FormCall;
