import Image from "next/legacy/image";

interface ImageWrapperProps {
    src: any,
    height?: number,
    width: number,
    alt: string,
    rounded?: string
}

const ImageWrapper = (props : ImageWrapperProps) => {
    const {src, height, width, alt, rounded} = props;
    const roundedClassName = rounded ? `rounded-${rounded}` : ""

    return (
        <div 
            className={`flex items-center shrink-0 `}
        >   
        {typeof(src) === 'string' ?
            <Image src={src} loader={() => src} width={width} height={height} className={`object-contain ${roundedClassName}`} alt={alt}/>
        :
            <Image src={src} width={width} height={height} className={`object-contain ${roundedClassName}`} alt={alt}/>
        }
        </div>
    )
}

export default ImageWrapper;