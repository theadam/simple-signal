export default function Signal() {
  const subscribers = [];
  return {
    on(fn) {
      subscribers.push(fn);
    },
    off(fn) {
      const index = subscribers.indexOf(fn);
      if (index > -1) {
        subscribers.splice(index, 1);
      }
    },
    emit(val) {
      for (let i = 0, len = subscribers.length; i < len; ++i) {
        subscribers[i](val);
      }
    },
  };
}
