//import { Gameboard } from './gameboard';

/**
 * @jest-environment jsdom
 */

// test('Illegal cells for ship length 2 is multiples of 9', () => {
//   expect(Gameboard.getIllegalCells(2)).toBe([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99]);
// });

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });