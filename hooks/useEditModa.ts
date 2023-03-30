import {create} from 'zustand';


interface EditeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;    
};

const useEditModal = create<EditeModalStore>((set) => ({
    isOpen:false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

export default useEditModal;