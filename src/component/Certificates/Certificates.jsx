import React from 'react'

const certificateList = [
  {
    name: '정보처리기사',
    date: '2024.09',
  },
  {
    name: 'sqld',
    date: '2023.11',
  },

]

const Certificates = () => {
  return (
    <div>
      <div>Certificates</div>
      {
        certificateList.map((item)=>(
          <div>
          <div>{item.name}</div>
          <div>{item.date}</div>
          </div>
        ))
      }
    </div>

  )
}

export default Certificates