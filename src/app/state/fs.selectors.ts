import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FsState } from './fs.state';
import { IFileData } from '../core/models/fs.interface';


export const selectBooks = createSelector(
  (state: FsState) => state.files,
  (books: Array<IFileData>) => books
);

export const selectCollectionState = createFeatureSelector<
  FsState,
  ReadonlyArray<string>
  >("files");

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (files: Array<IFileData>, collection: Array<string>) => {
    return collection.map((lastModified) => files.find((book) => book.lastModified === lastModified));
  }
);
