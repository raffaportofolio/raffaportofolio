'use client'

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#e3e7ee' }} className="py-16 px-6 md:px-24 w-full">
      
      <p className="text-center mb-12" style={{ color: '#1f0606', letterSpacing: '10px', textTransform: 'uppercase', fontWeight: 500 }}>
        <span style={{ color: '#0c2e47' }}>Contact</span> Me
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

        <div className="flex-none">
          <img
            src="/assets/Lanyard/logoraffa.png"
            alt="Raffa"
            className="rounded-2xl"
            style={{ width: 220, height: 280, objectFit: 'cover', border: '1px solid rgba(0,255,255,0.2)' }}
          />
        </div>

        <div className="flex flex-col gap-5">
          
          <div>
            <p style={{ color: '#546781', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Email</p>
            <a href="mailto:Raffapratma123221@gmail.com" style={{ color: '#030911', fontSize: '1rem', textDecoration: 'none' }}>
              Raffapratma123221@gmail.com
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
            <p style={{ color: '#546781', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Instagram</p>
            <a href="https://instagram.com/Raffaprtma_" target="_blank" style={{ color: '#0e1115', fontSize: '1rem', textDecoration: 'none' }}>
              @Raffaprtma_
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
            <p style={{ color: '#546781', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>GitHub</p>
            <a href="https://github.com/RaffaPortofolio" target="_blank" style={{ color: '#10141a', fontSize: '1rem', textDecoration: 'none' }}>
              RaffaPortofolio
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
            <p style={{ color: '#546781', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>LinkedIn</p>
            <a href="https://linkedin.com/in/RaffaPratama" target="_blank" style={{ color: '#10151c', fontSize: '1rem', textDecoration: 'none' }}>
              RaffaPratama
            </a>
          </div>

          <div className="flex gap-3 mt-2">
            <a href="mailto:Raffapratma123221@gmail.com" className="text-sm px-5 py-2 rounded-lg" style={{ background: 'rgba(13, 14, 14, 0.1)', color: 'black', border: '1px solid rgba(12, 22, 22, 0.3)', textDecoration: 'none' }}>
              Send Email
            </a>
            <a href="https://github.com/RaffaPortofolio" target="_blank" className="text-sm px-5 py-2 rounded-lg" style={{ background: 'transparent', color: '#010307', border: '1px solid rgba(19, 12, 12, 0.1)', textDecoration: 'none' }}>
              GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}