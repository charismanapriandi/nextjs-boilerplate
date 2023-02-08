import { Store } from "@core";
import { AppStore } from "domain/_app.store";
import { observer } from "mobx-react-lite";
import { useSnackbar, ProviderContext } from "notistack";
import { useEffect } from "react";

function Notistack() {
  const { enqueueSnackbar } = useSnackbar()
  const { setSnackbar } = Store.get<AppStore>(AppStore.name)

  useEffect(() => {
    setSnackbar(enqueueSnackbar)
  }, [enqueueSnackbar, setSnackbar])

  return null
}

export default observer(Notistack)