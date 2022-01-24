import { FC, ReactElement } from "react";
import { PaletteType } from "../../tokens/color";
export interface TabsProps {
    children: ReactElement[];
    centered?: boolean;
    background?: PaletteType;
    foreground?: PaletteType;
    radius?: boolean;
}
declare const Tabs: FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=index.d.ts.map