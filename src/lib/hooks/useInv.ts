import { ImmunaDefiSdkResponse } from 'lib/types';
import { useRecoilState, atom } from 'recoil';

const invState = atom({
  key: 'immuna_investments',
  default: [] as any,
});

export function useInv() {
  let [inv, setInv] = useRecoilState<ImmunaDefiSdkResponse[]>(invState);
  return { inv, setInv };
}
