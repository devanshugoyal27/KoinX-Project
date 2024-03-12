import React from 'react'
import Performance from './Performance'
import Sentiments from './Sentiments'
import About from './About'
import Toknomics from './Toknomics'
import Team from './Team'

const Overview = () => {
  return (
    <div>
      <Performance/>
      <Sentiments/>
      <About/>
      <Toknomics/>
      <Team/>
    </div>
  )
}

export default Overview
