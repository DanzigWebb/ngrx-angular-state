import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IFileData } from '@app/core/models/fs.interface';

@Component({
  selector:    'fs-file-item',
  templateUrl: './file-item.component.html',
  styleUrls:   ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {

  @Input() file: IFileData;
  @Output() onDelete = new EventEmitter<IFileData>()

  constructor() {
  }

  ngOnInit(): void {
  }

  prevent($event: MouseEvent) {
    $event.stopPropagation();
  }
}
