export const CHANGE_WINDOW_SIZE = 'CHANGE_WINDOW_SIZE'
export const CHANGE_LOCATION_ORIGIN = 'CHANGE_LOCATION_ORIGIN'

export const changeWindowSize = () => {
  return {
    type: CHANGE_WINDOW_SIZE,
    size: {
      windowInnerHeight: window.innerHeight,
      windowInnerWidth: window.innerWidth
    }
  }
}

export const changeLocationOrigin = () => ({ type: CHANGE_LOCATION_ORIGIN, origin: window.location.origin })
