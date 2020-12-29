import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NotifyConfirmComponent } from '@app/shared/components/notify/notify-confirm/notify-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(public dialog: MatDialog) { }

  public confirm(config?: any) {
    return this.dialog.open(NotifyConfirmComponent)
  }
}
