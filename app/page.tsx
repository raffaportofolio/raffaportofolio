"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SplitText from "../src/component/SplitText";
import TextType from '../src/component/TextType';
import Navbar from'./Navbar';
import Lanyard from '../src/component/Lanyard'
import ScrollFloat from '../src/component/ScrollFloat';
import HoverCard from './HoverCard';
import { Span } from "next/dist/trace";
import { GiSkills } from "react-icons/gi";
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';



export default function Home() {


  
  
  return (
   <main style={{transition:" transform 0.15s ease"}}>


      <Navbar/>

 <section
  className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-24 pb-16 md:py-24 gap-10"
  style={{ color: "#F8FAFC", background: "#0F172A" }}
>
  <div className="flex flex-col w-full">
    <SplitText
      text="Portofolio"
      className="text-4xl md:text-5xl font-bold"
      delay={50}
      duration={1.25}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="left"
    />

    <div className="mt-1" style={{ fontSize: "0.95rem", display: "flex" }}>
      <TextType
        text={["My Name Is ", "RAFFA RAHMA TAHLIL PRATAMA"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        textColors={["white", "cyan"]}
        cursorBlinkDuration={0.5}
      />
    </div>

    {/* Stats row — flex-wrap biar tidak overflow di HP */}
    <div className="flex flex-wrap gap-6 mt-3 items-start">
      <div>
        <h1>
          <span style={{ color: "cyan", fontSize: "2.5rem" }} className="font-bold">5+</span>
          <br />
          <span style={{ fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.1em" }}>LANGUAGE</span>
        </h1>
        <div className="flex flex-wrap gap-1 mt-1">
          {['JavaScript', 'TypeScript', 'PHP', 'Python', 'SQL'].map((lang, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,255,255,0.08)', color: 'rgba(0,255,255,0.7)', border: '1px solid rgba(0,255,255,0.15)' }}>
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
        <h1>
          <span style={{ color: "cyan", fontSize: "2.5rem" }} className="font-bold">3+</span>
          <br />
          <span style={{ fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.1em" }}>PROJECTS</span>
        </h1>
      </div>

      <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
        <h1>
          <span style={{ color: "cyan", fontSize: "2.5rem" }} className="font-bold">1+</span>
          <br />
          <span style={{ fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.1em" }}>YEAR EXP</span>
        </h1>
      </div>
    </div>

    <div style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 500, marginBottom: "2rem", marginTop: "1rem" }}>
      Passionate about building modern web experiences
      and <span className="font-semibold" style={{ color: "#d8e1e9" }}>driven by continuous learning
      and innovation in software development.</span>
    </div>
  </div>

  <div className="hidden md:block w-full md:w-1/2 h-64 md:h-screen">
    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
  </div>
</section>
<section id="about" className="min-h-screen px-6 md:px-10 py-16 overflow-x-auto">
  <div style={{ minWidth: 600, maxWidth: 900, margin: "0 auto", background:"white"}}>
    
    <p className="text-xs tracking-widest uppercase mb-8" style={{color:"#1c3d39"}}>
      Who I Am
    </p>

    <div className="flex flex-row gap-10 items-center">
      
      <img 
        src="/assets/Lanyard/raffa.jpeg" 
        alt="Raffa" 
        className="w-56 h-72 object-cover rounded-2xl shrink-0"
      />

      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{color:"#040506"}}>
          About Me
        </h2>
        <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg mb-8">
          Hi! I'm <span className="font-semibold" style={{color:"#05101a"}}>Raffa Rahma Tahlil Pratama</span>, 
         a passionate <span className="font-semibold" style={{color:"#05101a"}}>Full Stack Developer based in Indonesia.</span> I enjoy building modern, responsive, and user-friendly web applications while continuously improving my skills in both <span  className="font-semibold" style={{color:"#05101a"}}> frontend and backend development.</span> 
        </p>

        <div className="flex flex-row gap-8">
          <div className="shrink-0">
            <p className="text-slate-500 text-xs">Email</p>
            <p className="text-xs md:text-sm" style={{color:"#07111c"}}>
              Raffapratama123221@gmail.com
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-slate-500 text-xs">Phone</p>
            <p className="text-xs md:text-sm" style={{color:"#060a0e"}}>+62896-6329-6273</p>
          </div>
          <div className="shrink-0">
            <p className="text-slate-500 text-xs">Location</p>
            <p className="text-xs md:text-sm" style={{color:"#0d1218"}}>Indonesia</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
 <section id="skills">
  <ProjectsSection/>
 </section>

 <section >
  <ContactSection/> 
 </section>
   </main>
  );
}
