const sentence = "|/-\\|/-\\|"
let time = 0;
let delay = 50;

const spinner2 = function(string) {
  for (let char of string) {
    setTimeout(() => {
      process.stdout.write('\r');
      process.stdout.write(char);
    }, time);
    time += delay;
  };
  setTimeout(() => {
    process.stdout.write('\n');
  }, time);
}

spinner2(sentence);
