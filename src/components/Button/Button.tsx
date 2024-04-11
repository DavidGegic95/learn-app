import React from 'react';

const Button = ({
  text,
  className,
  type,
  onClick,
}: {
  text: string;
  className: string;
  type: 'submit' | 'button';
  onClick?: () => void;
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
