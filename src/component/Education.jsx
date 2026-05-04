// import React from 'react'

// export function Education() {
//     return (
//         // <div className='d-flex align-items-center mx-auto vh-100'>
//         //     <div className='container'>
//         //         <h1>Education</h1>
//         //         <div className=''>
//         //             <p className='btn btn-info'>2022 - 2026</p>
//         //             <div className='btn border-dark'>
//         //                 <h3>B.Tech Artificial Intelligence and Data Science</h3>
//         //                 <p className='text-start'>Gnanamani College of Technology,Namakkal</p>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//     )
// }


import React, { useEffect, useRef, useState } from 'react'

const steps = [
  {
    year: '2019',
    title: '10th Standard',
    school: 'State Board',
    grade: '85%',
    status: 'done',
    color: '#3b82f6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    year: '2021',
    title: '12th Standard',
    school: 'State Board',
    grade: '89%',
    status: 'done',
    color: '#3b82f6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    year: '2024',
    title: 'B.E. Computer Science',
    school: 'Anna University · Chennai',
    grade: 'CGPA 8.2',
    status: 'done',
    color: '#3b82f6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    year: 'Next',
    title: 'Full Stack Developer',
    school: 'Self-driven · In Progress',
    grade: 'Goal',
    status: 'upcoming',
    color: '#f59e0b',
    icon: null,
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function StepNode({ step, index, active, onClick }) {
  const isDone = step.status === 'done'
  const isUpcoming = step.status === 'upcoming'
  const isActive = active === index

  return (
    <div
      onClick={() => onClick(index)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        flex: 1,
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Circle */}
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: isDone ? step.color : 'transparent',
        border: isUpcoming
          ? `2px dashed ${step.color}`
          : `2px solid ${isActive ? step.color : step.color + '60'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        boxShadow: isActive ? `0 0 20px ${step.color}50` : 'none',
        flexShrink: 0,
      }}>
        {isDone ? (
          <CheckIcon />
        ) : (
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: step.color,
            animation: 'pulse 2s infinite',
          }} />
        )}
      </div>

      {/* Year badge */}
      <div style={{
        fontSize: '11px',
        fontWeight: 600,
        color: step.color,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: '1px',
      }}>
        {step.year}
      </div>
    </div>
  )
}

export function Education() {
  const [active, setActive] = useState(2)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const current = steps[active]

  return (
    <section
      id='education'
      ref={ref}
      style={{
        padding: '80px 0',
        background: 'linear-gradient(160deg, #0a1628 0%, #020617 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .detail-card {
          animation: fadeUp 0.35s ease forwards;
        }
      `}</style>

      {/* Ambient orb */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div className='text-center mb-5'>
          <p style={{
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '4px', textTransform: 'uppercase',
            color: '#3b82f6', marginBottom: '12px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            My Journey
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700,
            color: '#ffffff', display: 'inline-block',
            position: 'relative', marginBottom: '12px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Education
            <span style={{
              position: 'absolute', bottom: '-8px',
              left: '50%', transform: 'translateX(-50%)',
              width: '50px', height: '3px',
              background: '#3b82f6', borderRadius: '2px', display: 'block',
            }} />
          </h2>
        </div>

        {/* Stepper */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease',
        }}>

          {/* Step nodes + connecting line */}
          <div style={{ position: 'relative', padding: '0 20px', marginBottom: '40px' }}>

            {/* Progress line */}
            <div style={{
              position: 'absolute',
              top: '22px',
              left: 'calc(20px + 22px)',
              right: 'calc(20px + 22px)',
              height: '2px',
              background: '#1e293b',
              zIndex: 0,
            }}>
              {/* Filled portion */}
              <div style={{
                height: '100%',
                width: visible ? `${(active / (steps.length - 1)) * 100}%` : '0%',
                background: 'linear-gradient(to right, #3b82f6, #f59e0b)',
                borderRadius: '2px',
                transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1)',
              }} />
            </div>

            {/* Step nodes */}
            <div style={{ display: 'flex', position: 'relative' }}>
              {steps.map((step, i) => (
                <StepNode
                  key={i}
                  step={step}
                  index={i}
                  active={active}
                  onClick={setActive}
                />
              ))}
            </div>
          </div>

          {/* Detail card */}
          <div
            key={active}
            className='detail-card'
            style={{
              background: `rgba(${current.color === '#3b82f6' ? '59,130,246' : '245,158,11'}, 0.06)`,
              border: `1px solid ${current.color}25`,
              borderRadius: '16px',
              padding: '28px 32px',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner glow */}
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: '120px', height: '120px', borderRadius: '50%',
              background: `radial-gradient(circle, ${current.color}20 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                {/* Status */}
                <span style={{
                  fontSize: '10px', fontWeight: 600,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: current.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {current.status === 'done' ? '✓ Completed' : '⟳ In Progress'}
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 700, color: '#ffffff',
                  margin: '8px 0 4px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {current.title}
                </h3>

                {/* School */}
                <p style={{
                  fontSize: '14px', color: '#64748b',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  margin: 0,
                }}>
                  {current.school}
                </p>
              </div>

              {/* Grade badge */}
              <div style={{
                background: `${current.color}15`,
                border: `1px solid ${current.color}30`,
                borderRadius: '12px',
                padding: '12px 20px',
                textAlign: 'center',
                flexShrink: 0,
              }}>
                <div style={{
                  fontSize: '22px', fontWeight: 700,
                  color: current.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: 1,
                }}>
                  {current.grade}
                </div>
                <div style={{
                  fontSize: '10px', color: '#475569',
                  marginTop: '4px', letterSpacing: '1px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {current.status === 'done' ? 'Score' : 'Target'}
                </div>
              </div>
            </div>

            {/* Navigation hint */}
            <p style={{
              fontSize: '11px', color: '#334155',
              marginTop: '20px', marginBottom: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '0.5px',
            }}>
              Click any step above to view details
            </p>
          </div>

          {/* Step labels row (visible on mobile) */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '16px',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '11px',
                  color: active === i ? step.color : '#334155',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: active === i ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  padding: '4px 8px',
                }}
              >
                {step.title}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}