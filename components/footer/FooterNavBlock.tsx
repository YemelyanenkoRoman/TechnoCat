import FooterNav from './FooterNavigation';

type TheFooterProps = {
  iconSvg: any;
  title: string;
  startIndex: number;
  endIndex: number;
};

const FooterNavBlock = (props: TheFooterProps) => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row">
        {props.iconSvg}
        <h2 className="ml-[10px] font-gilroy text-twenty">{props.title}</h2>
      </div>
      <ul className="mt-5 flex gap-2 flex-col">
        <FooterNav startIndex={props.startIndex} endIndex={props.endIndex} />
      </ul>
    </div>
  );
};
export default FooterNavBlock;
