export interface IFileData {
  name: string;
  lastModified: string;
  size: string;
  extname: string;
  type: string;
}

export interface IFileResponseData {
  list: IFileData[];
  path: string;
}
