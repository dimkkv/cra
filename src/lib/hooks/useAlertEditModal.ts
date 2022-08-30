import { useRecoilState, atom } from 'recoil';

const isOpenState = atom({ key: 'isOpen', default: { open: false, id: -1 } });

export function useAlertEditModal() {
  let [isOpen, setIsOpen] = useRecoilState(isOpenState);
  return { isOpen, setIsOpen };
}
