// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);








// import * as store from './store.js';

// // We create four functions using our function factory. We could easily create many more.
// // Functions Created with Change State Function Factory
// export const feed = store.changeState("soil")(1);
// export const blueFood = store.changeState("soil")(5);
// export const superFood = store.changeState("soil")(7);

// export const hydrate = store.changeState("water")(1);
// export const superWater = store.changeState("water")(5);
// export const holyWater = store.changeState("water")(7);

// export const light = store.changeState("light")(1);
// export const lighten = store.changeState("light")(3);
// export const enlighten = store.changeState("light")(7);

// export const plant1 = store.storeState();
// export const plant2 = store.storeState();
// export const plant3 = store.storeState();



// Plant Method Compositions


// Plant Function Factories





// $(document).ready(function() {

// // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

//   $('#feed').click(function() {
//     const newState = stateControl(blueFood);
//     $('#soil-value').text(`Soil: ${newState.soil}`);
//   });

// // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

//   $('#show-state').click(function() {
//     // We just need to call stateControl() without arguments to see our current state.
//     const currentState = stateControl();
//     $('#soil-value').text(`Soil: ${currentState.soil}`);
//   });
// });