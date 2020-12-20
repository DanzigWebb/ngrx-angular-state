import { IFileResponseData } from '@app/core/models/fs.interface';

export interface FsState {
  files: IFileResponseData;
}

export interface FsStateFilter {
  searchField: string;
}
