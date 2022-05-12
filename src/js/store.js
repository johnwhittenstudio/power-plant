// // Storing State
// export const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

// // Function Factory for Changing States of Different Objects
// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     });
//   };
// };