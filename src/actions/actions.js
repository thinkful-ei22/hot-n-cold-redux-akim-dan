
export const GUESS = 'GUESS';
export const guessAction = (guess) => ({
    type: GUESS,
    guess
})

export const FEEDBACK = 'FEEDBACK'
export const updateFeedback = (feedback) => ({
  type: FEEDBACK,
  feedback
})

export const AURAL_STATUS = 'AURAL_STATUS'
export const updateAuralStatus = (status) => ({
  type: AURAL_STATUS,
  status
})

export const RESET = 'RESET';
export const resetGame = () => ({
  type: RESET
})