import { Pipe, PipeTransform } from '@angular/core';
import { IFileData } from '@app/core/models/fs.interface';

@Pipe({
  name: 'fsFilter'
})
export class FsFilterPipe implements PipeTransform {

  transform(files: IFileData[], searchStr: string): IFileData[] {
    if (!searchStr) {
      return files;
    }

    return files.filter(
      file => file.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
