import { obj } from "../src/toStrictEqual";

test("객체끼리 비교할 때는 toBe가 아닌 toStrictEqual을 사용해야 한다.", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
  expect(obj()).not.toStrictEqual({ a: "h" });
});

test("배열 비교 시에도 toStrictEqual을 사용한다", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
