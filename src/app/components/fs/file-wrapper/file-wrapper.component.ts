import { Component, Input, OnInit } from '@angular/core';
import { IFileData } from '@app/core/models/fs.interface';

@Component({
  selector: 'app-file-wrapper',
  templateUrl: './file-wrapper.component.html',
  styleUrls: ['./file-wrapper.component.scss']
})
export class FileWrapperComponent implements OnInit {

  @Input() files: IFileData[];

  constructor() { }

  ngOnInit(): void {
  }
}
