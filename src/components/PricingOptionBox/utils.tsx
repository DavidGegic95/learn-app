export type ItemType = {
  text: string;
  checked: boolean;
};

export type PricingOptionType = {
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

export const PricingOptionStyleObj = {
  title:
    'font-montserrat font-normal font-bold text-2xl leading-12 text-[#171A1F]',
  subtitle:
    'font-poppins font-normal font-normal text-base leading-6 text-gray-700',
  price:
    'font-montserrat font-normal font-bold text-5xl leading-14 text-[#171A1F]',
  priceSpan:
    'font-poppins font-normal font-normal text-sm leading-5 text-[#424955]',
  button:
    'bg-white border border-purple-600 rounded-md font-poppins font-normal text-base leading-6 text-[#6355D8]',
  list: '',
};

export const PricingOptionContent: PricingOptionType[] = [
  {
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
