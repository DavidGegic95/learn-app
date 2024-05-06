// import React from 'react';
import { ReactNode } from 'react';
import mailIconImg from '../../assets/Mail.svg';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <button className={className} type={type} onClick={onClick}>
      {mailIcon && <img src={mailIconImg}></img>}
      {children}
      {text}
    </button>
  );
};

export default Button;
