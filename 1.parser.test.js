// 测试文件默认一般以.test.js结尾 .spec.js结尾

import { parser, stringify } from './src/1.parser';

// describe 套件 => it 用例

describe('测试parser', () => {
  it('测试parser是否正常解析', () => {
    expect(parser('a=1&b=2&c=3')).toEqual({ a: "1", b: "2", c: "3" });
  })
})

describe('测试stringify', () => {
  it('测试stringify是否正常解析', () => {
    expect(stringify({ a: 1, b: 2 })).toEqual('a=1&b=2');
  })
})