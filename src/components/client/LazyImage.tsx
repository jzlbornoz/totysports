import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type PlaceholderValue = "blur" | "empty";

type LazyProps = {
    width: number;
    height: number;
    placeholder?: PlaceholderValue;
};

type NextNativeImage = React.ImgHTMLAttributes<HTMLImageElement>;

type Props = NextNativeImage & LazyProps;

const LazyImage = ({ src, ...ImageProps }: Props): JSX.Element => {
    const node = useRef(null);
    const emptyImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    const [currentSrc, setCurrentSrc] = useState<string>(emptyImage);

    useEffect(() => {
        //new observer
        const observer = new IntersectionObserver((entries) => {
            entries.map(entry => entry && setCurrentSrc(src ? src : emptyImage));
        });

        //observe
        if (node.current) {
            observer.observe(node.current);
        }

        //disconnect 
        return () => {
            observer.disconnect();
        }
    }, [src])

    return (
        <Image
            ref={node}
            src={currentSrc}
            alt=''
            {...ImageProps}
        />
    )
}

export { LazyImage }