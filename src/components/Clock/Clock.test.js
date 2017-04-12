beforeEach(() => {
  // todo: before test begin
});

afterEach(() => {
  // todo: after test end
});

describe('test unit', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    // todo: before each in describe block
  });
  
  
});

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});