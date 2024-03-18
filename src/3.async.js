// 异步代码

const getDataByCallback = (cb) => {
  setTimeout(() => {
    // setInterval(() => {
    cb({ name: 'jenny' });
  }, 1000)
}

const getDataByPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'jenny'
      })
    }, 1000)
  })
}

export {
  getDataByCallback,
  getDataByPromise
}