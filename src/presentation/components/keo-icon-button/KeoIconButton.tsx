import { IconButton, IconButtonProps } from "@mui/material";
import { KeoIconProps, KeoIcon } from "@presentation";

export type KeoIconButtonProps = IconButtonProps & Pick<KeoIconProps, 'name' | 'variant'> & {
  iconProps?: Omit<KeoIconProps, 'name' | 'variant'>
};

export default function KeoIconButton({ name, variant, iconProps, ...iconButtonProps }: KeoIconButtonProps) {
  const keoIconProps = {name, variant}
  return (
    <IconButton {...iconButtonProps}>
      <KeoIcon {...keoIconProps as KeoIconProps} {...iconProps}  />
    </IconButton>
  )
}
