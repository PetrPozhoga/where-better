import React from 'react'

export default function SliderRail({ getRailProps }) {
  const railInnerStyle = {
    position: "absolute",
    width: "100%",
    height: 1,
    transform: "translate(0%, -50%)",
    borderRadius: 7,
    pointerEvents: "none",
    backgroundColor: "#A4A4A4"
  }

  return (
    <>
      <div {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  )
}
