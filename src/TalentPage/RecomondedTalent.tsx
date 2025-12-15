import React from 'react'
import { talents } from '../../public/Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const RecomondedTalent = () => {
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>
        Recommended Talent
      </div>
      <div>
      {talents.map((talent,index)=>{
        return <TalentCard key={index} talent={talent} />
      })}
      </div>
    </div>
  )
}

export default RecomondedTalent
