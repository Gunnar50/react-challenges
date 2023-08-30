import React from 'react'
import ReactDOM from 'react-dom/client'
import Rating from "./challenges/interactive-rating-component-main/rating-component.tsx"
import PinPadComponent from './challenges/pin-pad/pin-pad-component.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Rating /> */}
    <PinPadComponent/>
  </React.StrictMode>,
)
