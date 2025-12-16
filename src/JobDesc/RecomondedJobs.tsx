import React from 'react'
import{ jobList as Jobs } from '../../public/Data/JobsData'
import JobsCard, { type Job } from '../FindJobs/JobsCard'

const RecomondedJobs = () => {
  return (
   <div>
      <div className='text-xl font-semibold mb-5'>
        Recommended Talent
      </div>
      <div className='flex flex-col flex-wrap gap-3'>
      {Jobs.map((job: Job, index: number)=>{
        return <JobsCard key={index} job={job} />
      })}
      </div>
    </div>
  )
}

export default RecomondedJobs
