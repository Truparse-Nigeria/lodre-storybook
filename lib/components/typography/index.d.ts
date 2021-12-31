import { FC, HTMLAttributes, ReactNode } from 'react';
import { TextType, WeightType } from '../../tokens/font';
export interface IProps {
    children: ReactNode;
    size?: TextType;
    weight?: WeightType;
    ellipsis?: number;
}
export declare const SmallText: FC<IProps & HTMLAttributes<HTMLElement>>;
export declare const Paragraph: FC<IProps & HTMLAttributes<HTMLElement>>;
export declare const Heading: FC<IProps & HTMLAttributes<HTMLElement>>;
//# sourceMappingURL=index.d.ts.map