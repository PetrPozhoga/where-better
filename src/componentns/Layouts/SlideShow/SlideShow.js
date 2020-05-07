import React, { useState, useEffect } from 'react'
import styles from './SlideShow.module.scss'

const SlideShow = ({ children = [], showElements, animationTime = 300, classNameContainer, slideHeight, idRoot, paddingLeft, paddingRight, marginRight, windowInnerWidth }) => {

  const [ rootElement, setRootElement ] = useState({})
  const [ wrapElement, setWrapElement ] = useState({})
  const [ containerElement, setContainerElement ] = useState({})
  const [ copyChildren, setCopyChildren ] = useState([])
  const [ slideOption, setSlideOption ] = useState({
    totalSlide: children.length,
    currentIndex: 0,
    currentElementIndex: 0
  })
  const [ slideIsOver, setSlideIsOver ] = useState(false)

  useEffect(() => {
    setRootElement(document.getElementById(styles.root + idRoot))
  }, [ rootElement ])

  useEffect(() => {
    setWrapElement(document.querySelector('.' + classNameContainer))
  }, [ wrapElement ])

  useEffect(() => {
    let container = document.querySelector('.' + styles.container + classNameContainer)
    setContainerElement(container)
    container.style.transition = 'left ease ' + animationTime + 'ms'
    let slideItem = document.querySelectorAll('.' + styles.container + classNameContainer + '>div')
    slideItem.forEach((item, index) => {
      item.style.width = ((wrapElement.offsetWidth - ((showElements - 1) * (marginRight || 0))) / (showElements)) + 'px'
      item.style.marginRight = (marginRight || 0) + 'px'
    })

  }, [ containerElement, windowInnerWidth ])

  useEffect(() => {
    document.querySelector('.' + styles.container + classNameContainer).style.marginLeft = (slideOption.currentIndex * (wrapElement.offsetWidth / showElements) + 'px')
  }, [windowInnerWidth])

  useEffect(() => {
    setCopyChildren(children.slice())
  }, [ children ])

  const changeSlide = slide => {
    if (slideIsOver) return false
    else {
      setSlideIsOver(true)
      let newChildrenArr = []
      let currentIndex = slideOption.currentIndex + (slide)
      let currentElementIndex = slideOption.currentElementIndex + (slide)
      currentElementIndex = currentElementIndex < 0 ? copyChildren.length - 1 : currentElementIndex > (copyChildren.length - 1) ? 0 : currentElementIndex

      if (slide === 1) {
        let firstChild = copyChildren[ 0 ]
        newChildrenArr = [ ...copyChildren.slice(1, copyChildren.length), firstChild ]
      }
      else {
        let lastChild = copyChildren[ copyChildren.length - 1 ]
        newChildrenArr = [ lastChild, ...copyChildren.slice(0, copyChildren.length - 1) ]
      }

      setSlideOption({ ...slideOption, currentIndex, currentElementIndex })

      setTimeout(() => {
        setCopyChildren(newChildrenArr)
        document.querySelector('.' + styles.container + classNameContainer).style.marginLeft = (currentIndex * (wrapElement.offsetWidth / showElements) + 'px')
      }, slide === 1 ? animationTime : 0)

      setTimeout(() => {
        setSlideIsOver(false)
      }, animationTime)
    }
  }

  const setCurrentSlide = index => {
    if (slideOption.currentElementIndex === index) return
    else {
      let container = document.querySelector('.' + styles.container + classNameContainer)
      container.style.transition = 'none'
      let currentIndex = index - slideOption.currentElementIndex

      let newChildrenArr = []
      if (currentIndex >= 1) {
        let firstChild = copyChildren.slice(0, Math.abs(currentIndex))
        console.log(firstChild)
        newChildrenArr = [ ...copyChildren.slice(Math.abs(currentIndex), copyChildren.length), ...firstChild ]
      }
      else {
        let lastChild = copyChildren.slice(copyChildren.length - Math.abs(currentIndex), copyChildren.length)
        copyChildren.splice(copyChildren.length - Math.abs(currentIndex), lastChild.length)
        newChildrenArr = [ ...lastChild, ...copyChildren ]
      }


      setSlideOption({
        ...slideOption,
        currentIndex: slideOption.currentIndex + (currentIndex),
        currentElementIndex: index
      })

      setCopyChildren(newChildrenArr)
      container.style.marginLeft = ((slideOption.currentIndex + (currentIndex)) * (wrapElement.offsetWidth / showElements) + 'px')

      setTimeout(() => container.style.transition = 'left ease ' + animationTime + 'ms', animationTime)
    }
  }

  return (
    <div className={ styles.root } id={ styles.root + idRoot }>
      <div style={ { height: slideHeight, position: 'relative' } }>
        <div
          style={ {
            width: rootElement.offsetWidth - (paddingLeft || 0) - (paddingRight || 0) + 'px'
          } }
          className={ styles.wrapp + ' ' + classNameContainer }>
          <div className={ styles.container + ' ' + styles.container + classNameContainer }
               style={ {
                 left: -(slideOption.currentIndex * (wrapElement.offsetWidth / showElements)) + 'px',
                 width: wrapElement &&
                   (
                     (wrapElement.offsetWidth + ((marginRight || 0) * (showElements - 1)))
                     / showElements)
                   * copyChildren.length + 'px'
               } }>
            { copyChildren.map(item => item) }
          </div>
        </div>
        <div className={ styles.arrowControl }>
          <svg onClick={ changeSlide.bind(null, 1) } width="50" height="50" viewBox="0 0 50 50" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#4D3E3D" fillOpacity="0.5"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M31.0722 36.7022L27.9061 39.8683L12.8904 24.8526L27.9061 9.83691L31.0722 13.003L19.2226 24.8526L31.0722 36.7022Z"
                  fill="white"/>
          </svg>

          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               onClick={ changeSlide.bind(null, 1) }>
            <circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="#4D3E3D" fillOpacity="0.5"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M18.9277 36.7022L22.0938 39.8683L37.1096 24.8526L22.0938 9.83691L18.9277 13.003L30.7773 24.8526L18.9277 36.7022Z"
                  fill="white"/>
          </svg>
        </div>
      </div>
      <div className={ styles.circleControl }>
        { copyChildren.map((item, key) =>
          <div key={ key + item }
               onClick={ setCurrentSlide.bind(null, key) }
               className={ slideOption.currentElementIndex === key ? styles.activeCircle : '' }/>
        ) }
      </div>
    </div>
  )
}

export default SlideShow
