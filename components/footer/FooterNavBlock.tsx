import FooterNav from './FooterNavigation';

type TheFooterProps = {
  iconSvg: any;
};

const FooterNavBlock = (props: TheFooterProps) => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row">
        {props.iconSvg}
        <h2 className="ml-[10px] font-gilroy text-twenty">Мы научим</h2>
      </div>
      <ul className="mt-5 flex gap-2 flex-col">
        <FooterNav startIndex={0} endIndex={3} />
      </ul>
    </div>
  );
};
export default FooterNavBlock;
