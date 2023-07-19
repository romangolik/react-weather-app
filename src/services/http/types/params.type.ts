export type Params<Key extends string = string> = {
  readonly [key in Key]: any;
};