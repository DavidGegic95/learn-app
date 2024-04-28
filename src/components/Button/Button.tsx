// import React from 'react';
import { ReactNode } from 'react';
import mailIconImg from '../../assets/Mail.svg';

const Button = ({
  text,
  className,
  type,
  onClick,
  mailIcon,
  children,
}: {
  text: string;
  className: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  mailIcon?: boolean;
  children?: ReactNode;
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {mailIcon && <img src={mailIconImg}></img>}
      {children}
      {text}
    </button>
  );
};

export default Button;
