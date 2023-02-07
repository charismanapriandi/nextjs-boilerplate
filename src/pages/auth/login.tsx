import { Store } from "@core";
import { Box, Paper } from "@mui/material";
import { AccountStore } from "domain/account/account.store";
import { observer } from "mobx-react-lite";

function Login() {
  const {  } = Store.get<AccountStore>(AccountStore.name)

  return (
    <Box sx={{ height: '100vh', maxHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ p: 2, maxWidth: '500px', width: '100%' }}>
        login page
      </Paper>
    </Box>
  )
}

export default observer(Login)