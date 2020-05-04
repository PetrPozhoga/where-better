import React from 'react'

export default function Handle({ domain: [ min, max ], handle: { id, value, percent }, disabled, getHandleProps }) {
  return (
    <>
      <div
        style={ {
          left: `${ percent }%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 28,
          height: 42,
          cursor: "pointer",
          backgroundColor: "none"
        } }
        { ...getHandleProps(id) }
      />
      <div
        role="slider"
        aria-valuemin={ min }
        aria-valuemax={ max }
        aria-valuenow={ value }
        style={ {
          left: `${ percent }%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: disabled ? "#4EBF7B" : "#4EBF7B"
        } }
      />
    </>
  )
}
