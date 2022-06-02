import { FC } from "react";
interface PaginationProps {
    pages: number;
    current: number;
    goTo: (page: number) => void;
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
//# sourceMappingURL=index.d.ts.map