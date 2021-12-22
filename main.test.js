import { makeChristmasTree } from "./main.js";

test("cheks if the returned tree with a height 5 is correct.", function () {
  const expected = `    *
   ***
  *****
 *******
*********
`;
  const actual = makeChristmasTree(5);

  expect(actual).toBe(expected);
});

test("cheks if the returned tree with a height 3 is correct.", function () {
  const expected = `  *
 ***
*****
`;
  const actual = makeChristmasTree(3);

  expect(actual).toBe(expected);
});

test("cheks if the returned tree with a height 0 is just an empty string.", function () {
  const expected = '';
  const actual = makeChristmasTree(0);

  expect(actual).toBe(expected);
});