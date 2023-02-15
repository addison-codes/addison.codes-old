import React from 'react'

type Props = {}

function BackgroundEffect({}: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute border-4 rounded-full animate-ping border-accent h-96 w-96 mt-52"></div>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default BackgroundEffect
