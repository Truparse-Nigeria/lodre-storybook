import { FC, ReactChild, ReactChildren } from "react";
import { PaletteType } from "../../tokens/color";
export interface BadgeProps {
    borderColor: PaletteType;
    fillColor: PaletteType;
    color: PaletteType;
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
declare const Badge: FC<BadgeProps>;
export default Badge;
//# sourceMappingURL=index.d.ts.map