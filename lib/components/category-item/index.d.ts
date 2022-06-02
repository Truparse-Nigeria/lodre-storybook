import { FC, HTMLAttributes, ReactChild, ReactElement } from "react";
export interface CategoryItemProps {
    title: string;
    children: ReactElement | ReactElement[] | ReactChild | ReactChild[];
    icon?: JSX.Element | SVGElement | ReactChild;
}
declare const CategoryItem: FC<CategoryItemProps & HTMLAttributes<HTMLDivElement>>;
export default CategoryItem;
//# sourceMappingURL=index.d.ts.map