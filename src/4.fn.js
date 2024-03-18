
// 测试map 看是否能每次循环时将数组中的每一项传递过来，请求将索引页传递过来
export const map = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}
