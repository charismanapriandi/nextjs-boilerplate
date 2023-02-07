import { styled, Zoom,
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { KeoLoadingButton } from '@presentation';
import { Store } from '@core';
import { AppStore } from 'domain/_app.store';

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '.MuiDialog-paper': {
    boxShadow: 'none',
  },
  '.MuiDialogActions-root': {
    padding: theme.spacing(3),
    paddingTop: '0',
  },
}));

const Transition = forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => <Zoom ref={ref} {...props} />);
Transition.displayName = 'Transition';

function KeoDialog() {
  const { dialog, executeDialogAcion, executingDialogAction, closeDialog } = Store.get<AppStore>(AppStore.name)

  return (
    <Dialog
      open={!!dialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-body"
      TransitionComponent={Transition}
    >
      {dialog && (
        <>
          {dialog.title && (
            <DialogTitle id="alert-dialog-title">
              {dialog.title}
            </DialogTitle>
          )}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialog.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Batal</Button>
            {dialog.action && (
              <KeoLoadingButton
                onClick={executeDialogAcion}
                loading={executingDialogAction}
                autoFocus
                color={dialog.actionSeverity}
              >
                {dialog.actionText ?? 'Oke'}
              </KeoLoadingButton>
            )}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default observer(KeoDialog);