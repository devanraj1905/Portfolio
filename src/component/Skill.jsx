import React, { useState } from 'react'
import { BsDatabase } from 'react-icons/bs';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaBootstrap, FaJava } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiSqlite, SiTailwindcss } from "react-icons/si";
import { TbApi } from 'react-icons/tb';
import { VscVscode } from "react-icons/vsc";
import { Reveal } from '../Reveal';

function SkillTag({ skill }) {
    const [hover, setHover] = useState(false)
    return (
       
           <button
           
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
                className='rounded-pill py-2  px-3 m-2 d-flex gap-1'

                style={{

                    color: hover?'white':`${skill.color}` ,
                    background: hover ? `${skill.color}20` : `${skill.color}10`,
                    border: `1px solid ${hover? skill.color: `${skill.color}20`}`,
                    transform:hover? 'translateY(-2px)':'translateY(0)',
                    boxShadow: hover ? `0 0px 15px ${skill.color}` : 'none',
                    transition:'all 0.3s ease',

                }}
            >
                <small>{skill.icon}</small><strong>{skill.name}</strong></button>


    )
}
export function Skill() {
    const skills = [
        { name: 'React.js', icon: <FaReact />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'JavaScript', icon: <SiJavascript />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'HTML', icon: <FaHtml5 />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'CSS', icon: <FaCss3Alt />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'Bootstrap', icon: <FaBootstrap />, cat: 'Frontend', color: '#3b82f6' },
        { name: 'Git', icon: <FaGitAlt />, cat: 'Tools', color: '#f59e0b' },
        { name: 'GitHub', icon: <FaGithub />, cat: 'Tools', color: '#f59e0b' },
        { name: 'VS Code', icon: <VscVscode />, cat: 'Tools', color: '#f59e0b' },
        { name: 'REST API', icon: <TbApi />, cat: 'Tools', color: '#f59e0b' },
        { name: 'Java', icon: <FaJava />, cat: 'Programming', color: '#10b981' },
        { name: 'Node.js', icon: <SiNodedotjs />, cat: 'Backend', color: '#10b981' },
        { name: 'Express.js', icon: <SiExpress />, cat: 'Backend', color: '#10b981' },

        { name: 'Mongo DB', icon: <SiMongodb/> , cat: 'Database', color: '#f59e0b' },
        { name: 'MySQL', icon: <SiMysql />, cat: 'Database', color: '#f59e0b' },
    ]
    const CAT = ['All', 'Frontend', 'Programming', 'Backend', 'Database', 'Tools']

    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active)


    return (

        <div id='skills' style={{
            padding: '60px 0'
        }}>

          <Reveal>  <div className='d-flex flex-column align-items-center text-center'>
                <p className='text-primary py-3'>What I Work With</p>
                <h1 className='text-light sk'>Skills</h1>
                <p className='text-secondary pt-4'>Technologies I use to build responsive and scalable web applications.</p>
            </div>
            <div className='d-flex flex-wrap justify-content-center  gap-2 m-3'>
                {CAT.map((cat) => (
                    <button key={cat}
                        onClick={() => { setActive(cat) }}
                        className='skill-tag rounded-pill btn btn-sm px-3 py-2'
                        style={{
                            border: `1px solid ${active === cat ? '#3b82f6' : 'rgba(255,255,255,0.2)'}`,
                            background: active === cat ? '#3b82f620' : 'transparent',
                            color: active === cat ? '#3b82f6' : '#94a3b8',
                            transition: 'all 0.3s ease',
                            fontSize: '12px',

                        }}
                    >{cat}</button>
                ))}
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-2 py-5'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',


                    maxWidth: '900px',
                    margin: '0 auto',
                }}>
                {filtered.map((skill) => (
                    <Reveal scale={0.2} x={-100} delay={0.2} key={skill.name} ><SkillTag key={skill.name} skill={skill} /></Reveal>
                ))}
            </div>
</Reveal>


        </div>


    )

}