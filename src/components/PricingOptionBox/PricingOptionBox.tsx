// import React from 'react';
import { ItemType, PricingOptionType } from './utils';
import Button from '../Button/Button';
import checkmark from '../../assets/checkmark.svg';
import xSymbol from '../../assets/x-mark.svg';
import { PricingOptionStyleObj } from '../../components/PricingOptionBox/utils';

const PricingOptionBox = ({
  title,
  subtitle,
  price,
  priceSpan,
  button,
  list,
}: PricingOptionType) => {
  return (
    <div>
      <p className={PricingOptionStyleObj.title}>{title}</p>
      <p className={PricingOptionStyleObj.subtitle}>{subtitle}</p>
      <p className={PricingOptionStyleObj.price}>
        {price}
        <span className={PricingOptionStyleObj.priceSpan}>{priceSpan}</span>
      </p>

      <ul>
        {list.map((item: ItemType) => {
          const itemImage = item.checked ? checkmark : xSymbol;
          return (
            <li key={item.text}>
              <img
                style={{ display: 'inline' }}
                src={itemImage}
                className='w-[24px] h-[24px]'
                alt=''
              />
              {item.text}
            </li>
          );
        })}
      </ul>
      <Button
        text={button}
        type='button'
        className={PricingOptionStyleObj.button}
      />
    </div>
  );
};

export default PricingOptionBox;
