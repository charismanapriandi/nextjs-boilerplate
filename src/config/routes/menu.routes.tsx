import { ROUTES } from "domain/_app.constants";
import { IMenuRoutes } from "config/routes/interface";
import { useTransition } from "react";

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

export const useMenuRoutes = () => {
  // const [t] = useTransition('common')
  
  return [
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
}