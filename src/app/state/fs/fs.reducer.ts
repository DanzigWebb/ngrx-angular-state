import { createReducer, on } from '@ngrx/store';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { retrievedFilesList } from './fs.actions';

export const initialState: IFileResponseData = {
  list: [],
  path: ''
}

export const fsReducer = createReducer(
  initialState,
  on(retrievedFilesList, (state, { data }) => ({...data}))
);
