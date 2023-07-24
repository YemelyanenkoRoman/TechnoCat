'use client';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './formElement/inputField/InputField';
import Button from './buttons/Button';
import InputPhoneField from './formElement/inputField/InputPhoneField';

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
          // label="Имя"
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
          // label="Выбранное направление"
        />

        <Button width={'280px'} height={'50'} title={'Записаться на занятие'} type={'submit'} />
      </form>
    </FormProvider>
  );
};

export default MyForm;
