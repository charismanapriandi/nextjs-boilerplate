import { ROUTES } from "domain/_app.constants";
import { IMenuRoutes } from "config/routes/interface";

export const menuRoutes: IMenuRoutes[] = [
  {
    label: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: {
      variant: 'ionicon-outlined',
      name: 'App'
    },
  },
  {
    label: 'Inventory',
    href: ROUTES.INVENTORY,
    icon: {
      variant: 'ionicon-outlined',
      name: 'Box'
    },
  }
]
