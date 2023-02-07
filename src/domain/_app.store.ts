import { KeoButtonProps, KeoLoadingButtonProps } from 'presentation/components';
import { action, makeObservable, observable } from 'mobx'

interface IDialog {
  title: string;
  description: string;
  action?: Promise<any>;
  actionSeverity?: KeoLoadingButtonProps['color']
  actionText?: string;
}

export class AppStore {
  constructor(){
    makeObservable(this)

    // reaction(() => this.notifications, () => console.log(toJS(this.notifications)))
  }

  // notification
  @observable notifications: any[] = []
  @action
  removeNotification = (key: string) => {
    this.notifications = this.notifications.filter(notification => notification.key !== key);
  }
  @action
  addNotification = (note: string[]) => {
    this.notifications.push({
      key: new Date().getTime() + Math.random(),
      ...note,
    });
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
