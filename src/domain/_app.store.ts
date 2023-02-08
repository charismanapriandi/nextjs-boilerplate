import { KeoLoadingButtonProps } from 'presentation/components';
import { action, makeObservable, observable, reaction, toJS } from 'mobx';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

interface IDialog {
  title: string;
  description: string;
  action?: Promise<any>;
  actionSeverity?: KeoLoadingButtonProps['color']
  actionText?: string;
}

export class AppStore {
  constructor() {
    makeObservable(this)
  }

  // snackbar
  @observable snackbar: ((message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey) | null = null
  @action
  showSnackbar = (severity: OptionsObject['variant'], message: string) => {
    if (!this.snackbar) return
    
    this.snackbar(message, {
      variant: severity,
    })
  }
  @action
  setSnackbar = (enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey) => {
    this.snackbar = enqueueSnackbar
  }
  

  // title page
  @observable titlePage: string | null = null;
  @action
  setTitlePage = (value: string) => {
    this.titlePage = value
  }

  // dialog
  @observable dialog: IDialog | null = null
  @observable executingDialogAction = false
  @action
  openDialog = (args: IDialog) => {
    this.dialog = args
  }
  @action
  closeDialog = () => {
    this.dialog = null
  }
  @action
  executeDialogAcion = async () => {
    if (!this.dialog) throw new Error('Dialog is undefined')
    if (!this.dialog.action) throw new Error(`Cannot execute an undefined action`)

    try {
      await this.dialog.action
    } finally {
      this.closeDialog()
    }
  }
}
