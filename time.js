function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
  
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const time = hours + 'h ' + minutes + 'm ' + seconds +'s'
    return time;
  }
  

// { h: 0, m: 16, s: 40 }
console.log(toHoursAndMinutes(1000));

// { h: 1, m: 10, s: 50 }
console.log(toHoursAndMinutes(4250));