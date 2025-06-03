import * as fns from "../src/asyncFunction";

test("okPromise테스트, resolves와 then사용하기 return 넣어줄 것", () => {
  //비동기 함수 테스트는 expect가 실행되지 않아도 true를 반환하기 때문에 확실히 expect가 호출되었는지를 확인하려면
  //expect.assertion(횟수)를 써준다.
  expect.assertions(1);
  const okSpy = jest.fn(fns.okPromise);
  //return expect(okSpy()).resolves.toBe("ok");
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("noPromise테스트, rejects와 catch사용하기, return 넣어줄 것", () => {
  const noSpy = jest.fn(fns.noPromise);
  return expect(noSpy()).rejects.toBe("no");
  //   return noSpy().catch((result) => {
  //     expect(result).toBe("no");
  //   });
});

test("Promise테스트에 async await 사용하기, return 불필요", async () => {
  const noSpy = jest.fn(fns.noPromise);
  try {
    const result = await noSpy();
  } catch (err) {
    expect(err).toBe("no");
  }
});

test("noPromise테스트, 원본함수 실행 막기", () => {
  jest.spyOn(fns, "noPromise").mockReturnValue(Promise.reject("no"));
  //jest.spyOn(fns, "noPromise").mockRejectedValue("no");

  return expect(fns.noPromise()).rejects.toBe("no");
});
