import { sum, obj } from "../src/toBe";

test("sum함수가 1번 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum함수가 1,2와 함께 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("obj.minus 함수가 1번 호출되었다.", () => {
  const minusSpy = jest.fn(obj.minus);
  minusSpy(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(1);
});

test("obj.minus 함수 자체를 변형시킨다.", () => {
  jest.spyOn(obj, "minus");
  obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
});
