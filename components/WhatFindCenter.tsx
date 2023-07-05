'use client';
import { v4 as uuidv4 } from 'uuid';

type Finding = {
  img: JSX.Element;
  headingDiscription: string;
  textDiscription: string;
};

type Props = {
  FindingInCenter: Finding[];
};

const WhatFindCenter = ({ FindingInCenter }: Props) => {
  return (
    <div>
      <div className="flex justify-center gap-[30px] pt-[60px]">
        {FindingInCenter.slice(0, 2).map((item) => {
          return (
            <div key={uuidv4()} className="flex  gap-[30px]">
              {item.img}
              <div className="max-w-[253px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-[30px] pt-[30px]">
        {FindingInCenter.slice(2).map((item) => {
          return (
            <div key={uuidv4()} className="flex flex-row-reverse gap-[30px] ">
              {item.img}
              <div className="max-w-[253px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatFindCenter;
