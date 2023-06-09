const args = process.argv.slice(2);

for (const arg of args) {               //Iterate over each arg
  const number = Number(arg);           //Convert each arg to a number 

  if (!isNaN(number) && number >= 0) {   //Check for NaN
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);                   //Change milliseconds to seconds 
  }
}

