import React, { useState } from 'react'
import { Reveal } from '../Reveal'

function StepTag({ onStepClick, active }) {
  const steps = [
    { year: '2020', icon: 'bi-check', state: 'done' },
    { year: '2022', icon: 'bi-check', state: 'done' },
    { year: '2026', icon: 'bi-check', state: 'progress' },
    { year: 'Next', icon: 'bi-dot', state: 'goal' }
  ]

  const lineWidth = ['15%', '40%', '60%', '100%']
  function handleClick(i) {

    onStepClick(i)
  }

  return (
    <div className='d-flex w-40 ' >
      <div className='d-flex line-div my-5' 
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 2,
            top: '30%',
            width: lineWidth[active],
            height: '2px',
            background: 'linear-gradient(to right, #3b82f6, #f59e0b)',
            transition: 'all 0.7s ease',
          }} />


        <ul className='d-flex w-100 list-unstyled justify-content-around mb-0'
          style={{
            fontSize: '15px',
            zIndex: '5',
            position: 'relative'
          }} >
          {
            steps.map((step, i) => (
              <li key={i}
                onClick={() => handleClick(i)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: step.state === 'done' ? '#3b82f6' : '#121c35',
                    border: step.state === 'goal'
                      ? '2px dashed #f59f0b'
                      : `2px solid ${step.state === 'done' ? '#3b82f6' : '#f59f0b'}`,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    color: step.state === 'done' ? ' #fff' : '#f59f0b ',
                    fontSize: step.icon === 'bi-check' ? '24px' : '16px',
                    boxShadow: active === i ? '0 0 16px #3b82f680' : 'none',
                    transition: ' all 0.5s ease'
                  }}> <i className={`bi ${step.icon}`}
                    style={
                      {
                        animation: step.state === 'goal' ? 'zoom 2s infinite ease-out ' : 'none',
                      }
                    }></i>
                </div>
                <span style={{
                  fontSize: '10px', fontWeight: 600,
                  color: step.state === 'done' ? '#3b82f6' : '#f59f0b',
                  transition: 'color 0.3s ease',
                }}>
                  {step.year}
                </span>
              </li>

            ))
          }
        </ul>

      </div >
    </div >
  )
}


function EducationTag({ educations }) {

  return (
    <div className='status-tag  my-5  ' style={{
      border: `1px solid ${educations.status === 'Completed' ? '#3b83f62b' : '#f59f0b2b'}`,
      background: `${educations.status === 'Completed' ? '#0d1f3c78' : '#58411b44'}`,
      borderRadius: '20px',
      margin: '5px',
      animation: 'fadin  0.1s ease'

    }} >
      <div className='p-3 row'> 
        <div className='col-lg-8 col-10'>
          <small className=''
            style={{
              color: ` ${educations.status === 'Completed' ? '#3b83f6' : '#f59f0b'}`,
              fontSize: '10px',
              fontFamily: 'Arial',
              letterSpacing: '2px',
              animation: 'zoom 0.1s ease',
            }}>{
              educations.status=== 'Completed'? <i className="bi bi-check2"></i>:<i className="bi bi-arrow-clockwise"></i>
            }{educations.status.toUpperCase()}</small>
          <h4 style={{
            fontWeight: 'bold',
            padding: '10px 0',

          }}>{educations.class}</h4>
          <p
            style={
              {
                color: '#64748b',
                fontSize: '12px',


              }
            }>{educations.university}</p></div>
        <div className='col-lg-3 col-10'>
          <div style={{
            border: `1px solid ${educations.status === 'Completed' ? '#3b82f62b' : '#f59e0b2b'}`,
            background: educations.status === 'Completed' ? '#0d347438' : '#58411b38',
            borderRadius: '10px',
            color: educations.status === 'Completed' ? '#3b82f6' : '#f59e0b',
            padding: '10px',
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '2px',
            textAlign: 'center',
          }}>
            {educations.percentage}
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0, marginTop: '5px' }}>
              {educations.percentage === 'Goal' ? 'Next' : 'Score'}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export function Education() {
  const education = [
    { class: '10th Standard', university: 'State Board', status:'Completed', percentage: '60%', year: '2020' },
    { class: '12th Standard', university: 'State Board', status: 'Completed', percentage: '63%', year: '2022' },
    { class: 'B.Tech Artificial Intelligence and Data Science', university: 'Anna University, Chennai', status: 'In-Progress', percentage: 'CGPA 7.35', year: '2026' },
    { class: 'FullStack Developer', university: 'Self-Driven', status: 'In-Progress', percentage: 'Goal' },
  ]


  // const collection = ['10th Standard', '12th Standard', 'B.Tech Artificial Intelligence and Data Science', 'FullStack Developer']
  const [active, setActive] = useState(0)
  // const filtered = education.filter(s => s.class === active)

  return (
   <div id='education'>
      <div>
        <p className='text-primary text-center'
          style={{
            letterSpacing: '2px',
            paddingTop: '15px',
          }}
        >MY JOURNEY</p>
        <h2 className='edu-title'>Education</h2>
      </div>

      <StepTag onStepClick={(i) => setActive(i)} active={active} />
      <div className='d-flex align-items-center justify-content-center' key={active}>
        <EducationTag educations={education[active]} />
      </div>


      <div className='d-flex flex-wrap gap-4' >
        {
          education.map((cat, i) => (
            <p className=' d-flex ' onClick={() => (setActive(i))} key={i}
              active={active}
              style={{
                color: active=== i ? '#3b82f6' : '#94a3b8',
                fontSize: '12px',
                outline: 'none',
                cursor: 'pointer',

                fontWeight: active === i ? '600' : '400'
              }}
            >{cat.class}</p>
          ))
        }

      </div>



    </div>

  )
}
