import { obj } from "../src/toMatchObject";

test("class를 지닌 객체와 일반 객체 비교", () => {
  expect(obj("hello")).toMatchObject({ a: "hello" });
  expect(obj("hello")).not.toStrictEqual({ a: "hello" });
});
