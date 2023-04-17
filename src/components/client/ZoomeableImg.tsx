import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props {
    src: string;
}

const ZoomableImage: React.FC<Props> = ({ src }) => {
    return (
        <Zoom>
            <Image src={src} alt="Zoomable" width={1200} height={1200} style={{
                width: "100%",
                height: "55vh",
                objectFit: "cover"
            }} />
        </Zoom>
    );
};

export default ZoomableImage;