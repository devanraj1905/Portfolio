import React, { useState } from 'react'
function EducationTag({ educations }) {

    return (
        <div style={{
            border: `1px solid ${educations.status === 'Completed' ? '#3b83f62b' : '#f59f0b2b'}`,
            background: `${educations.status === 'Completed' ? '#0d1f3c78' : '#58411b44'}`,
            borderRadius: '20px',
            width: '600px',
            margin:'5px',
            animation:'fadin  0.1s ease',
            
        }} >
            <div className='p-3 row'>
                <div className='col-9'> 
                    <small className=''
                    style={{
                        color: ` ${educations.status === 'Completed' ? '#3b83f6' : '#f59f0b'}`,
                        fontSize: '10px',
                        fontFamily: 'Arial',
                        letterSpacing: '2px',
                         animation:'zoom 0.1s ease',
                    }}>{educations.status.toUpperCase()}</small>
                    <h4 style={{
                        fontWeight:'bold',
                        padding:'10px 0', 
                        animation:'zoom  0.1s ease',
                    }}>{educations.class}</h4>
                    <p
                        style={
                            {
                                color: '#64748b',
                                fontSize: '12px', 
                                animation:'zoom  0.1s ease',

                            }
                        }>{educations.university}</p></div>
                <div className='col-3'>
                    <button className=''
                    style={
                        { 
                                        border: `1px solid ${educations.status === 'Completed' ? '#3b83f62b' : '#f59f0b2b'}`,
            background: `${educations.status === 'Completed' ? '#0d347438' : '#58411b38'}`,
            borderRadius: '10px',
              color: ` ${educations.status === 'Completed' ? '#3b83f6' : '#f59f0b'}`,
            padding:'10px',
            animation:'fadin  0.1s ease',
            fontSize:'20px',
            fontWeight:'500',
            letterSpacing:'2px',

                        }
                    }>{educations.percentage}
                    {
                        educations.percentage=== 'Goal'?<p style={{
                            fontSize:'14px',
                            letterSpacing:'2px',
                            padding:'0px 20px',
                            paddingTop:'5px',
                            color:'#64748b',

                        }}>Next</p>:<p style={{
                            fontSize:'14px',
                            letterSpacing:'2px',
                            padding:'0px 20px',
                            paddingTop:'5px',
                            color:'#64748b',

                        }}>Score</p>
                    }
                    
                    </button>
                </div>
            </div>
        </div>

    )
}

export function Ed() {
    const education = [
        { class: '10th Standard', university: 'State Board', status: 'Completed', percentage: '60%', year: '2020' },
        { class: '12th Standard', university: 'State Board', status: 'Completed', percentage: '63%', year: '2022' },
        { class: 'B.Tech Artificial Intelligence and Data Science', university: 'Anna University,Chennai', status: 'In-Progress', percentage: 'CGPA 7.35', year: '2026' },
        { class: 'FullStack Developer', university: 'Self-Driven', status: 'In-Progress', percentage: 'Goal' },
    ]
    const collection = ['10th Standard', '12th Standard', 'B.Tech Artificial Intelligence and Data Science', 'FullStack Developer']
    const [active, setActive] = useState('10th Standard')
    const filtered = education.filter(s => s.class === active)

    return (
        <div id='education'>
            <div>
                <p className='text-primary text-center'
                style={{
                    letterSpacing:'2px',
                    paddingTop:'15px',
                }}
                >MY JOURNEY</p>
                <h2>Education</h2>
            </div>
            <div className='d-flex gap-3' >
                {
                    collection.map((cat) => (
                        <p className=' bg-none ' onClick={() => (setActive(cat))} key={cat}
                            style={{
                                color: active === cat ? '#3b82f6' : '#64748b',
                                fontSize:'12px',
                                outline:'none',
                                cursor:'pointer',
                                fontWeight:'600'
                            }}
                        >{cat}</p>
                    ))
                }

            </div>
            <div className=''

            >
                {
                    filtered.map((edn) => (
                        <EducationTag key={edn.class} educations={edn} />
                    ))
                }
            </div>

        </div>
    )
}

