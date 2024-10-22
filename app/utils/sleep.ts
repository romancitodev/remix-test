/*
  * `time` is the seconds
*/
export const sleep = (time: number) => new Promise<never>(r => setTimeout(r, time * 1000));
