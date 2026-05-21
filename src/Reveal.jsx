import React from 'react'
import { motion} from 'framer-motion'


export function Reveal({ children,x=0,y=0,opacity=0,duration=0.8 ,scale=1,delay=0}) {
  
  return (
    
          <motion.div 
          initial={{opacity:0,x,y,scale}}
          whileInView={{opacity:1, x:0,y:0,scale:1}}
          transition={{duration,delay}}
          viewport={{once:true}}
    
          >
    {children}
          </motion.div>

  )
}

