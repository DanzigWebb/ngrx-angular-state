import { createAction, props } from '@ngrx/store';
import { IFileData } from '@app/core/models/fs.interface';

export const getFiles = createAction(
  '[Files List] Get Files',
  props<{ path: string }>()
);

export const deleteFile = createAction(
  'Files List] Delete File',
  props<{path: string}>()
)

export const retrievedFilesList = createAction(
  '[Files List/API] Retrieve Files Success',
  props<{ files: IFileData[] }>()
);
