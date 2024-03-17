// 匹配器一般分成3类

it('测试相等 （全等） （长得一样） 是不是真的 是不是假的', () => {
  expect(1 + 1).toBe(2);
  expect({ name: 'jenny' }).toEqual({ name: 'jenny' });
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
})

it('测试不相等 （大于 小于 小于等于 小于等于）', () => {
  expect(1 + 1).not.toBe(3);
  expect(1 + 1).toBeLessThan(3);
  expect(1 + 1).toBeGreaterThanOrEqual(0);
})

it('是否保护 是否匹配', () => {
  expect('hello').toContain('o');
  expect('hello').toMatch(/hello/)
})

// › Press f to run only failed tests.
// › Press o to only run tests related to changed files.
// › Press p to filter by a filename regex pattern.
// › Press t to filter by a test name regex pattern.
// › Press q to quit watch mode.
// › Press Enter to trigger a test run.