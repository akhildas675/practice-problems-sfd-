let count = 1;

const interval = setInterval(() => {
  console.log(count);
  count++;

  // stop if you want limit
  // if (count > 10) clearInterval(interval);
}, 1000);
