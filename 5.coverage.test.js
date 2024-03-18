import { flip } from './src/5.coverage';

it('测试filp方法', () => {
  expect(flip(true)).toBe('正');
  expect(flip(false)).toBe('反');
})

// 覆盖率 是否可以覆盖整个文件