
// --watchAll = 监控全部 w
// --watch = o 只监控变化的文件

import { getDataByCallback, getDataByPromise } from './src/3.async';

it('测试回调函数获取数据', (done) => {
  // 默认不会等待异步结束后再测试
  // 对时间进行mock
  // jest默认具备mock的能力
  jest.useFakeTimers(done); //使用假的定时器

  getDataByCallback((data) => {
    expect(data).toEqual({ name: 'jenny' });
    done();
  })
  // jest.runAllTimers();  //运行所有的定时器
  // jest.runOnlyPendingTimers();  //只允许当前等待队列的一个
  // jest.advanceTimersByTime(1001000);
});

it('测试promise获取数据', async () => {
  let data = await getDataByPromise();
  expect(data).toEqual({ name: 'jenny' });
})