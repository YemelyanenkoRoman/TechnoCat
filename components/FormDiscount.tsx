'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';

const MyForm = () => {
  const methods = useForm<FormData>({ mode: 'onBlur' });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
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
          label="Имя"
        />

        <InputField
          placeholder="+375291477233"
          defaultValue="+375"
          control={control}
          name={'phone'}
          rules={{
            required: 'Введите номер телефона',
            minLength: {
              message: 'Минимум 12 цифр',
              value: 13,
            },
            maxLength: {
              message: 'Максимум 12 цифр',
              value: 15,
            },
            pattern: {
              message: 'Введите свой номер телефона',
              value: /^\+375\s?(\(17\)|\(29\)|\(33\)|\(44\))\s?\d{3}\d{2}\d{2}$/,
            },
          }}
          label="Номер телефона"
        />

        <InputField
          placeholder="Направлени"
          defaultValue=""
          control={control}
          name={'direction'}
          rules={{
            required: 'Поле обязательно',
            minLength: {
              message: 'Минимум два символа',
              value: 2,
            },
          }}
          label="Выбранное направление"
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default MyForm;
