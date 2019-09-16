type FunctionTypeTC = (fn: any) => [any, any];
type FunctionTypeATC = (fn: any) => Promise<[any, any]>;

interface Package {
  tc: FunctionTypeTC,
  atc: FunctionTypeATC
}

export default Package;
