let times = process.argv.slice(2);
times.forEach(time => setTimeout(() => process.stdout.write('\x07'), time * 1000));