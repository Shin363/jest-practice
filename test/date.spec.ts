import { after3days } from "../src/date";

test("3일 후를 리턴한다.", () => {
  jest.useFakeTimers().setSystemTime(new Date(2010, 6, 3));
  console.log(new Date());
  expect(after3days()).toStrictEqual(new Date(2010, 6, 6));
});

test("0.1더하기 0.2는 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
  //부동소수점 이슈로 같지 않음
});
afterEach(() => {
  jest.useRealTimers();
});
