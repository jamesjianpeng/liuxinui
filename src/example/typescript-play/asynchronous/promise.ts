new Promise<string>((resolve, reject): void => {
  console.log('===')
  setTimeout(function() {
    resolve('000')
  }, 200)
}).then((res: string) => {
  ((r: string): void => {
    console.log(r)
  })(res)
})
