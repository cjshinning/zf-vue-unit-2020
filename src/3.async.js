// 异步代码

const getDataByCallback = (cb) => {
  // setTimeout(() => {
  setInterval(() => {
    cb({ name: 'jenny' });
  }, 1000000)
}

const getDataByPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'jenny'
      })
    }, 3000)
  })
}

export {
  getDataByCallback,
  getDataByPromise
}