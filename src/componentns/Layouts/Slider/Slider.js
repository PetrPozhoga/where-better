import React, { useState, useEffect } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider"
import SliderRail from './SliderRail/SliderRail'
import Handle from "./Handle/Handle"
import Track from './Track/Track'
import styles from './Slider.module.scss'

const CustomSlider = ({ domain, defaultValues, titleValue }) => {
  const [ value, setValue ] = useState(defaultValues.slice())

  useEffect(() => {

  })

  const onUpdate = (event) => {
    setValue(event)
  }

  return (
    <div style={ { height: '43px', width: "100%" } }>
      <div className={ styles.valueContainer }>
        <div>
          { value[ 0 ] } { titleValue }
        </div>
        <div>
          { value[ 1 ] } { titleValue }
        </div>
      </div>
      <Slider
        mode={ 2 }
        step={ 1 }
        domain={ domain }
        rootStyle={ {
          position: "relative",
          width: "100%"
        } }
        onUpdate={ onUpdate }
        onChange={ onUpdate }
        values={ defaultValues }
      >
        <Rail>
          { ({ getRailProps }) => <SliderRail getRailProps={ getRailProps }/> }
        </Rail>
        <Handles>
          { ({ handles, getHandleProps }) => (
            <div className="slider-handles">
              { handles.map(handle => (
                <Handle
                  key={ handle.id }
                  handle={ handle }
                  domain={ domain }
                  getHandleProps={ getHandleProps }
                />
              )) }
            </div>
          ) }
        </Handles>
        <Tracks left={ false } right={ false }>
          { ({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              { tracks.map(({ id, source, target }) => (
                <Track
                  key={ id }
                  source={ source }
                  target={ target }
                  getTrackProps={ getTrackProps }
                />
              )) }
            </div>
          ) }
        </Tracks>
        { ({ ticks }) => (
          <div className="slider-ticks">
            { ticks.map(tick => (
              { tick }
            )) }
          </div>
        ) }
        {/* <Ticks count={5}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks> */ }
      </Slider>
    </div>
  )
}

export default CustomSlider
