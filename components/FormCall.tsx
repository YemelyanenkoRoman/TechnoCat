'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';
import Button from './buttons/Button';
import InputPhoneField from './formElement/inputField/InputPhoneField';

const FormCall = () => {
  const methods = useForm<FormData>({ mode: 'onBlur' });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
    methods.reset();
  };

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

        {/* <InputField
          width="280px"
          height="51px"
          placeholder="Телефон"
          defaultValue=""
          control={control}
          name={'phone'}
          rules={{
            required: 'Введите телефон в формате +375291111111',
            pattern: {
              message: 'Введите телефон в формате +375291111111',
              value: /^\+375\s?(17|29|33|44)\s?\d{3}\d{2}\d{2}$/,
            },
          }}
          // label="Номер телефона"
        /> */}

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
              value: /^\+375\s?(17|29|33|44)\s?\d{3}\d{2}\d{2}$/,
            },
          }}
          control={control}
        />

        <Button width={'280px'} height={'50'} title={'Записаться на занятие'} type={'submit'} />
      </form>
    </FormProvider>
  );
};

export default FormCall;
