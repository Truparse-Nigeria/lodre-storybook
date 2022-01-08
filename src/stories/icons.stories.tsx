import { Meta } from "@storybook/react";
import React from "react";
import SvgCart from "../icons/Cart";
import SvgDelivery from "../icons/Delivery";
import SvgEyeClose from "../icons/EyeClose";
import SvgEyeOpen from "../icons/EyeOpen";
import SvgSafe from "../icons/Safe";
import {
  Trash,
  Address,
  CheckCircle,
  Clock,
  CustomerCare,
  Followings,
  LocationPin,
  Minus,
  Orders,
  Overview,
  Phone,
  Plus,
  PromoCode,
  Star,
  Wallet,
  X,
} from "../icons/icons";

export default {
  title: "Icons/Without Background",
  component: SvgEyeClose,
} as Meta;

export const EyeClose = () => <SvgEyeClose width={24} height={24} />;
export const EyeOpen = () => <SvgEyeOpen width={24} height={24} />;
export const Cart = () => <SvgCart width={24} height={24} />;
export const Delivery = () => <SvgDelivery width={24} height={24} />;
export const Safe = () => <SvgSafe width={24} height={24} />;
export const TrashIcon = () => <Trash />;
export const AddressIcon = () => <Address />;
export const CheckCircleIcon = () => <CheckCircle />;
export const ClockIcon = () => <Clock />;
export const CustomerCareIcon = () => <CustomerCare />;
export const FollowingsIcon = () => <Followings />;
export const LocationPinIcon = () => <LocationPin />;
export const MinusIcon = () => <Minus />;
export const OrdersIcon = () => <Orders />;
export const OverviewIcon = () => <Overview />;
export const PhoneIcon = () => <Phone />;
export const PlusIcon = () => <Plus />;
export const PromoCodeIcon = () => <PromoCode />;
export const StarIcon = () => <Star />;
export const WalletIcon = () => <Wallet />;
export const XIcon = () => <X />;
