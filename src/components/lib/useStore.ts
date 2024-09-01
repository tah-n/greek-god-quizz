import { create } from 'zustand';

interface BooleanState {
  startQuiz: boolean,
  setStartQuiz: (value: boolean) => void;
  resultGod: string,
  setResultGod: (value: string) => void;

}

export const useStart = create<BooleanState>((set) => ({
  startQuiz: <boolean>false,
  setStartQuiz: (value: boolean) => set({ startQuiz: value }),
  resultGod: '',
  setResultGod: (value: string) => set({ resultGod: value })
}))