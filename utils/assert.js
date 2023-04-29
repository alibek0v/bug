export default function assert(condition, msg = "assert failed!") {
  if (!condition) {
    throw new Error(msg);
  }
}
