import Image, { ImageProps } from "next/image";

export type KeoImageProps = ImageProps

export default function KeoImage(props: KeoImageProps) {
  return (
    <Image {...props} alt={props.alt} />
  )
}