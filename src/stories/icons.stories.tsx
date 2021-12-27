import { Meta } from '@storybook/react';
import React from 'react';
import SvgCart from '../icons/Cart';
import SvgDelivery from '../icons/Delivery';
import SvgEyeClose from '../icons/EyeClose';
import SvgEyeOpen from '../icons/EyeOpen';
import SvgSafe from '../icons/Safe';

export default {
  title: 'Icons/Without Background',
  component: SvgEyeClose,
} as Meta;

export const EyeClose = () => <SvgEyeClose width={24} height={24} />;
export const EyeOpen = () => <SvgEyeOpen width={24} height={24} />;
export const Cart = () => <SvgCart width={24} height={24} />;
export const Delivery = () => <SvgDelivery width={24} height={24} />;
export const Safe = () => <SvgSafe width={24} height={24} />;
