// export function debounce<T extends Function>(cb: T, wait = 500) {
//   let h: NodeJS.Timeout = <any>0;
//   let callable = (...args: any) => {
//     clearTimeout(h);
//     h = setTimeout(() => cb(...args), wait);
//   };
//   return <T>(<any>callable);
// }

export const debounce = <T extends Function>(cb: T, wait = 500) => {
  let h: any = 0;

  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };

  return <T>(<any>callable);
};
