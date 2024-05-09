export interface loginBoxDataInterface {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
}

export const loginBoxData: loginBoxDataInterface[] = [
  {
    title: 'Aliqua Irure Tempor Lorem Occaecat Volup',
    subtitle: 'Do consectetur',
    date: 'Dec 24, 2022',
    readTime: '5 mins read',
  },
  {
    title: 'Commodo Deserunt Ipsum Occaecat Qui',
    subtitle: 'Consequat labore',
    date: 'Dec 12, 2022',
    readTime: '10 mins read',
  },
  {
    title: 'Deserunt Cccaecat Qui Amet Tempor Dolore',
    subtitle: 'Laboris nulla',
    date: 'Nov 20, 2022',
    readTime: '3 mins read',
  },
];

export const loginBoxStyles: loginBoxDataInterface = {
  title:
    'font-montserrat text-[1.5rem] leading-[2.25rem] font-bold text-[#171A1FFF]',
  subtitle:
    'font-poppins text-[1rem] leading-[1.75rem] font-normal text-[#6355D8FF]',
  date: 'font-poppins text-[0.75rem] leading-[1.25rem] font-normal text-[#9095A0FF]',
  readTime:
    'font-poppins text-[0.75rem] leading-[1.25rem] font-normal text-[#323842FF] bg-[#F3F4F6FF] px-[8px] py-[4px] rounded-[14px]',
};
