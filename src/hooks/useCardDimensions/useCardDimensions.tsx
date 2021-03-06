import React from 'react'
import createActions, { SELECT_CARD, UNSELECT_CARD, UPDATE_CARDS } from './actions'

function useCardDimensions(initalState: CardsState = { cardsById: {}, currentCard: null }) {
  const currentCard = (state: CurrentCardState, action: CardActions): CurrentCardState => {
    switch (action.type) {
      case SELECT_CARD:
        return action.payload.id
      case UNSELECT_CARD:
        return null
      default:
        return state
    }
  }
  const cardsById = (state: CardsByIdState, action: CardActions): CardsByIdState => {
    switch (action.type) {
      case UPDATE_CARDS:
        return {
          ...state,
          [action.payload.id]: action.payload.dimensions,
        }
      default:
        return state
    }
  }

  const cardsReducer = (state: CardsState, action: CardActions) => ({
    cardsById: cardsById(state.cardsById, action),
    currentCard: currentCard(state.currentCard, action),
  })
  const [state, dispatch] = React.useReducer(cardsReducer, initalState)

  return {
    ...createActions(dispatch),
    state,
  }
}
type ContextProps = { state: CardsState } & ReturnType<typeof createActions>

export const CardsContext = React.createContext<ContextProps>({
  state: { cardsById: {}, currentCard: null },
})

interface ProviderProps {
  initialState?: CardsState
  children: React.ReactNode
}
export const CardsProvider = ({ initialState, children }: ProviderProps) => {
  return <CardsContext.Provider value={useCardDimensions(initialState)}>{children}</CardsContext.Provider>
}
export default useCardDimensions
