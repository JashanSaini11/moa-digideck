import { create } from 'zustand'

interface DeckState {
  currentSlide: number
  introComplete: boolean

  setSlide: (index: number) => void
  nextSlide: () => void
  setIntroComplete: () => void
}

export const useDeckStore = create<DeckState>((set) => ({
  currentSlide: 0,
  introComplete: false,

  setSlide: (index) => set({ currentSlide: index }),

  nextSlide: () =>
    set((state) => ({
      currentSlide: state.currentSlide + 1,
    })),

  setIntroComplete: () =>
    set({
      introComplete: true,
    }),
}))