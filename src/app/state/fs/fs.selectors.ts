import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FsState } from './fs.state';
import { IFileData } from '@app/core/models/fs.interface';


export const selectFiles = createSelector(
  (state: FsState) => state.files,
  (files: IFileData[]) => files
);

export const selectCollectionState = createFeatureSelector<FsState, ReadonlyArray<string>>('files');
