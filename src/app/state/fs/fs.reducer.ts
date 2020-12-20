import { createReducer, on } from '@ngrx/store';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { resetFilterStr, retrievedFilesList, setFilterStr } from './fs.actions';

export const initialState: IFileResponseData = {
  list: [],
  path: ''
};

export const initialStateSearchField = ''

export const fsReducer = createReducer(
  initialState,
  on(retrievedFilesList, (state, {data}) => ({...data}))
);

export const fsFilterStrReducer = createReducer(
  initialStateSearchField,
  on(setFilterStr, (state, {searchField}) => searchField),
  on(resetFilterStr, state => '')
);

//  on(resetFilterStr, state => ({...state, prop: ''}))
