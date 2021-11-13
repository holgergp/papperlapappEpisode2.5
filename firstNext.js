import { log } from "./log.js";

export function* genFnFactory() {
  log("inside genFnFactory");
  const first = yield "1";
  log("after first yield: ", first);
  const second = yield first;
  log("after second yield ", second);
  const third = yield second;
  log("after third yield ", third);
  yield third
}


var iter = genFnFactory();
log(iter.next(3)); // {value: '1', done: false}
log(iter.next(8)); // {value: 8, done: false}
log(iter.next(1)); // {value: 1, done: false}
