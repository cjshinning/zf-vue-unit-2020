// jest.mock('./src/6.axios'); //替换整个文件
import { fetchData, sum } from './src/6.axios';
// let { sum } = jest.requireActual('./src/6.axios');


it('测试能否正常获取用户数据', async () => {
  let r = await fetchData();
  expect(r).toEqual(['张三', '李四']);
})

it('测试求和', async () => {
  expect(sum(1, 1)).toBe(2);
})