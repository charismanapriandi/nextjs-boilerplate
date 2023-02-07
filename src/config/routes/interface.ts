import { Roles } from "@core";
import { KeoIconProps } from "presentation/components";

type WithSubRoutes = {
  subRoutes?: IMenuRoutes[];
  href?: never;
}
type WithoutSubRoutes = {
  subRoutes?: undefined;
  href: string;
}
type IMenuRoutesBase = {
  label: string;
  icon: KeoIconProps;
  roles?: Roles[]
}

export type IMenuRoutes = IMenuRoutesBase & (WithSubRoutes | WithoutSubRoutes)
