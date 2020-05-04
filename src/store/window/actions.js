export const CHANGE_WINDOW_SIZE = 'CHANGE_WINDOW_SIZE'

export const changeWindowSize = () => {
  return {
    type: CHANGE_WINDOW_SIZE,
    size: {
      windowInnerHeight: window.innerHeight,
      windowInnerWidth: window.innerWidth
    }
  }
}
