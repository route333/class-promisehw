function randomDelay(val) {
  const del = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, del);
  });
}

const arr = [
  randomDelay(1),
  randomDelay(2),
  randomDelay(3),
  randomDelay(4),
  randomDelay(5),
];

Promise.race(arr)
  .then((resolved) => {
    console.log("fast&furious ", resolved);
  })
  .catch((rejected) => {
    console.log("lose ", rejected);
  });
