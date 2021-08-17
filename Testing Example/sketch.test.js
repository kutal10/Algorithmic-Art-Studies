const {
  linesPoints,
  oceanPoints,
  mountainPoints,
  oceanShading,
} = require("./sketch.js");

test("Ensures that lines are not drawn out of bounds", () => {
  expect(linesPoints.some((el) => el < 0)).toBe(false);

  expect(linesPoints.some((el) => el > 800)).toBe(false);
});

test("Ensures that the ocean is not drawn out of bounds", () => {
  expect(oceanPoints.some((el) => el < 0)).toBe(false);

  expect(oceanPoints.some((el) => el > 800)).toBe(false);
});

test("Ensures that the mountain is not drawn out of bounds", () => {
  expect(mountainPoints.some((el) => el < 0)).toBe(false);

  expect(mountainPoints.some((el) => el > 800)).toBe(false);
});

test("Ensures that the ocean hatching decreases as y value increases", () => {
  expect(oceanShading.isDescending).toBe(true);
});

function isDescending(arr) {
  return arr.every(function (x, i) {
    return i === 0 || x <= arr[i - 1];
  });
}
