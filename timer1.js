const args = process.argv.slice(2);

for (const arg of args) {
  const number = Number(arg);

  if (!isNaN(number) && number >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
}

