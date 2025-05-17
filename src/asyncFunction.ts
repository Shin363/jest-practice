//일반함수인데 리턴값이 프로미스
export function okPromise() {
  return Promise.resolve("ok");
}
export function noPromise() {
  return Promise.reject("no");
}
// 비동기 함수= 리턴값에 자동으로 promise가 씌어진다.
export async function okAsync() {
  return "ok";
}
export async function noAsync() {
  throw "no";
}
