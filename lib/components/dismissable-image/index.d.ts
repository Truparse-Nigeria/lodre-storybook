import { FC } from "react";
interface DimissableImageProps {
    src: string;
    id: string;
    dismissable: boolean;
    removeImage: (id: string) => void;
}
declare const DimissableImage: FC<DimissableImageProps>;
export default DimissableImage;
//# sourceMappingURL=index.d.ts.map