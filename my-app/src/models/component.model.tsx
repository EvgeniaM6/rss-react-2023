export type TProps = TPropsObj | Readonly<TPropsObj>;

export type TPropsObj = {
  [key: string]: string;
};

export type TPropsHandle = {
  [key: string]: () => void;
};
