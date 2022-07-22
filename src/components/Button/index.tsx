import React, { useCallback } from 'react';
import { darken } from 'polished';
import { styled, theme } from '../../styles/stiches.config';

const ButtonStyled = styled('button', {
  background: '$green-light',
  border: 0,
  borderRadius: '$8',
  color: '$white',
  cursor: 'pointer',
  fontSize: '$16',
  transition: 'all 0.2s ease-in-out',

  defaultVariants: {
    size: 'medium',
  },

  '&:hover': {
    background: darken(0.1, theme.colors['green-light'].value),
  },

  '&:disabled': {
    background: darken(0.1, theme.colors['green-light'].value),
    cursor: 'not-allowed',
  },

  variants: {
    outlined: {
      true: {
        border: '2px solid $green-light',
        background: 'none',
        '&:hover': {
          background: '$green-light',
        },
      },
    },
    size: {
      small: {
        paddingTop: '$12',
        paddingBottom: '$12',
        width: '$small',
      },
      medium: {
        paddingTop: '$12',
        paddingBottom: '$12',
        width: '$medium',
      },
      large: {
        paddingTop: '$12',
        paddingBottom: '$12',
        width: '$large',
      },

      full: {
        paddingTop: '$12',
        paddingBottom: '$12',
        width: '$full',
      },
    },
  },
});

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'full';
  onClick?: (event: React.MouseEvent) => void;
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  outlined?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = 'medium',
  type,
  onClick,
  children,
  outlined = false,
  ...rest
}: ButtonProps) => {
  const handleClick = useCallback(
    (event: React.MouseEvent) => onClick && onClick(event),
    [onClick]
  );
  return (
    <ButtonStyled
      outlined={outlined}
      type={type}
      size={size}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};
