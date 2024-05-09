import { ItemType, PricingOptionType } from './utils';
import Button from '../Button/Button';
import checkmark from '../../assets/checkmark.svg';
import xSymbol from '../../assets/x-mark.svg';
import infoIcon from '../../assets/info-icon.svg';
import { PricingOptionStyleObj } from '../../components/PricingOptionBox/utils';
import { popularButtonClassNames } from './utils';

const PricingOptionBox = ({
  mailIcon,
  popular,
  div,
  title,
  subtitle,
  price,
  priceSpan,
  button,
  list,
}: PricingOptionType) => {
  return (
    <div className={div}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <p className={PricingOptionStyleObj.title}>{title}</p>
          {popular && (
            <span className='bg-[#E16DDE] py-[4px] px-[8px] rounded-[14px] font-poppins font-normal text-[12px] leading-20 text-white'>
              Popular
            </span>
          )}
        </div>
        <p className={PricingOptionStyleObj.subtitle}>{subtitle}</p>
      </div>
      <p className={PricingOptionStyleObj.price}>
        {price}
        <span className={PricingOptionStyleObj.priceSpan}>{priceSpan}</span>
      </p>

      <ul className='flex flex-col gap-[8px] w-full'>
        {list.map((item: ItemType, index) => {
          const itemImage = item.checked ? checkmark : xSymbol;
          return (
            <li className='flex gap-[6px]' key={item.text}>
              <img
                style={{ display: 'inline' }}
                src={itemImage}
                className='w-[24px] h-[24px]'
                alt=''
              />
              {item.text}
              {index === 1 && (
                <img className='relative left-[-6px]' src={infoIcon}></img>
              )}
            </li>
          );
        })}
      </ul>
      <Button
        mailIcon={mailIcon}
        text={button}
        type='button'
        className={
          popular ? popularButtonClassNames : PricingOptionStyleObj.button
        }
      />
    </div>
  );
};

export default PricingOptionBox;
