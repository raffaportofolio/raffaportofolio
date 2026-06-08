'use client';

import React, { useRef, useState } from 'react';

const skills = [
  { tag: 'Frontend', title: 'React & Next.js', desc: 'Crafting responsive and engaging user interfaces with React, Next.js, and Tailwind CSS.' },
  { tag: 'Backend', title: 'Node.js & Express', desc: 'Building robust server-side logic and RESTful APIs using Node.js and Express.' },
  { tag: 'Database', title: 'MySQL', desc: 'Designing and managing efficient database structures with a focus on performance and reliability.' },
  { tag: 'IT Support', title: 'Hardware & Network', desc: 'Diagnosing and resolving hardware, software, and network issues while maintaining system performance.' },
  { tag: 'Language', title: 'PHP & Laravel', desc: 'Building web applications using PHP and Laravel framework with MVC architecture.' },
];

const projects = [
  { title: 'Portfolio Website V1', tag: 'Web App', stack: 'Next.js · Tailwind · TypeScript', live: 'https://portofolio-raffapratama.netlify.app/' },
  { title: 'Inventory System', tag: 'Full Stack', stack: 'Laravel · MySQL · Bootstrap', },
  { title: 'Warung Premium', tag: 'Web APP', stack: 'Node.js · supabase · MySQL', live: 'https://warung-premium.netlify.app/' },
];

export default function Page() {
  const skillsTrackRef = useRef<HTMLDivElement>(null);
  const projectsTrackRef = useRef<HTMLDivElement>(null);
  const [skillsCurrent, setSkillsCurrent] = useState(0);
  const [projectsCurrent, setProjectsCurrent] = useState(0);

  const scrollSkills = (i: number) => {
    const idx = Math.max(0, Math.min(i, skills.length - 1));
    setSkillsCurrent(idx);
    skillsTrackRef.current?.scrollTo({ left: idx * 296, behavior: 'smooth' });
  };

  const scrollProjects = (i: number) => {
    const idx = Math.max(0, Math.min(i, projects.length - 1));
    setProjectsCurrent(idx);
    projectsTrackRef.current?.scrollTo({ left: idx * 296, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Skills */}
      <section id="skills" style={{ background: '#0F172A' }} className="py-16 w-full">
        <p className="text-center mb-8" style={{ color: '#fefefe', letterSpacing: '10px', textTransform: 'uppercase', fontWeight: 500 }}>
          <span style={{ color: 'cyan' }}>My</span> Skills
        </p>

        <div ref={skillsTrackRef} className="flex gap-4 overflow-x-auto px-8 pb-4" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' as const }}>
          {skills.map((s, i) => (
            <div key={i} className="flex-none p-6 rounded-xl" style={{ width: 280, scrollSnapAlign: 'start', background: '#1E293B', border: '1px solid rgba(0,255,255,0.15)' }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(0,255,255,0.6)' }}>{s.tag}</span>
              <h3 className="mt-2 mb-1" style={{ color: '#e2e8f0', fontWeight: 500 }}>{s.title}</h3>
              <p className="text-xs" style={{ color: '#64748B', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <button onClick={() => scrollSkills(skillsCurrent - 1)} style={{ background: 'transparent', border: '1px solid rgba(0,255,255,0.2)', color: 'rgba(0,255,255,0.7)', width: 34, height: 34, borderRadius: 8, cursor: 'pointer' }}>←</button>
          <button onClick={() => scrollSkills(skillsCurrent + 1)} style={{ background: 'transparent', border: '1px solid rgba(0,255,255,0.2)', color: 'rgba(0,255,255,0.7)', width: 34, height: 34, borderRadius: 8, cursor: 'pointer' }}>→</button>
        </div>

        <style>{`#skills .overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
      </section>

      {/* Projects */}
      <section id="projects" style={{ background: '#0F172A' }} className="py-16 w-full">
        <p className="text-center mb-8" style={{ color: '#fefefe', letterSpacing: '10px', textTransform: 'uppercase', fontWeight: 500 }}>
          My <span style={{color:"cyan"}}>Projects</span>
        </p>

        <div ref={projectsTrackRef} className="flex gap-4 overflow-x-auto px-8 pb-4" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' as const }}>
          {projects.map((p, i) => (
            <div key={i} className="flex-none p-6 rounded-xl" style={{ width: 280, scrollSnapAlign: 'start', background: '#1E293B', border: '1px solid rgba(0,255,255,0.15)' }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(0,255,255,0.6)' }}>{p.tag}</span>
              <h3 className="mt-2 mb-1" style={{ color: '#e2e8f0', fontWeight: 500 }}>{p.title}</h3>
              <p className="text-xs mb-4" style={{ color: '#64748B' }}>{p.stack}</p>
              <div className="flex gap-2">
                <a href={p.live} target="_blank" className="text-xs px-3 py-1 rounded" style={{ color: 'rgba(0,255,255,0.7)', border: '1px solid rgba(0,255,255,0.2)', textDecoration: 'none' }}>Live</a>
                  </div>
            </div>
          ))}
        </div>

        <style>{`#projects .overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
      </section>
    </main>
  );
}