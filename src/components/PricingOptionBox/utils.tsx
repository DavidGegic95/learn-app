import { purpleButtonStyle } from '../../styles-for-tailwind';

export type ItemType = {
  text: string;
  checked: boolean;
};

export type PricingOptionType = {
  mailIcon: boolean;
  popular: boolean;
  div: string;
  title: string;
  subtitle: string;
  price: string;
  priceSpan: string;
  button: string;
  list: ItemType[];
};

export type PricingOptionStyle = {
  title: string;
  subtitle: string;
  price: string;
  priceSpan: string;
  button: string;
  list: string;
};

export const popularButtonClassNames =
  purpleButtonStyle + ' w-full py-[8px] px-[16px]';
const popuarDiv =
  'flex flex-col px-[32px] py-[40px] items-start justify-between w-[353px] mobile-view-w-auto h-[438px]  gap-[12px] bg-[#FFFFFF] boxShadow rounded-l-lg';

const notPopuar =
  'flex flex-col p-[32px] items-start justify-between w-[353px] mobile-view-w-auto h-[402px]  gap-[12px] bg-[#F8F9FA] boxShadow rounded-l-lg';
export const PricingOptionStyleObj = {
  title:
    'font-montserrat text-[40px] leading-56 font-semibold text-[#6355D8FF]',
  subtitle: 'font-poppins text-base leading-26 font-normal text-[#424955FF]',
  price:
    'relative font-montserrat font-normal font-bold text-5xl leading-14 text-[#171A1F]',
  priceSpan:
    'absolute top-0 ml-[6px] font-poppins font-normal font-normal text-sm leading-5 text-[#424955]',
  button:
    'w-full flex items-center justify-center gap-[4px] py-[8px] px-[16px] bg-white border border-purple-600 rounded-md font-poppins font-normal text-base leading-6 text-[#6355D8]',
  list: '',
};

export const pricingOptionContent: PricingOptionType[] = [
  {
    mailIcon: false,
    popular: false,
    div: notPopuar,
    title: 'Group',
    subtitle: 'Perfect for side or hobby projects',
    price: '$50',
    priceSpan: '/month',
    button: 'Upgrade',
    list: [
      {
        text: 'Up to 5 users',
        checked: true,
      },
      {
        text: 'Collaboration features',
        checked: true,
      },
      {
        text: 'Smart analytics',
        checked: false,
      },
      {
        text: '30-day free trial',
        checked: false,
      },
    ],
  },
  {
    mailIcon: false,
    popular: true,
    div: popuarDiv,
    title: 'Personal',
    subtitle: 'Perfect for small teams',
    price: '$100',
    priceSpan: '/team/month',
    button: 'Upgrade',
    list: [
      {
        text: 'Up to 5 users',
        checked: true,
      },
      {
        text: 'Collaboration features',
        checked: true,
      },
      {
        text: 'Smart analytics',
        checked: true,
      },
      {
        text: '30-day free trial',
        checked: true,
      },
    ],
  },
  {
    mailIcon: true,
    popular: false,
    div: notPopuar,
    title: 'Organization',
    subtitle: 'Perfect for organizations',
    price: '$150',
    priceSpan: '/user/month',
    button: 'Contact sale',
    list: [
      {
        text: 'Up to 5 users',
        checked: true,
      },
      {
        text: 'Collaboration features',
        checked: true,
      },
      {
        text: 'Smart analytics',
        checked: true,
      },
      {
        text: '30-day free trial',
        checked: true,
      },
    ],
  },
];
