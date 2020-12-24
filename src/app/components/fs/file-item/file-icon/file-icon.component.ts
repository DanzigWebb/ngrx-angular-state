import { Component, Input, OnInit } from '@angular/core';
import { IFileData } from '@app/core/models/fs.interface';

@Component({
  selector:    'fs-file-icon',
  templateUrl: './file-icon.component.html',
  styleUrls:   ['./file-icon.component.scss']
})
export class FileIconComponent implements OnInit {

  @Input() file: IFileData;

  iconStr: string;

  constructor() {
  }

  ngOnInit(): void {
    this.iconStr = this.checkIcon(this.file.type);
  }

  checkIcon(fileType: string): string {
    switch (fileType) {
      case 'folder':
        return 'folder';
      case 'ext/markdown':
        return 'language-markdown';
      case 'application/json':
      case 'text/yaml':
        return 'code-json';
      case 'text/html':
        return 'language-html5';
      case 'text/css':
        return 'language-css3';
      case 'text/x-scss':
      case 'text/x-sass':
        return 'sass'
      case 'image/png':
      case 'image/jpeg':
      case 'image/gif':
        return 'file-image';
      case 'application/javascript':
        return 'language-javascript';
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'file-table-box';
      default:
        return 'file-outline';
    }
  }
}
