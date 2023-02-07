import { IMenuRoutes } from "config/routes/interface";
import DrawerStyled from "presentation/components/keo-drawer/common/Drawer";
import DrawerList from "presentation/components/keo-drawer/common/DrawerList";
import DrawerListItem from "presentation/components/keo-drawer/common/DrawerListItem";

export interface KeoDrawerProps {
  list: IMenuRoutes[];
}

function KeoDrawer({ list }: KeoDrawerProps) {
  return (
    <DrawerStyled open={true} variant="permanent">
      <DrawerList>
        {list.map((i, index) => (
          <DrawerListItem 
            href={i.href}
            label={i.label}
            icon={i.icon}
            key={index}
          />
        ))}
      </DrawerList>
    </DrawerStyled>
  )
}

export default KeoDrawer;