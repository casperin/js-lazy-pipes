function* gen() {
  let n = 0;

  while (true) {
    yield n;
    n++;
  }
}

const toArray = it => [...it];

const map = fn => function* map(it) {
  for (const item of it) {
    yield fn(item);
  }
};

const filter = fn => function* filter(it) {
  for (const item of it) {
    if (fn(item)) yield item;
  }
};

const take = count => function* take(it) {
  for (const item of it) {
    if (count-- <= 0) return;
    yield item;
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(toArray(take(10)(filter(x => x.num > 3)(map(x => ({
  num: x,
  name: x % 2 === 0 ? 'Alice' : 'Bob'
}))(gen())))));
