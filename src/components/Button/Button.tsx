// import React from 'react';
import mailIconImg from '../../assets/Mail.svg';

const Button = ({
  text,
  className,
  type,
  onClick,
  mailIcon,
}: {
  text: string;
  className: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  mailIcon?: boolean;
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {mailIcon && <img src={mailIconImg}></img>}
      {text}
    </button>
  );
};

export default Button;
