import { obj } from "../src/mockFunction";

test("obj.minus 함수가 한번 실행되었다.(spy함수 삽입).", () => {
  jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});

test("obj.minus 함수에 스파이를 심고 원본 함수는 실행 안되게.", () => {
  jest.spyOn(obj, "minus").mockImplementation();
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(2);
  expect(result).not.toBe(-1);
});

test("obj.minus 함수에 스파이를 심고 리턴값을 바꾸게.", () => {
  jest.spyOn(obj, "minus").mockImplementation(() => 5);
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result).toBe(5);
});

test("obj.minus 함수에 스파이를 심고 스파이 함수 한번씩만 실행되게.", () => {
  jest
    .spyOn(obj, "minus")
    .mockImplementationOnce(() => 5)
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementation(() => 3);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(6);
  expect(result1).toBe(5);
  expect(result2).toBe(3);
  expect(result3).toBe(3);
});

test("obj.minus 함수에 스파이를 심고 리턴값만 바꾸게.(mockImplementation의 짧은 버전)", () => {
  jest.spyOn(obj, "minus").mockReturnValue(4);
  const result1 = obj.minus(1, 2);
  expect(result1).toBe(4);
});
