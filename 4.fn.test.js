import { map } from './src/4.fn';

it('测试map方法', () => {
  let fn = jest.fn(); //模拟函数 可以记录被执行的过程
  map([1, 2, 3], fn);
  // console.log(fn.mock);
  expect(fn.mock.calls.length).toBe(3);
  expect(fn.mock.calls[0][0]).toBe(1);
  expect(fn.mock.calls[0][1]).toBe(0);

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(3);
})

// {
//   calls: [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ] ],
//   instances: [ undefined, undefined, undefined ],
//   invocationCallOrder: [ 1, 2, 3 ],
//   results: [
//     { type: 'return', value: undefined },
//     { type: 'return', value: undefined },
//     { type: 'return', value: undefined }
//   ]
// }