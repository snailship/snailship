import { ReactNode } from 'react'
import { ComponentProps } from '../interfaces'

export interface CardProps extends ComponentProps {
  /**
   * Three types of card
   */
  variant?: 'elevated' | 'filled' | 'outlined'
  /**
   * Layout: horizontal or stacked
   */
  layout?: 'horizontal' | 'stacked'
  children?: ReactNode;
}

export interface CardHeadlineProps extends ComponentProps {
  title?: ReactNode;
  subhead?: ReactNode;
}
