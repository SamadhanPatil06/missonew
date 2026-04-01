import React from 'react'
import Missomark from '../component/missomark'
import Missoglobal from '../component/missoglobal'
import Missoglance from '../component/missoglance'
import MissoFeatures from '../component/missoFeatures'
import Missovideogallery from '../component/missovideogallery'
import Missoresources from '../component/missoresources'
import Missobooknow from '../component/missobooknow'
import Missowelslice from '../component/missowelslice'
import Missocontactform from '../component/missocontactform'
import Missomap from '../component/missomap'
import Missofooter from '../component/missofooter'
import Missokey from '../component/missokey'
import MissoCelebration from '../component/missoCelebration'
import Missopopvideo from '../component/missopopvideo'
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
      <Missopopvideo/>
    </div>
  )
}

export default page