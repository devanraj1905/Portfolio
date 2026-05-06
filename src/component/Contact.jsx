import React from 'react'

export function Contact() {
  const details=[
    {
      media:'Email',link:'devanraj167@gmail.com',id:'devanraj167@gmail.com',icon:<i className="fa-solid fa-at"></i>
    },
    {
      media:'Linked In',link:'https://www.linkedin.com/in/devarajan-m-85095937b/',id:'Devarajan M',icon:<i class="fa-brands fa-linkedin-in"></i>
    },
    {
      media:'GitHub',link:'https://github.com/devanraj1905?tab=repositories',id:'Devarajan M',icon:'</>'
    },
    {
      media:'Resume',link:'',id:'Devarajan_Resume',icon:<i class="fa-solid fa-arrow-down"></i>
    },
  ]
  return (
   <div className='' id='contact'>

    <div>
      <h2>Contact</h2>
      <h4>Get In Touch</h4>

    </div>
    <div className='d-flex'>
      {
        details.map((cont)=>(
          <div  style={{
            border:'1px solid #3b83f6',
            padding:'10px',
            width:'200px',
            margin:'10px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            
          }}>
            <span className='pb-2'>
              {cont.icon}
            </span>
            <p>{cont.media}</p>
            <p>{cont.id}</p>

          </div>
        ))
      }
    </div>

   </div>
  )
}

