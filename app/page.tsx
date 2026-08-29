import React from 'react'
import Missomark from '../section/missomark'
import Missoglobal from '../section/missoglobal'
import Missoglance from '../section/missoglance'
import MissoFeatures from '../section/missoFeatures'
import Missovideogallery from '../section/missovideogallery'
import Missoresources from '../section/missoresources'
import Missobooknow from '../section/missobooknow'
import Missowelslice from '../section/missowelslice'
import Missocontactform from '../section/missocontactform'
import Missomap from '../section/missomap'
import Missofooter from '../component/missofooter'
import Missokey from '../section/missokey'
import MissoCelebration from '../section/missoCelebration'
import Missopopvideo from '../section/missopopvideo'
import Missonav from '../component/missonav'


const page = () => {
  return (
    <div>
      <MissoCelebration/>
      <Missonav/>
      <Missomark/>
      <Missoglobal/>
      <Missoglance/>
      <Missokey/>
    <MissoFeatures/>      
      <Missovideogallery/>
      <Missoresources/>
      <Missobooknow/>
      <Missowelslice/>
      <Missocontactform/> 
      <Missomap/>
      <Missofooter/>
      {/* <Missopopvideo/> */}
    </div>
  )
}

export default page