import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  className: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CardCommonData {
  id: number;
  icon: ReactNode;
  heading: string;
  text: string;
}
