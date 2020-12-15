import { Component, Input, OnInit } from '@angular/core';
import { IFileData } from '@app/core/models/fs.interface';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {

  @Input() file: IFileData;

  constructor() { }

  ngOnInit(): void {
  }

}
