import { obj } from "../src/mockFunction";

let spyFn;
let beforeCount = 0;
let afterCount = 0;
beforeEach(() => {
  console.log("outside beforeEach", ++beforeCount);
});
afterEach(() => {
  console.log("outside afterEach", ++afterCount);
  //spyFn.mockRestore();
  jest.restoreAllMocks();
});

describe("beforeEach와 afterEach 적용", () => {
  beforeEach(() => {
    console.log("beforeEach", ++beforeCount);
  });
  afterEach(() => {
    console.log("afterEach", ++afterCount);
    //spyFn.mockRestore();
    jest.restoreAllMocks();
  });

  test("obj.minus 함수가 한번 실행되었다.(spy함수 삽입).", () => {
    spyFn = jest.spyOn(obj, "minus");
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(-1);
  });

  test("obj.minus 함수에 스파이를 심고 원본 함수는 실행 안되게.", () => {
    spyFn = jest.spyOn(obj, "minus").mockImplementation();
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).not.toBe(-1);
  });

  test("obj.minus 함수에 스파이를 심고 리턴값을 바꾸게.", () => {
    spyFn = jest.spyOn(obj, "minus").mockImplementation(() => 5);
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(5);
  });

  test("obj.minus 함수에 스파이를 심고 스파이 함수 한번씩만 실행되게.", () => {
    spyFn = jest
      .spyOn(obj, "minus")
      .mockImplementationOnce(() => 5)
      .mockImplementationOnce((a, b) => a + b)
      .mockImplementation(() => 3);
    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(5);
    expect(result2).toBe(3);
    expect(result3).toBe(3);
  });
});
test.skip("obj.minus 함수가 한번 실행되었다.(spy함수 삽입).", () => {
  spyFn = jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});

test.skip("obj.minus 함수에 스파이를 심고 원본 함수는 실행 안되게.", () => {
  spyFn = jest.spyOn(obj, "minus").mockImplementation();
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).not.toBe(-1);
});

test.skip("obj.minus 함수에 스파이를 심고 리턴값을 바꾸게.", () => {
  spyFn = jest.spyOn(obj, "minus").mockImplementation(() => 5);
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(5);
});

test.skip("obj.minus 함수에 스파이를 심고 스파이 함수 한번씩만 실행되게.", () => {
  spyFn = jest
    .spyOn(obj, "minus")
    .mockImplementationOnce(() => 5)
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementation(() => 3);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result1).toBe(5);
  expect(result2).toBe(3);
  expect(result3).toBe(3);
});

test.skip("obj.minus 함수에 스파이를 심고 리턴값만 바꾸게.(mockImplementation의 짧은 버전)", () => {
  spyFn = jest.spyOn(obj, "minus").mockReturnValue(4);
  const result1 = obj.minus(1, 2);
  expect(result1).toBe(4);
});

test.todo("나중에 만들 테스트");

beforeAll(() => {
  console.log("이 파일에 준비사항 실행");
});
// beforeEach(() => {
//   console.log("각 테스트 전에 실행됨");
// });
// afterEach(() => {
//   console.log("각 테스트 후에 실행됨");
//   //spyFn.mockRestore();
//   jest.restoreAllMocks();
// });
afterAll(() => {
  console.log("모든 테스트가 끝난 후");
});
