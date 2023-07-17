// h-[calc(100vh-107px)]

import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';

const Contacts = () => {
  return (
    <div className="font-gilroy font-normal text-local-gray-t text-sexteen  pt-[107px] mx-[60px]">
      <section className="mt-10 mb-[30px] font-poppins">
        <Breadcrumbs items={breadcrumbItems} />
      </section>
      <section>
        <h1 className="flex justify-center text-forty">Контакты</h1>
        <div className="w-[424px]">
          <p className="text-twenty">Адрес:</p>
          <p className="pt-[15px] text-sexteen">246003, г. Гомель, ул. Кирова, д. 55, каб. 318</p>
        </div>
        <div>
          <script
            type="text/javascript"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51e53af8722b0f91252c7ffff40d05ee2ce9d65eaab80985d8a67acddd8557ed&amp;width=825&amp;height=720&amp;lang=ru_RU&amp;scroll=true"
          ></script>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
