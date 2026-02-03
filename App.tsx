
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
  ChevronRight
} from 'lucide-react';

const PROFILE_DATA = {
  name: "SIDDHI GIRI",
  title: "Civil Engineering Professional",
  email: "siddhigiri7821@gmail.com",
  location: "Yavatmal, MH",
  summary: "Dedicated Civil Engineering student with practical site exposure. Specialized in AutoCAD and construction management with a 3-month field internship.",
  expertise: [
    "AutoCAD", "MS-CIT", "Quality Control", "Safety Procedures",
    "Site Supervision", "Construction Planning", "Estimation", "Site Management"
  ],
  achievements: [
    "Precision Site Supervision",
    "Quantity Measurements Expert",
    "Quality Compliance Lead"
  ],
  experience: [
    {
      role: "Engineering Intern",
      company: "Balaji Construction, Yavatmal",
      duration: "3 Months",
      details: [
        "Led site supervision & daily reporting",
        "Managed RCC & brickwork quantity metrics",
        "Ensured material quality standards",
      ]
    },
    {
      role: "Field Observer",
      company: "Industrial Visits",
      duration: "Academic",
      details: [
        "Analyzed site execution workflows",
        "Studied site safety protocols",
        "Evaluated quality control measures"
      ]
    }
  ],
  education: [
    {
      degree: "Diploma in Civil Engineering",
      institution: "Govt. Polytechnic Arvi",
      period: "2023 - Present",
      highlights: ["Reputed Technical Institute", "Direct Site Exposure"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Deorav Patil High School",
      period: "Graduated 2023",
      highlights: ["71% Performance", "Foundational Excellence"]
    }
  ],
  additional: {
    languages: ["English", "Marathi", "Hindi"],
    certifications: "Active participant in technical projects and leadership activities."
  },
  photoUrl: "input_file_0.png",
  resumeUrl: "input_file_1.png"
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode; id?: string }> = ({ title, subtitle, icon, id }) => (
  <div className="mb-8 md:mb-12 animate-reveal" id={id}>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-lg">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 text-sm md:text-base font-medium ml-1 max-w-lg">{subtitle}</p>}
    <div className="h-1 w-16 bg-emerald-600 mt-4 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      {/* Taskbar / Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0 })}>
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white transition-all group-hover:bg-slate-900 shadow-lg">
              <HardHat size={20} />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">SG.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about-sec" className="nav-link">About</a>
            <a href="#expertise-sec" className="nav-link">Expertise</a>
            <a href="#experience-sec" className="nav-link">Experience</a>
            <a href="#education-sec" className="nav-link">Education</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${PROFILE_DATA.email}`}
              className="px-5 py-2.5 bg-slate-900 text-white text-[10px] font-black rounded-full hover:bg-emerald-600 transition-all uppercase tracking-widest shadow-md active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about-sec" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-10 animate-reveal text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Open for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              {PROFILE_DATA.name.split(' ')[0]} <br/>
              <span className="text-emerald-600">{PROFILE_DATA.name.split(' ')[1]}</span>
            </h1>

            <p className="text-base md:text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE_DATA.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href={`mailto:${PROFILE_DATA.email}`} 
                className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-emerald-100 flex items-center gap-3 group active:scale-95"
              >
                <UserCheck size={20} />
                <span>HIRE ME</span>
              </a>
              <a 
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white text-slate-900 border border-slate-100 font-black rounded-2xl hover:bg-emerald-50 transition-all flex items-center gap-3 shadow-sm active:scale-95"
              >
                <Download size={18} />
                <span>RESUME</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]">
              {/* Outer Glow */}
              <div className="absolute inset-[-20px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Circular Frame */}
              <div className="w-full h-full rounded-full border-4 border-white shadow-2xl animate-float relative z-10 overflow-hidden bg-emerald-50 ring-8 ring-emerald-50/50">
                <img 
                  src={PROFILE_DATA.photoUrl} 
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ 
                    filter: 'contrast(1.05) brightness(1.02)',
                    objectPosition: 'center 15%'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${PROFILE_DATA.name}&background=059669&color=fff&size=512`;
                  }}
                />
                <div className="absolute inset-0 bg-emerald-600/5 mix-blend-overlay"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-emerald-50 z-20 hidden md:block animate-reveal" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Achieved</p>
                    <p className="text-xs font-black text-slate-900">71% Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise-sec" className="py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader title="My Expertise" icon={<Terminal size={20} />} subtitle="Core competencies in civil engineering and site management." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PROFILE_DATA.expertise.map((skill, index) => (
              <div key={index} className="bg-white p-5 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm card-hover text-center lg:text-left">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 transition-all mx-auto lg:mx-0">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-sm md:text-lg font-black text-slate-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Grid */}
      <section id="experience-sec" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            {/* Experience Column */}
            <div>
              <SectionHeader title="Experience" icon={<Briefcase size={20} />} />
              <div className="space-y-10">
                {PROFILE_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-emerald-100 group animate-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-emerald-600 transition-all group-hover:scale-125"></div>
                    <div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{exp.duration}</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">{exp.role}</h3>
                      <p className="text-sm text-slate-500 font-bold mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.details.map((d, di) => (
                          <li key={di} className="text-sm text-slate-500 flex gap-3">
                            <ChevronRight size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Info Column */}
            <div className="space-y-16" id="education-sec">
              <div>
                <SectionHeader title="Education" icon={<GraduationCap size={20} />} />
                <div className="space-y-6">
                  {PROFILE_DATA.education.map((edu, idx) => (
                    <div key={idx} className="p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 card-hover">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{edu.period}</span>
                      <h3 className="text-xl font-black text-slate-900 leading-tight mt-1">{edu.degree}</h3>
                      <p className="text-sm text-slate-500 font-bold mb-4">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map(h => (
                          <span key={h} className="px-3 py-1 bg-white text-[10px] font-bold text-slate-400 rounded-full border border-slate-100 uppercase tracking-wider">{h}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Languages size={20} />
                    </div>
                    <h3 className="font-black uppercase tracking-widest text-sm">Skills & Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {PROFILE_DATA.additional.languages.map(l => (
                      <span key={l} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/5">{l}</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 italic leading-relaxed">{PROFILE_DATA.additional.certifications}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-sec" className="py-20 md:py-32 bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-emerald-600 rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 space-y-8 animate-reveal">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                Let's Start <br/> A Project
              </h2>
              <p className="text-base md:text-xl text-emerald-50 max-w-lg mx-auto font-medium opacity-90 leading-relaxed">
                Open for internships and full-time junior engineering roles. Let's build the infrastructure of tomorrow.
              </p>
              
              <div className="pt-6">
                <a 
                  href={`mailto:${PROFILE_DATA.email}`} 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-white text-emerald-600 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl group active:scale-95"
                >
                  <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>Send an Email</span>
                </a>
              </div>
              <p className="text-[10px] font-black text-emerald-200 uppercase tracking-[0.4em] opacity-80 pt-4">
                Location: {PROFILE_DATA.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <HardHat size={20} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">{PROFILE_DATA.name}</span>
          </div>
          <div className="flex justify-center gap-8 mb-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#about-sec" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#expertise-sec" className="hover:text-emerald-600 transition-colors">Expertise</a>
            <a href="#contact-sec" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} SIDDHI GIRI &bull; CIVIL ENGINEER
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
