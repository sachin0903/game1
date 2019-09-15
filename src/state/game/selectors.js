import { createSelector } from 'reselect';

const playersSelector = state =>  state.game && state.game.players;

const nextPairSelector = state => state.game && state.game.nextPair;

const playerSelector = createSelector(
  playersSelector,
  nextPairSelector,
  (players, nextPair) => (index) => (players && nextPair) && players.find(({id}) => nextPair[index] === id)
);

export { playerSelector };
