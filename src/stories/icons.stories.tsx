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
  StarCircle,
  CheckGreenCircle,
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
export const TrashIcon = () => <Trash width={24} height={24} />;
export const AddressIcon = () => <Address width={24} height={24} />;
export const CheckCircleIcon = () => <CheckCircle width={24} height={24} />;
export const CheckGreenCircleIcon = () => (
  <CheckGreenCircle width={24} height={24} />
);
export const StarCircleIcon = () => <StarCircle width={24} height={24} />;
export const ClockIcon = () => <Clock width={24} height={24} />;
export const CustomerCareIcon = () => <CustomerCare width={24} height={24} />;
export const FollowingsIcon = () => <Followings width={24} height={24} />;
export const LocationPinIcon = () => <LocationPin width={24} height={24} />;
export const MinusIcon = () => <Minus width={24} height={24} />;
export const OrdersIcon = () => <Orders width={24} height={24} />;
export const OverviewIcon = () => <Overview width={24} height={24} />;
export const PhoneIcon = () => <Phone width={24} height={24} />;
export const PlusIcon = () => <Plus width={24} height={24} />;
export const PromoCodeIcon = () => <PromoCode width={24} height={24} />;
export const StarIcon = () => <Star width={24} height={24} />;
export const WalletIcon = () => <Wallet width={24} height={24} />;
export const XIcon = () => <X width={24} height={24} />;
