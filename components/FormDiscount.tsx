'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';
import Button from './buttons/Button';

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between"
      >
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

        <InputField
          width="280px"
          height="51px"
          placeholder="Телефон"
          defaultValue=""
          control={control}
          name={'phone'}
          rules={{
            required: 'Введите номер телефона в формате +375291111111',
            // minLength: {
            //   message: 'Минимум 12 цифр',
            //   value: 13,
            // },
            // maxLength: {
            //   message: 'Максимум 12 цифр',
            //   value: 15,
            // },
            pattern: {
              message: 'Введите номер телефона в формате +375291111111',
              value: /^\+375\s?(17|29|33|44)\s?\d{3}\d{2}\d{2}$/,
            },
          }}
          // label="Номер телефона"
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
          }}
          // label="Выбранное направление"
        />

        <Button
          width={'280px'}
          height={'50'}
          title={'Записаться на занятие'}
          type={'submit'}
        />
      </form>
    </FormProvider>
  );
};

export default MyForm;
