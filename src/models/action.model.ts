export interface PayloadAction<T, K> {
  type: T;
  payload: K | string;
}
