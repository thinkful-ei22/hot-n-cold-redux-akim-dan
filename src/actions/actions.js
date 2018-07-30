// users can...

// Guess Action
// make Guesses()

export const GUESS = 'GUESS';
export const guessAction = (num) => ({
    type: GUESS,
    num
})
// see previous guesses()
// receive a count of their previous guesses()

// Feedback Action
// receive feedback indicating hot, cold, and correctness()
export const FEEDBACK = 'FEEDBACK'
export const updateFeedback = (feedback) => ({
  type: FEEDBACK,
  feedback
})

// Reset action
// start a new game()

export const RESET = 'RESET';
export const resetGame = () => ({
  type: RESET
})

// Tutorial action
// render and hide a tutorial() 

