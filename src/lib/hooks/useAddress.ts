import { useRecoilState, atom } from 'recoil';

const addressState = atom({
  key: 'immuna_address',
  default: '0x1a5197c04510f24d2b39e89702575c3825da3f27',
});

export function useAddress() {
  let [address, setAddress] = useRecoilState(addressState);
  return { address, setAddress };
}
