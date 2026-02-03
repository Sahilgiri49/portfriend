
import React, { useEffect, useState } from 'react';
import { 
  HardHat, 
  Mail, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Languages, 
  ArrowRight,
  Download,
  Terminal,
  UserCheck,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const PROFILE_DATA = {
  name: "SIDDHI GIRI",
  title: "Civil Engineering Professional",
  email: "siddhigiri7821@gmail.com",
  location: "Yavatmal, MH",
  summary: "Focused Civil Engineering student with hands-on site exposure. Proficient in AutoCAD, project supervision, and construction management through professional internships.",
  expertise: [
    "AutoCAD", "Site Supervision", "Quality Control", "Estimation",
    "MS-CIT", "Material Testing", "Safety Compliance", "Project Billing"
  ],
  achievements: [
    "Top-Tier Site Supervision",
    "71% Academic Score Excellence",
    "Real-world Quantity Analysis"
  ],
  experience: [
    {
      role: "Engineering Intern",
      company: "Balaji Construction",
      duration: "3 Months",
      details: [
        "Monitored site progress & QC",
        "Calculated RCC & brick quantities",
        "Verified material quality standards"
      ]
    },
    {
      role: "Technical Observer",
      company: "Industrial Field Studies",
      duration: "Academic",
      details: [
        "Studied site safety protocols",
        "Analyzed structural execution",
        "Evaluated workflow efficiency"
      ]
    }
  ],
  education: [
    {
      degree: "Diploma in Civil Engineering",
      institution: "Govt. Polytechnic Arvi",
      period: "2023 - Present",
      highlights: ["Technical Excellence", "Practical Site Focus"]
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Deorav Patil High School",
      period: "2023",
      highlights: ["71% Merit Result", "Strong Foundation"]
    }
  ],
  additional: {
    languages: ["English", "Marathi", "Hindi"],
    hobbies: "Proactive in sports, dance, and leadership roles."
  },
  photoUrl: "input_file_0.png",
  resumeUrl: "input_file_1.png"
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode; id?: string }> = ({ title, subtitle, icon, id }) => (
  <div className="mb-10 animate-reveal" id={id} style={{ opacity: 0 }}>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-lg">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 text-sm md:text-base font-medium ml-1 max-w-lg">{subtitle}</p>}
    <div className="h-1 w-12 bg-emerald-600 mt-4 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      {/* Floating Taskbar / Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white transition-all group-hover:bg-emerald-600">
              <HardHat size={20} />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900">SG.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="taskbar-link">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${PROFILE_DATA.email}`}
              className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-black rounded-full hover:bg-slate-900 transition-all uppercase tracking-widest shadow-lg shadow-emerald-100 active:scale-95"
            >
              Hire Me
            </a>
            <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-black text-slate-500 uppercase text-sm tracking-widest hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-reveal text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Engineering Portfolio
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              {PROFILE_DATA.name.split(' ')[0]} <br/>
              <span className="text-emerald-600">{PROFILE_DATA.name.split(' ')[1]}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE_DATA.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href={`mailto:${PROFILE_DATA.email}`} 
                className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-slate-100 flex items-center gap-3 active:scale-95"
              >
                <UserCheck size={22} />
                <span>HIRE ME</span>
              </a>
              <a 
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white text-slate-900 border border-slate-100 font-black rounded-2xl hover:bg-emerald-50 transition-all flex items-center gap-3 shadow-sm active:scale-95"
              >
                <Download size={20} />
                <span>RESUME</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Outer Effects */}
              <div className="absolute inset-[-15px] border-2 border-emerald-100 rounded-full animate-[spin_12s_linear_infinite] opacity-40"></div>
              <div className="absolute inset-[-30px] border border-dashed border-emerald-200 rounded-full animate-[spin_24s_linear_infinite_reverse] opacity-20"></div>
              
              {/* Profile Photo - Circle */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-slate-100 ring-4 ring-emerald-50 animate-float">
                <img 
                  src={PROFILE_DATA.photoUrl} 
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-110"
                  style={{ 
                    filter: 'contrast(1.02) brightness(1.02) saturate(0.95)',
                    objectPosition: 'center 15%'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${PROFILE_DATA.name}&background=059669&color=fff&size=512`;
                  }}
                />
                {/* Visual filter overlay */}
                <div className="absolute inset-0 bg-emerald-600/5 mix-blend-overlay"></div>
              </div>

              {/* Achievement Pill */}
              <div className="absolute -bottom-4 -right-2 bg-white p-4 rounded-2xl shadow-xl border border-emerald-50 z-20 hidden md:flex items-center gap-3 animate-reveal" style={{ animationDelay: '0.8s' }}>
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Score</p>
                  <p className="text-xs font-black text-slate-900">71% Academic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Technical Arsenal" icon={<Terminal size={20} />} subtitle="Practical skills in civil infrastructure and site execution." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {PROFILE_DATA.expertise.map((skill, index) => (
              <div key={index} className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm card-3d text-center lg:text-left">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 transition-all mx-auto lg:mx-0">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-base md:text-xl font-black text-slate-900 leading-tight">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Experience */}
            <div>
              <SectionHeader title="Field Experience" icon={<Briefcase size={20} />} />
              <div className="space-y-12">
                {PROFILE_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-emerald-100 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white shadow-md group-hover:scale-125 transition-transform"></div>
                    <div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1 block">{exp.duration}</span>
                      <h3 className="text-2xl font-black text-slate-900">{exp.role}</h3>
                      <p className="text-base text-slate-500 font-bold mb-4">{exp.company}</p>
                      <ul className="space-y-3">
                        {exp.details.map((d, di) => (
                          <li key={di} className="text-sm text-slate-500 flex gap-3">
                            <ArrowRight size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Pillar */}
            <div id="education" className="space-y-20">
              <div>
                <SectionHeader title="Education" icon={<GraduationCap size={20} />} />
                <div className="space-y-8">
                  {PROFILE_DATA.education.map((edu, idx) => (
                    <div key={idx} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 card-3d">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-2">{edu.period}</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{edu.degree}</h3>
                      <p className="text-base text-slate-500 font-bold mb-6">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map(h => (
                          <span key={h} className="px-4 py-1.5 bg-white text-[10px] font-black text-slate-400 rounded-full border border-slate-100 uppercase tracking-wider">{h}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Details */}
              <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center">
                      <Languages size={24} />
                    </div>
                    <h3 className="font-black uppercase tracking-[0.1em] text-lg">Bio & Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PROFILE_DATA.additional.languages.map(l => (
                      <span key={l} className="px-5 py-2.5 bg-white/10 rounded-2xl text-xs font-bold border border-white/5">{l}</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {PROFILE_DATA.additional.hobbies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Achievements" icon={<Award size={20} />} />
          <div className="grid sm:grid-cols-3 gap-8">
            {PROFILE_DATA.achievements.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-sm flex flex-col items-center text-center group card-3d border border-white">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={32} />
                </div>
                <p className="text-xl font-black text-slate-900 tracking-tight leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-emerald-600 rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(5,150,105,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]"></div>
            
            <div className="relative z-10 space-y-10 animate-reveal">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                Let's Build <br/> The Future.
              </h2>
              <p className="text-lg md:text-2xl text-emerald-50 max-w-xl mx-auto font-medium opacity-90 leading-relaxed">
                Currently open for roles where I can apply my site engineering and technical skills.
              </p>
              
              <div className="pt-6">
                <a 
                  href={`mailto:${PROFILE_DATA.email}`} 
                  className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-2xl hover:bg-white hover:text-emerald-600 transition-all shadow-2xl group active:scale-95"
                >
                  <Mail size={28} className="group-hover:rotate-12 transition-transform" />
                  <span>Send an Email</span>
                </a>
              </div>
              <p className="text-xs font-black text-emerald-200 uppercase tracking-[0.5em] opacity-70">
                {PROFILE_DATA.location} &bull; SIDDHIGIRI7821@GMAIL.COM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <HardHat size={20} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">{PROFILE_DATA.name}</span>
          </div>
          <div className="flex justify-center gap-10 mb-12 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-emerald-600 transition-colors">{link.name}</a>
            ))}
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em]">
            &copy; {new Date().getFullYear()} SIDDHI GIRI &bull; CIVIL ENGINEERING
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
