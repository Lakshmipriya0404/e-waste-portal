import React from 'react';
import BaseButton, { BaseButtonProps } from '../bases/BaseButton';

export interface TextButtonProps extends BaseButtonProps {
  hoverColor: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  hoverColor,
  ...baseButtonProps
}) => {
  const textButtonStyle: React.CSSProperties = {
    backgroundColor: '#8eb640',
    color: '#fff',
    cursor: 'pointer',
  };

  const style = {
    ...textButtonStyle,
    ...baseButtonProps,
  };

  const hoverStyle = {
    backgroundColor: hoverColor,
  };

  return (
    <BaseButton
      {...baseButtonProps}
      style={style}
      hoverStyle={hoverStyle}
    ></BaseButton>
  );
};

export default TextButton;
