'use strict';

import { addUp } from './solution2.js';

describe('addUp', () => {
    test('should return the correct sum for given numbers', () => {
      expect(addUp(4)).toBe(10);
      expect(addUp(13)).toBe(91);
      expect(addUp(600)).toBe(180300);
      expect(addUp(392)).toBe(77028);
      expect(addUp(53)).toBe(1431);
      expect(addUp(897)).toBe(402753);
      expect(addUp(23)).toBe(276);
      expect(addUp(1000)).toBe(500500);
      expect(addUp(738)).toBe(272691);
      expect(addUp(100)).toBe(5050);
      expect(addUp(925)).toBe(428275);
      expect(addUp(1)).toBe(1);
      expect(addUp(999)).toBe(499500);
      expect(addUp(175)).toBe(15400);
      expect(addUp(111)).toBe(6216);
    });
  });