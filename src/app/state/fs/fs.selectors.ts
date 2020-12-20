import { createSelector } from '@ngrx/store';
import { FsState, FsStateFilter } from './fs.state';
import { IFileResponseData } from '@app/core/models/fs.interface';


export const selectFiles = createSelector(
  (state: FsState) => state.files,
  (files: IFileResponseData) => files
);

export const selectFilterStr = createSelector(
  (state: FsStateFilter) => state.searchField,
  (searchField: string) => searchField
);
