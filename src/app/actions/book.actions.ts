import { Action } from '@ngrx/store';
import { Book } from '../services/book/book';

export const CREATE = '[Books] Create';
export const UPDATE = '[Books] Update';
export const DELETE = '[Books] Delete';
export const LOAD = '[Books] Load';

export class Create implements Action {
  readonly type = CREATE;
  constructor(public book: Book) { }
}

export class Load implements Action {
  readonly type = LOAD;
  constructor(public books: Book[]) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Book>,
  ) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) { }
}

export type BookActions
  = Create
  | Update
  | Delete
  | Load;
