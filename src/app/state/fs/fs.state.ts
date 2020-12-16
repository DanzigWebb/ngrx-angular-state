import { IFileData } from '@app/core/models/fs.interface';

export interface FsState {
  files: ReadonlyArray<IFileData>;
}
