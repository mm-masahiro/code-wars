// my solution
// 流石にリファクタしたい
// export function humanReadable(seconds:number):string {
//   let rest = seconds;
//   let showHour = ''
//   let showMinute = ''
//   let showSeconds = ''

//   const hour = Math.floor(rest / 3600);
//   rest = seconds - (hour * 3600)
  
//   const minute = Math.floor(rest / 60);
//   rest = rest - (minute * 60)

//   // この辺キモすぎる
//   if (hour === 0) {
//     showHour = '00';
//   } else if (hour < 10) {
//     showHour = '0' + hour;
//   } else {
//     showHour = hour.toString();
//   }
    
//   if (minute === 0) {
//     showMinute = '00';
//   } else if (minute < 10) {
//     showMinute = '0' + minute;
//   } else {
//     showMinute = minute.toString();
//   }
    
//   if (rest === 0) {
//     showSeconds = '00';
//   } else if (rest < 10) {
//     showSeconds = '0' + rest;
//   } else {
//     showSeconds = rest.toString();
//   }

//   const result = showHour + ':' + showMinute + ':' + showSeconds
// 	  return result
// }

// best practice
export function humanReadable(seconds:number):string {
  const minutes = Math.floor(seconds / 60)

  const onlySeconds = seconds % 60
  const onlyMinutes = minutes % 60
  const onlyHours = Math.floor(minutes / 60)
  
  return [onlyHours, onlyMinutes, onlySeconds].map(formatTime).join(':')
}

const formatTime = (time: number) :string => time >= 10 ? time.toString() : `0${time}`
