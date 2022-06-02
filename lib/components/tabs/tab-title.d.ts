import { FC } from "react";
import { PaletteType } from "../../tokens/color";
interface TabTitleProps {
    title: string;
    active: boolean;
    index: number;
    setTab: (index: number) => void;
    foreground?: PaletteType;
}
declare const TabTitle: FC<TabTitleProps>;
export default TabTitle;
//# sourceMappingURL=tab-title.d.ts.map