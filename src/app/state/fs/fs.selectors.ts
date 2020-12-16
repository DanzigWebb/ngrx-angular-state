import { createSelector } from '@ngrx/store';
import { FsState } from './fs.state';
import { IFileResponseData } from '@app/core/models/fs.interface';


export const selectFiles = createSelector(
  (state: FsState) => state.files,
  (files: IFileResponseData) => files
);
