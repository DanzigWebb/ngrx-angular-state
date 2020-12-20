import { createAction, props } from '@ngrx/store';
import { IFileResponseData } from '@app/core/models/fs.interface';

export const retrievedFilesList = createAction(
  '[Files List/API] Retrieve Files Success',
  props<{ data: IFileResponseData }>()
);

export const setFilterStr = createAction(
  '[Files Filter] Set Filter String',
  props<{ searchField: string }>()
);

export const resetFilterStr = createAction(
  '[Files Filter] Reset Filter String'
)
