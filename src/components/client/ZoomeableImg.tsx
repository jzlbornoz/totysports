import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type PlaceholderValue = "blur" | "empty";

interface Props {
    src: string;
    key: number;
}


type NextNativeImage = React.ImgHTMLAttributes<HTMLImageElement> & Props;

const ZoomableImage: React.FC<Props> = ({ src, key }) => {
    return (
        <Zoom>
            <Image src={src} alt="Zoomable" width={1200} height={1200} style={{
                width: "100%",
                height: "55vh",
                objectFit: "cover"

            }} key={key} />
        </Zoom>
    );
};

export default ZoomableImage;