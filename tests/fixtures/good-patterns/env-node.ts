/**
 * https://stackoverflow.com/q/64089216/1123955
 */
const timer: NodeJS.Timeout = setTimeout(
  () => { console.info('timeout') },
  100,
)
clearTimeout(timer)
