import { createReducer, on } from '@ngrx/store';
import { IFileData } from '../core/models/fs.interface';
import { retrievedFilesList } from './fs.actions';

export const initialState: ReadonlyArray<IFileData> = []

export const fsReducer = createReducer(
  initialState,
  on(retrievedFilesList, (state, { file }) => [...file])
);
