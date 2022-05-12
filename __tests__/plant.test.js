import { changeState, storeState, blueFood, feed, hydrate, superWater, plant } from './../src/js/plant.js';

describe('storeState', () => {

  test('should correctly store the initial state', () => {
      const stateControl = storeState();
      expect(stateControl()).toEqual({});
  });

  //updateState points to stateControl which points to storeState hence the expect of updatedState is in effect an expect of stateControl
  test('should correctly store changed state', () => {
    const stateControl = storeState();
    const testFunction = changeState("testProperty")(2);
    const updatedState = stateControl(testFunction);
    expect(updatedState).toEqual({ testProperty: 2 });
  });
});

describe('changeState', () => {

  test('should correctly create functions that alter a plants properties', () => {
    let testPlant = {}
    const testFunction = changeState("testProperty")(2);
    expect(testFunction(testPlant)).toEqual({ testProperty: 2 });
  });
});

// describe('hydrate', () => {
//   test('should increase water level by 1', () => {
//     const plant = {}
//     const newPlant = hydrate(1)(plant);
//     expect(newPlant.water).toEqual(2);
//   });
// });