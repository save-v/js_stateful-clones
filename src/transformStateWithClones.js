'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let copyOfState = { ...state };

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(copyOfState, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      actions[i].keysToRemove.forEach((el) => delete copyOfState[el]);
    }

    if (actions[i].type === 'clear') {
      Object.keys(copyOfState).forEach((key) => delete copyOfState[key]);
    }

    states.push(copyOfState);
    copyOfState = { ...copyOfState };
  }

  return states;
}

module.exports = transformStateWithClones;
