function delayedPromise(delay, val) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, delay);
  });
}

const arr = [
  delayedPromise(1000, 1),
  delayedPromise(1500, 2),
  delayedPromise(3000, 3),
  delayedPromise(1000, 4),
  delayedPromise(2500, 5),
];

Promise.all(arr)
  .then((resolved) => {
    console.log("resolved", resolved);
  })
  .catch((reject) => {
    console.log("reject", reject);
  });