import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notify-confirm',
  templateUrl: './notify-confirm.component.html',
  styleUrls: ['./notify-confirm.component.scss']
})
export class NotifyConfirmComponent implements OnInit {

  title = 'Confirm';
  message = 'Are you sure?';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.data && this.setData();
  }

  setData() {
    if (this.data.title) this.title = this.data.title;
    if (this.data.message) this.message = this.data.message;
  }
}
