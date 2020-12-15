import { IFileData } from '../core/models/fs.interface';

export interface FsState {
  files: ReadonlyArray<IFileData>;
}
