import { useDictionary } from "@presentation";
import { observer } from "mobx-react-lite";
import { DrawerLayout } from "presentation/shared/layout";

function Inventory () {
  const dict = useDictionary()

  return (
    <DrawerLayout title={dict.common.inventory}>
      {/* <KeoButton variant="contained" onClick={() => showSnackbar('error', 'testing')}>Show Notification</KeoButton> */}
    </DrawerLayout>
  )
}

export default observer(Inventory)