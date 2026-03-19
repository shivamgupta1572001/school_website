// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import { useState, createContext, useContext, useEffect } from "react";

const Ctx = createContext();
const useCtx = () => useContext(Ctx);

// ─── Default Data ─────────────────────────────────────────────────────────────
const INIT = {
  school: { name:"Vidya School", tagline:"Illuminating Minds, Building Futures", founded:"2001", phone:"+91 522 400 5678", email:"info@vidyaschool.edu.in", address:"45, Gomti Nagar, Lucknow, UP 226010" },
  logo: { emoji:"🎓", color:"#1d4ed8" },
  nav: ["Home","About","Academics","Admissions","Events","News","Contact"],
  hero: [
    { id:1, title:"Welcome to Vidya School", sub:"A place where knowledge meets character.", bg:"#1e3a5f", active:true },
    { id:2, title:"Excellence Since 2001", sub:"2,800+ students. 200+ faculty. Countless achievements.", bg:"#14532d", active:true },
    { id:3, title:"Admissions Open 2025-26", sub:"Apply now for limited seats across all classes.", bg:"#7c2d12", active:true },
  ],
  homeSections: {
    statsTitle:"Our School in Numbers",
    stats:[{label:"Students",value:"2,800+"},{label:"Faculty",value:"200+"},{label:"Years",value:"24"},{label:"Awards",value:"600+"}],
    missionTitle:"Our Mission",
    missionText:"To nurture intellectually curious, morally strong, and globally aware citizens through a world-class learning environment.",
    featuresTitle:"Why Choose Vidya?",
    features:[
      {icon:"🏆",title:"Award-Winning Academics",desc:"Consistent board toppers and 98%+ pass rate every year."},
      {icon:"🔬",title:"STEM Excellence",desc:"Fully equipped labs, robotics club, and coding from Grade 3."},
      {icon:"🎭",title:"Arts & Culture",desc:"Music, dance, drama, and fine arts programs for every student."},
      {icon:"⚽",title:"Sports Complex",desc:"Olympic-size pool, cricket ground, and 12 indoor sports."},
    ],
  },
  about: {
    title:"About Vidya School",
    history:"Founded in 2001 by educationist Dr. Ramesh Verma, Vidya School began with 80 students in a single building. Today, it stands as one of Lucknow's most prestigious institutions, spanning 15 acres with state-of-the-art infrastructure.",
    mission:"To provide inclusive, high-quality education that empowers every student to achieve excellence.",
    vision:"To be recognised globally as a beacon of holistic education and innovation.",
    principalName:"Dr. Sunita Agarwal",
    principalMsg:"At Vidya School, we believe that every child carries within them a unique spark. Our responsibility is to fan that spark into a flame of lifelong curiosity and compassion.",
    values:["Integrity","Excellence","Innovation","Empathy"],
  },
  academics: {
    title:"Academic Programs",
    subtitle:"From foundational early years to advanced senior secondary — rigorous, holistic, future-ready.",
    programs:[
      {name:"Pre-Primary (Nursery–KG)",desc:"Play-based learning to build curiosity, social skills, and early literacy.",icon:"🌱"},
      {name:"Primary (I–V)",desc:"Solid foundation in languages, mathematics, science, and arts.",icon:"📗"},
      {name:"Middle School (VI–VIII)",desc:"Project-based learning and critical thinking across all subjects.",icon:"📘"},
      {name:"High School (IX–X)",desc:"CBSE board preparation with labs, mentoring, and career guidance.",icon:"📙"},
      {name:"Senior Secondary (XI–XII)",desc:"Science, Commerce & Humanities with 95%+ board pass rate.",icon:"🎓"},
      {name:"Skill & Enrichment",desc:"Coding, robotics, public speaking, entrepreneurship, and fine arts.",icon:"💡"},
    ],
  },
  admissions: {
    title:"Admissions 2025–26",
    subtitle:"Join the Vidya family. Limited seats. Merit-based selection.",
    deadline:"April 30, 2025", fee:"₹500",
    note:"Scholarships available for meritorious and EWS students.",
    steps:["Download and fill the application form.","Submit with required documents.","Appear for entrance test / interaction.","Confirm admission with fee payment."],
  },
  news: [
    {id:1,title:"Vidya Students Win National Science Olympiad",date:"2025-03-10",category:"Achievement",published:true,body:"Our students bagged 3 gold medals at the National Science Olympiad held in Delhi."},
    {id:2,title:"New Computer Lab Inaugurated",date:"2025-02-20",category:"Infrastructure",published:true,body:"A 60-seat AI & Robotics lab was inaugurated by the District Magistrate."},
    {id:3,title:"Annual Day Celebrations 2025",date:"2025-01-15",category:"Event",published:false,body:"The Annual Day was a grand success with 1,500+ attendees."},
  ],
  events: [
    {id:1,title:"Annual Sports Day",date:"2025-03-28",venue:"School Ground",active:true},
    {id:2,title:"Science Exhibition",date:"2025-04-05",venue:"Main Hall",active:true},
    {id:3,title:"Parent-Teacher Meeting",date:"2025-03-22",venue:"Classrooms",active:true},
    {id:4,title:"Inter-School Debate",date:"2025-04-12",venue:"Auditorium",active:false},
  ],
  testimonials: [
    {id:1,name:"Priya Sharma",role:"Parent, Grade 8",text:"Vidya School transformed my daughter. The faculty genuinely cares about every child's growth."},
    {id:2,name:"Arjun Mehta",role:"Alumni, Batch 2022",text:"The values and discipline I learned here shaped my character more than anything else."},
    {id:3,name:"Neha Gupta",role:"Parent, Grade 5",text:"Outstanding infrastructure and wonderfully dedicated teachers. Best school in Lucknow."},
  ],
  toppers: [
    {id:1,name:"Riya Singh",class:"XII Science",percentage:"98.6%",year:"2024"},
    {id:2,name:"Ankit Patel",class:"X",percentage:"99.2%",year:"2024"},
    {id:3,name:"Sneha Verma",class:"XII Commerce",percentage:"97.8%",year:"2024"},
  ],
  parliament: { title:"Students' Parliament", desc:"Our Students' Parliament empowers student voices in school governance, building leadership and democratic values.", president:"Kavya Sinha (XII-A)", vicePresident:"Rahul Joshi (XI-B)", secretary:"Ananya Das (XII-C)" },
  principalMsg: { name:"Dr. Sunita Agarwal", designation:"Principal, Vidya School", message:"Education is not merely the transfer of knowledge — it is the awakening of the human spirit. At Vidya School, we create an environment where curiosity is celebrated, character is forged, and every child is seen, heard, and valued." },
  stats: { students:"2,800+", faculty:"200+", years:"24", awards:"600+", passRate:"98%", alumni:"15,000+" },
  contact: { officeHours:"Mon–Sat: 8:00 AM – 4:00 PM" },
  footer: { tagline:"Illuminating Minds, Building Futures since 2001.", copyright:"© 2025 Vidya School. All rights reserved." },
  messages: [
    {id:1,name:"Rohit Sharma",email:"rohit@gmail.com",message:"I want to know about admission procedure for Grade 6.",date:"2025-03-15",read:false},
  ],
};

// ─── Colour tokens ─────────────────────────────────────────────────────────────
const T = {
  navy:"#0f2040", blue:"#1d4ed8", blueLight:"#3b82f6", bluePale:"#eff6ff",
  gold:"#f59e0b", goldLight:"#fef3c7",
  teal:"#0d9488", tealLight:"#f0fdfa",
  slate:"#64748b", slateLight:"#f8fafc", border:"#e2e8f0",
  white:"#ffffff", text:"#0f172a", muted:"#475569",
  green:"#16a34a", red:"#dc2626",
};

// ─── Global CSS ───────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Plus Jakarta Sans',sans-serif;color:${T.text};background:${T.slateLight};}
.serif{font-family:'Merriweather',serif;}
::-webkit-scrollbar{width:5px;height:5px;}::-webkit-scrollbar-track{background:#f1f5f9;}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px;}
.container{max-width:1200px;margin:0 auto;padding:0 24px;}
.btn-primary{background:${T.blue};color:#fff;border:none;padding:11px 26px;border-radius:8px;font-weight:600;cursor:pointer;font-size:14px;transition:all .2s;font-family:inherit;}
.btn-primary:hover{background:#1e40af;transform:translateY(-1px);}
.btn-outline{background:transparent;color:${T.blue};border:2px solid ${T.blue};padding:9px 22px;border-radius:8px;font-weight:600;cursor:pointer;font-size:14px;transition:all .2s;font-family:inherit;}
.btn-outline:hover{background:${T.blue};color:#fff;}
.card{background:#fff;border-radius:12px;box-shadow:0 1px 8px rgba(0,0,0,.07);border:1px solid ${T.border};}
.input{width:100%;padding:9px 13px;border:1.5px solid ${T.border};border-radius:8px;font-size:14px;font-family:inherit;outline:none;transition:border .15s;}
.input:focus{border-color:${T.blue};box-shadow:0 0 0 3px #3b82f620;}
.label{font-size:12px;font-weight:600;color:${T.navy};display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px;}
.tag{display:inline-flex;align-items:center;gap:4px;background:${T.bluePale};color:${T.blue};font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:.3px;}
.tag.green{background:#dcfce7;color:${T.green};}.tag.red{background:#fee2e2;color:${T.red};}.tag.gold{background:${T.goldLight};color:#92400e;}
.section{padding:80px 0;}
.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;}
.grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
.fade-up{animation:fadeUp .45s ease both;}
@media(max-width:768px){.hide-mob{display:none!important}.section{padding:52px 0;}}
`;

// ════════════════════════════════════════════════════════════════
// PUBLIC WEBSITE COMPONENTS
// ════════════════════════════════════════════════════════════════

function Navbar({ page, setPage, openAdmin }) {
  const { d } = useCtx();
  const [mob, setMob] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const h = () => setScroll(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{ position:"sticky",top:0,zIndex:900,background:scroll?"rgba(15,32,64,.97)":T.navy,backdropFilter:"blur(8px)",boxShadow:scroll?"0 2px 20px rgba(0,0,0,.3)":"none",transition:"all .3s" }}>
      <div className="container" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",height:66 }}>
        <div onClick={() => setPage("Home")} style={{ display:"flex",alignItems:"center",gap:12,cursor:"pointer" }}>
          <div style={{ width:42,height:42,background:T.gold,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>{d.logo.emoji}</div>
          <div>
            <div className="serif" style={{ color:"#fff",fontSize:17,lineHeight:1.1 }}>{d.school.name}</div>
            <div style={{ color:"#94a3b8",fontSize:10,letterSpacing:1 }}>Est. {d.school.founded}</div>
          </div>
        </div>
        <div style={{ display:"flex",gap:2,alignItems:"center" }} className="hide-mob">
          {d.nav.map(l => (
            <button key={l} onClick={() => setPage(l)} style={{ background:page===l?T.blue:"transparent",color:page===l?"#fff":"#94a3b8",border:"none",padding:"8px 14px",borderRadius:7,cursor:"pointer",fontWeight:500,fontSize:14,fontFamily:"inherit",transition:"all .2s" }}>{l}</button>
          ))}
          <button onClick={openAdmin} style={{ background:"#ffffff15",color:"#fff",border:"1px solid #ffffff30",padding:"8px 16px",borderRadius:7,cursor:"pointer",fontSize:13,fontWeight:600,marginLeft:8,fontFamily:"inherit" }}>⚙ Admin</button>
        </div>
        <button onClick={() => setMob(!mob)} style={{ background:"none",border:"none",color:"#fff",fontSize:22,cursor:"pointer" }}>☰</button>
      </div>
      {mob && (
        <div style={{ background:T.navy,padding:"12px 24px 20px",borderTop:"1px solid #ffffff15" }}>
          {d.nav.map(l => <button key={l} onClick={() => { setPage(l); setMob(false); }} style={{ display:"block",width:"100%",textAlign:"left",background:"none",color:"#cbd5e1",border:"none",padding:"10px 0",fontSize:15,cursor:"pointer",fontFamily:"inherit" }}>{l}</button>)}
          <button onClick={() => { openAdmin(); setMob(false); }} style={{ display:"block",color:T.gold,background:"none",border:"none",padding:"10px 0",fontSize:14,cursor:"pointer",fontFamily:"inherit",fontWeight:600 }}>⚙ Admin Panel</button>
        </div>
      )}
    </nav>
  );
}

function Footer({ setPage }) {
  const { d } = useCtx();
  return (
    <footer style={{ background:T.navy,paddingTop:56,paddingBottom:28 }}>
      <div className="container">
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40,marginBottom:40 }}>
          <div>
            <div className="serif" style={{ color:"#fff",fontSize:20,marginBottom:10 }}>{d.school.name}</div>
            <p style={{ color:"#94a3b8",fontSize:14,lineHeight:1.8 }}>{d.footer.tagline}</p>
          </div>
          <div>
            <div style={{ color:"#fff",fontWeight:600,marginBottom:14,fontSize:13,letterSpacing:.5,textTransform:"uppercase" }}>Pages</div>
            {d.nav.map(l => <button key={l} onClick={() => setPage(l)} style={{ display:"block",background:"none",border:"none",color:"#94a3b8",fontSize:14,padding:"4px 0",cursor:"pointer",fontFamily:"inherit",textAlign:"left" }}>{l}</button>)}
          </div>
          <div>
            <div style={{ color:"#fff",fontWeight:600,marginBottom:14,fontSize:13,letterSpacing:.5,textTransform:"uppercase" }}>Contact</div>
            <p style={{ color:"#94a3b8",fontSize:14,lineHeight:2.1 }}>📍 {d.school.address}<br/>📞 {d.school.phone}<br/>✉️ {d.school.email}</p>
          </div>
        </div>
        <div style={{ borderTop:"1px solid #ffffff15",paddingTop:20,textAlign:"center",color:"#64748b",fontSize:13 }}>{d.footer.copyright}</div>
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  const { d } = useCtx();
  const [slide, setSlide] = useState(0);
  const slides = d.hero.filter(s => s.active);
  useEffect(() => {
    if (!slides.length) return;
    const t = setInterval(() => setSlide(p => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);
  const hs = d.homeSections;
  return (
    <div>
      <div style={{ position:"relative",overflow:"hidden",minHeight:500 }}>
        {slides.map((s, i) => (
          <div key={s.id} style={{ position:i===0?"relative":"absolute",top:0,left:0,width:"100%",opacity:slide===i?1:0,transition:"opacity .8s ease",pointerEvents:slide===i?"auto":"none",background:`linear-gradient(135deg,${s.bg} 0%,${s.bg}cc 60%,#0f2040 100%)`,padding:"100px 0 80px" }}>
            <div className="container">
              <div style={{ maxWidth:640 }}>
                <span className="tag" style={{ marginBottom:18 }}>Welcome to {d.school.name}</span>
                <h1 className="serif fade-up" style={{ fontSize:"clamp(32px,4.5vw,58px)",color:"#fff",lineHeight:1.15,marginBottom:18,display:"block" }}>{s.title}</h1>
                <p style={{ color:"#bfdbfe",fontSize:18,lineHeight:1.7,marginBottom:36 }}>{s.sub}</p>
                <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
                  <button className="btn-primary" style={{ background:T.gold,color:"#1c1917" }} onClick={() => setPage("Admissions")}>Apply Now →</button>
                  <button className="btn-outline" style={{ borderColor:"#fff",color:"#fff" }} onClick={() => setPage("About")}>Explore School</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8 }}>
          {slides.map((_, i) => <div key={i} onClick={() => setSlide(i)} style={{ width:slide===i?24:8,height:8,borderRadius:4,background:slide===i?T.gold:"#ffffff55",cursor:"pointer",transition:"all .3s" }} />)}
        </div>
      </div>
      <div style={{ background:T.blue,padding:"28px 0" }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign:"center" }}>
            {hs.stats.map((s,i) => (
              <div key={i}>
                <div className="serif" style={{ fontSize:34,color:"#fff",fontWeight:900 }}>{s.value}</div>
                <div style={{ color:"#bfdbfe",fontSize:13,fontWeight:500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <h2 className="serif" style={{ fontSize:"clamp(26px,3.5vw,40px)",color:T.navy,marginBottom:10 }}>{hs.featuresTitle}</h2>
          </div>
          <div className="grid-4">
            {hs.features.map((f,i) => (
              <div key={i} className="card" style={{ padding:28,textAlign:"center" }}>
                <div style={{ fontSize:44,marginBottom:14 }}>{f.icon}</div>
                <h3 className="serif" style={{ color:T.navy,fontSize:17,marginBottom:8 }}>{f.title}</h3>
                <p style={{ color:T.muted,fontSize:14,lineHeight:1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section" style={{ background:"#fff",paddingTop:64,paddingBottom:64 }}>
        <div className="container">
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32,flexWrap:"wrap",gap:12 }}>
            <h2 className="serif" style={{ fontSize:"clamp(24px,3vw,36px)",color:T.navy }}>Latest News</h2>
            <button className="btn-outline" onClick={() => setPage("News")}>View All</button>
          </div>
          <div className="grid-3">
            {d.news.filter(n => n.published).slice(0,3).map(n => (
              <div key={n.id} className="card" style={{ padding:24,borderTop:`3px solid ${T.blue}` }}>
                <span className="tag" style={{ marginBottom:12 }}>{n.category}</span>
                <h4 style={{ color:T.navy,fontSize:15,fontWeight:700,marginBottom:8,lineHeight:1.4 }}>{n.title}</h4>
                <p style={{ color:T.muted,fontSize:13,lineHeight:1.6,marginBottom:12 }}>{n.body}</p>
                <p style={{ color:T.slate,fontSize:12 }}>📅 {n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section" style={{ background:T.navy }}>
        <div className="container">
          <div style={{ textAlign:"center",marginBottom:40 }}>
            <h2 className="serif" style={{ color:"#fff",fontSize:"clamp(24px,3vw,36px)" }}>What People Say</h2>
          </div>
          <div className="grid-3">
            {d.testimonials.map(t => (
              <div key={t.id} className="card" style={{ padding:28,background:"#ffffff0d",border:"1px solid #ffffff15" }}>
                <div style={{ fontSize:32,color:T.gold,marginBottom:12 }}>"</div>
                <p style={{ color:"#e2e8f0",fontSize:15,lineHeight:1.7,marginBottom:16,fontStyle:"italic" }}>{t.text}</p>
                <div style={{ fontWeight:700,color:"#fff",fontSize:14 }}>{t.name}</div>
                <div style={{ color:"#94a3b8",fontSize:12 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section" style={{ background:T.goldLight }}>
        <div className="container">
          <h2 className="serif" style={{ textAlign:"center",color:T.navy,fontSize:"clamp(24px,3vw,36px)",marginBottom:36 }}>Board Toppers 2024</h2>
          <div className="grid-3">
            {d.toppers.map((t,i) => (
              <div key={t.id} className="card" style={{ padding:28,textAlign:"center",borderTop:`4px solid ${[T.gold,"#c0c0c0","#cd7f32"][i]||T.gold}` }}>
                <div style={{ fontSize:40,marginBottom:10 }}>{"🥇🥈🥉"[i]}</div>
                <h3 style={{ color:T.navy,fontWeight:700,marginBottom:4 }}>{t.name}</h3>
                <p style={{ color:T.muted,fontSize:13,marginBottom:6 }}>{t.class}</p>
                <div style={{ color:T.blue,fontWeight:800,fontSize:24,fontFamily:"Merriweather,serif" }}>{t.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background:`linear-gradient(135deg,${T.teal},#0f766e)`,padding:"64px 0",textAlign:"center" }}>
        <div className="container">
          <h2 className="serif" style={{ color:"#fff",fontSize:"clamp(24px,3.5vw,42px)",marginBottom:16 }}>Ready to Begin Your Journey?</h2>
          <p style={{ color:"#ccfbf1",fontSize:17,marginBottom:32 }}>Admissions open for 2025–26. Limited seats.</p>
          <button className="btn-primary" style={{ background:T.gold,color:"#1c1917",fontSize:16,padding:"14px 36px" }} onClick={() => setPage("Admissions")}>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const { d } = useCtx();
  const a = d.about;
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,${T.navy},#1e3a5f)`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>{a.title}</h1>
          <p style={{ color:"#94a3b8",fontSize:17 }}>Our story, mission, and the values we stand for.</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ marginBottom:40 }}>
            <div className="card" style={{ padding:32,borderTop:`4px solid ${T.blue}` }}>
              <div style={{ fontSize:36,marginBottom:12 }}>🎯</div>
              <h3 className="serif" style={{ color:T.navy,fontSize:22,marginBottom:12 }}>Mission</h3>
              <p style={{ color:T.muted,lineHeight:1.8 }}>{a.mission}</p>
            </div>
            <div className="card" style={{ padding:32,borderTop:`4px solid ${T.teal}` }}>
              <div style={{ fontSize:36,marginBottom:12 }}>🔭</div>
              <h3 className="serif" style={{ color:T.navy,fontSize:22,marginBottom:12 }}>Vision</h3>
              <p style={{ color:T.muted,lineHeight:1.8 }}>{a.vision}</p>
            </div>
          </div>
          <div className="card" style={{ padding:36,marginBottom:32 }}>
            <h3 className="serif" style={{ color:T.navy,fontSize:24,marginBottom:16 }}>Our History</h3>
            <p style={{ color:T.muted,lineHeight:1.9,fontSize:16 }}>{a.history}</p>
          </div>
          <div className="card" style={{ padding:36,marginBottom:40,background:`linear-gradient(135deg,${T.navy}08,${T.teal}08)`,border:`1px solid ${T.blue}25` }}>
            <div style={{ display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap" }}>
              <div style={{ width:80,height:80,background:T.navy,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,flexShrink:0 }}>👩‍💼</div>
              <div>
                <span className="tag" style={{ marginBottom:8 }}>Principal's Message</span>
                <h3 style={{ color:T.navy,fontWeight:700,fontSize:18,marginBottom:10 }}>{a.principalName}</h3>
                <p style={{ color:T.muted,lineHeight:1.8,fontStyle:"italic",fontSize:15 }}>"{a.principalMsg}"</p>
              </div>
            </div>
          </div>
          <h2 className="serif" style={{ color:T.navy,fontSize:28,marginBottom:24 }}>Core Values</h2>
          <div className="grid-4">
            {a.values.map((v,i) => (
              <div key={i} style={{ background:[T.blue,T.teal,T.gold,"#7c3aed"][i],borderRadius:12,padding:"28px 20px",textAlign:"center",color:"#fff" }}>
                <div style={{ fontSize:32,marginBottom:10 }}>{"🌟⚡🤝🏆"[i*2]}</div>
                <div className="serif" style={{ fontSize:18,fontWeight:700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AcademicsPage() {
  const { d } = useCtx();
  const ac = d.academics;
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,${T.teal},#0f766e)`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>{ac.title}</h1>
          <p style={{ color:"#ccfbf1",fontSize:17,maxWidth:600 }}>{ac.subtitle}</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-3">
            {ac.programs.map((p,i) => (
              <div key={i} className="card" style={{ padding:28 }}>
                <div style={{ fontSize:40,marginBottom:14 }}>{p.icon}</div>
                <h3 className="serif" style={{ color:T.navy,fontSize:18,marginBottom:10 }}>{p.name}</h3>
                <p style={{ color:T.muted,fontSize:14,lineHeight:1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdmissionsPage() {
  const { d } = useCtx();
  const ad = d.admissions;
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,#7c3aed,#4f46e5)`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>{ad.title}</h1>
          <p style={{ color:"#e0e7ff",fontSize:17 }}>{ad.subtitle}</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display:"grid",gridTemplateColumns:"1fr 320px",gap:40,alignItems:"start" }}>
            <div>
              <h2 className="serif" style={{ color:T.navy,fontSize:28,marginBottom:32 }}>How to Apply</h2>
              {ad.steps.map((s,i) => (
                <div key={i} style={{ display:"flex",gap:18,marginBottom:24 }}>
                  <div style={{ width:44,height:44,background:T.blue,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:18,flexShrink:0 }}>{i+1}</div>
                  <div className="card" style={{ flex:1,padding:20 }}><p style={{ color:T.text,fontSize:15,lineHeight:1.6 }}>{s}</p></div>
                </div>
              ))}
            </div>
            <div>
              <div className="card" style={{ padding:28,background:T.navy,marginBottom:20 }}>
                <h3 className="serif" style={{ fontSize:18,marginBottom:16,color:T.gold }}>Key Details</h3>
                <p style={{ fontSize:14,marginBottom:10,color:"#e2e8f0" }}>📅 Deadline: <strong>{ad.deadline}</strong></p>
                <p style={{ fontSize:14,color:"#e2e8f0" }}>💳 Form Fee: <strong>{ad.fee}</strong></p>
              </div>
              <div className="card" style={{ padding:24,borderLeft:`4px solid ${T.gold}` }}>
                <div style={{ fontSize:28,marginBottom:10 }}>🎓</div>
                <h4 style={{ color:T.navy,fontSize:16,marginBottom:8 }}>Scholarship</h4>
                <p style={{ color:T.muted,fontSize:14,lineHeight:1.6 }}>{ad.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsPage() {
  const { d } = useCtx();
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,${T.gold},#d97706)`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>Upcoming Events</h1>
        </div>
      </div>
      <div className="section">
        <div className="container" style={{ maxWidth:760 }}>
          {d.events.map(e => (
            <div key={e.id} className="card" style={{ padding:24,marginBottom:16,borderLeft:`4px solid ${e.active?T.blue:T.slate}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
              <div>
                <h3 style={{ color:T.navy,fontWeight:700,fontSize:16,marginBottom:4 }}>{e.title}</h3>
                <p style={{ color:T.muted,fontSize:13 }}>📅 {e.date} &nbsp; 📍 {e.venue}</p>
              </div>
              <span className={`tag ${e.active?"green":""}`}>{e.active?"Active":"Upcoming"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsPage() {
  const { d } = useCtx();
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,${T.navy},#1e3a5f)`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>News & Blog</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-3">
            {d.news.filter(n => n.published).map(n => (
              <div key={n.id} className="card" style={{ padding:28,borderTop:`3px solid ${T.blue}` }}>
                <span className="tag" style={{ marginBottom:12 }}>{n.category}</span>
                <h3 className="serif" style={{ color:T.navy,fontSize:18,marginBottom:10,lineHeight:1.3 }}>{n.title}</h3>
                <p style={{ color:T.muted,fontSize:14,lineHeight:1.6,marginBottom:16 }}>{n.body}</p>
                <p style={{ color:T.slate,fontSize:12 }}>📅 {n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const { d, setD } = useCtx();
  const [form, setForm] = useState({ name:"",email:"",message:"" });
  const [sent, setSent] = useState(false);
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg,${T.teal},${T.navy})`,padding:"72px 0" }}>
        <div className="container">
          <h1 className="serif" style={{ color:"#fff",fontSize:"clamp(28px,4vw,50px)",marginBottom:10 }}>Get In Touch</h1>
          <p style={{ color:"#94a3b8",fontSize:17 }}>We'd love to hear from you.</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:40 }}>
            <div>
              {sent ? (
                <div className="card" style={{ padding:40,textAlign:"center" }}>
                  <div style={{ fontSize:52,marginBottom:16 }}>✅</div>
                  <h3 className="serif" style={{ color:T.teal,marginBottom:10 }}>Message Sent!</h3>
                  <p style={{ color:T.muted }}>We'll respond within 24 hours.</p>
                  <button className="btn-primary" style={{ marginTop:20 }} onClick={() => { setForm({name:"",email:"",message:""}); setSent(false); }}>Send Another</button>
                </div>
              ) : (
                <div className="card" style={{ padding:32 }}>
                  <h2 className="serif" style={{ color:T.navy,fontSize:24,marginBottom:24 }}>Send a Message</h2>
                  <div style={{ marginBottom:16 }}><label className="label">Your Name</label><input className="input" value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} placeholder="Your name" /></div>
                  <div style={{ marginBottom:16 }}><label className="label">Email Address</label><input className="input" type="email" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))} placeholder="email@example.com" /></div>
                  <div style={{ marginBottom:20 }}><label className="label">Message</label><textarea className="input" rows={5} value={form.message} onChange={e => setForm(p=>({...p,message:e.target.value}))} placeholder="Your message..." /></div>
                  <button className="btn-primary" onClick={() => {
                    if (!form.name || !form.email) return;
                    setD(p => ({...p,messages:[{id:Date.now(),...form,date:new Date().toISOString().split("T")[0],read:false},...p.messages]}));
                    setSent(true);
                  }}>Send Message →</button>
                </div>
              )}
            </div>
            <div>
              <h2 className="serif" style={{ color:T.navy,fontSize:24,marginBottom:24 }}>Contact Details</h2>
              {[["📍","Address",d.school.address],["📞","Phone",d.school.phone],["✉️","Email",d.school.email],["🕐","Office Hours",d.contact.officeHours]].map(([ico,lbl,val],i) => (
                <div key={i} className="card" style={{ padding:20,display:"flex",gap:16,marginBottom:16 }}>
                  <div style={{ fontSize:28 }}>{ico}</div>
                  <div>
                    <div style={{ fontSize:11,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:.5,marginBottom:2 }}>{lbl}</div>
                    <div style={{ color:T.text,fontWeight:500 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// ADMIN PANEL — All form sub-components are proper named functions
// ════════════════════════════════════════════════════════════════

// These are extracted so hooks are never called conditionally or inside objects
function AddNewsForm({ onAdd }) {
  const [form, setForm] = useState({ title:"",date:"",category:"Achievement",body:"",published:true });
  return (
    <div>
      <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:12,marginBottom:12 }}>
        <div><label className="label">Title</label><input className="input" value={form.title} onChange={e => setForm(p=>({...p,title:e.target.value}))} /></div>
        <div><label className="label">Date</label><input className="input" type="date" value={form.date} onChange={e => setForm(p=>({...p,date:e.target.value}))} /></div>
        <div>
          <label className="label">Category</label>
          <select className="input" value={form.category} onChange={e => setForm(p=>({...p,category:e.target.value}))}>
            {["Achievement","Infrastructure","Event","General"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom:12 }}><label className="label">Body</label><textarea className="input" rows={3} value={form.body} onChange={e => setForm(p=>({...p,body:e.target.value}))} /></div>
      <label style={{ display:"flex",alignItems:"center",gap:8,cursor:"pointer",marginBottom:16,fontSize:14 }}>
        <input type="checkbox" checked={form.published} onChange={e => setForm(p=>({...p,published:e.target.checked}))} />
        Publish immediately
      </label>
      <button className="btn-primary" onClick={() => { if (!form.title) return; onAdd({id:Date.now(),...form}); setForm({title:"",date:"",category:"Achievement",body:"",published:true}); }}>Add Article</button>
    </div>
  );
}

function AddEventForm({ onAdd }) {
  const [form, setForm] = useState({ title:"",date:"",venue:"",active:true });
  return (
    <div>
      <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:12,marginBottom:12 }}>
        <div><label className="label">Event Title</label><input className="input" value={form.title} onChange={e => setForm(p=>({...p,title:e.target.value}))} /></div>
        <div><label className="label">Date</label><input className="input" type="date" value={form.date} onChange={e => setForm(p=>({...p,date:e.target.value}))} /></div>
        <div><label className="label">Venue</label><input className="input" value={form.venue} onChange={e => setForm(p=>({...p,venue:e.target.value}))} /></div>
      </div>
      <button className="btn-primary" onClick={() => { if (!form.title) return; onAdd({id:Date.now(),...form}); setForm({title:"",date:"",venue:"",active:true}); }}>Add Event</button>
    </div>
  );
}

function AddTestimonialForm({ onAdd }) {
  const [form, setForm] = useState({ name:"",role:"",text:"" });
  return (
    <div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12 }}>
        <div><label className="label">Name</label><input className="input" value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} /></div>
        <div><label className="label">Role</label><input className="input" value={form.role} onChange={e => setForm(p=>({...p,role:e.target.value}))} /></div>
      </div>
      <div style={{ marginBottom:12 }}><label className="label">Testimonial</label><textarea className="input" rows={3} value={form.text} onChange={e => setForm(p=>({...p,text:e.target.value}))} /></div>
      <button className="btn-primary" onClick={() => { if (!form.name) return; onAdd({id:Date.now(),...form}); setForm({name:"",role:"",text:""}); }}>Add Testimonial</button>
    </div>
  );
}

function AddTopperForm({ onAdd }) {
  const [form, setForm] = useState({ name:"",class:"",percentage:"",year:"2024" });
  return (
    <div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:12 }}>
        {[["name","Name"],["class","Class/Stream"],["percentage","Percentage"],["year","Year"]].map(([k,l]) => (
          <div key={k}><label className="label">{l}</label><input className="input" value={form[k]} onChange={e => setForm(p=>({...p,[k]:e.target.value}))} /></div>
        ))}
      </div>
      <button className="btn-primary" onClick={() => { if (!form.name) return; onAdd({id:Date.now(),...form}); setForm({name:"",class:"",percentage:"",year:"2024"}); }}>Add Topper</button>
    </div>
  );
}

function AddGalleryItemForm({ onAdd }) {
  const [title, setTitle] = useState("");
  return (
    <div style={{ display:"flex",gap:12 }}>
      <input className="input" value={title} placeholder="Gallery item title" onChange={e => setTitle(e.target.value)} onKeyDown={e => { if (e.key==="Enter" && title) { onAdd({id:Date.now(),title,emoji:"📸"}); setTitle(""); }}} />
      <button className="btn-primary" onClick={() => { if (!title) return; onAdd({id:Date.now(),title,emoji:"📸"}); setTitle(""); }}>Add</button>
    </div>
  );
}

// ── Admin sidebar definition ──────────────────────────────────────────────────
const ADMIN_TABS = [
  { key:"dashboard",    label:"Dashboard",           icon:"⊞" },
  { key:"site",         label:"Site Settings",        icon:"⚙" },
  { key:"logo",         label:"Logo & Branding",      icon:"🎨" },
  { key:"nav",          label:"Navigation Menu",      icon:"☰" },
  { key:"homepage",     label:"Homepage Sections",    icon:"🏠" },
  { key:"about",        label:"About Page",           icon:"ℹ" },
  { key:"academics",    label:"Academics Page",       icon:"📚" },
  { key:"admissions",   label:"Admissions Page",      icon:"🎓" },
  { key:"contact",      label:"Contact Page",         icon:"📞" },
  { key:"sliders",      label:"Hero Sliders",         icon:"🖼" },
  { key:"news",         label:"News / Blog",          icon:"📰" },
  { key:"events",       label:"Events",               icon:"📅" },
  { key:"testimonials", label:"Testimonials",         icon:"💬" },
  { key:"stats",        label:"Stats",                icon:"📊" },
  { key:"messages",     label:"Contact Messages",     icon:"✉" },
  { key:"footer",       label:"Footer",               icon:"⬇" },
  { key:"toppers",      label:"Topper Students",      icon:"🏅" },
  { key:"parliament",   label:"Students' Parliament", icon:"🏛" },
  { key:"principal",    label:"Principal's Message",  icon:"👩‍💼" },
];

// ── Admin Panel ───────────────────────────────────────────────────────────────
function AdminPanel({ onClose }) {
  const { d, setD } = useCtx();
  const [tab, setTab] = useState("dashboard");
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);
  const [local, setLocal] = useState(() => JSON.parse(JSON.stringify(d)));
  const [saved, setSaved] = useState(false);

  function save() { setD(JSON.parse(JSON.stringify(local))); setSaved(true); setTimeout(() => setSaved(false), 2500); }

  function upd(path, val) {
    setLocal(p => {
      const n = JSON.parse(JSON.stringify(p));
      let cur = n;
      const keys = path.split(".");
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
      cur[keys[keys.length - 1]] = val;
      return n;
    });
  }

  // ── Login screen ──
  if (!auth) return (
    <div style={{ position:"fixed",inset:0,background:"#000000aa",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ background:"#fff",borderRadius:16,padding:44,width:380,boxShadow:"0 24px 60px rgba(0,0,0,.35)" }}>
        <div style={{ textAlign:"center",marginBottom:28 }}>
          <div style={{ width:60,height:60,background:T.navy,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,margin:"0 auto 16px" }}>🔐</div>
          <h2 className="serif" style={{ color:T.navy,fontSize:24,marginBottom:4 }}>Admin Login</h2>
          <p style={{ color:T.muted,fontSize:14 }}>Vidya School CMS</p>
        </div>
        <label className="label">Password</label>
        <input className="input" type="password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key==="Enter" && (pw==="admin123" ? setAuth(true) : alert("Wrong! Use: admin123"))} placeholder="Enter password" style={{ marginBottom:8 }} />
        <p style={{ color:T.muted,fontSize:12,marginBottom:20 }}>Demo password: <strong>admin123</strong></p>
        <button className="btn-primary" style={{ width:"100%",padding:"12px" }} onClick={() => pw==="admin123" ? setAuth(true) : alert("Wrong! Use: admin123")}>Sign In</button>
        <button onClick={onClose} style={{ display:"block",marginTop:12,width:"100%",background:"none",border:"none",color:T.muted,cursor:"pointer",fontSize:14 }}>← Back to Website</button>
      </div>
    </div>
  );

  // ── Field helper (safe — no hooks, just JSX) ──
  function F({ label, path, multiline, type="text" }) {
    const keys = path.split(".");
    let val = local;
    for (const k of keys) val = val?.[k];
    return (
      <div style={{ marginBottom:16 }}>
        <label className="label">{label}</label>
        {multiline
          ? <textarea className="input" rows={3} value={val||""} onChange={e => upd(path, e.target.value)} style={{ resize:"vertical" }} />
          : <input className="input" type={type} value={val||""} onChange={e => upd(path, e.target.value)} />}
      </div>
    );
  }

  function SaveBar() {
    return (
      <div style={{ position:"sticky",bottom:0,background:"#fff",borderTop:`1px solid ${T.border}`,padding:"14px 0",display:"flex",alignItems:"center",gap:16,marginTop:32 }}>
        <button className="btn-primary" onClick={save} style={{ background:T.teal }}>💾 Save Changes</button>
        {saved && <span style={{ color:T.teal,fontWeight:600,fontSize:14 }}>✓ Saved!</span>}
      </div>
    );
  }

  const dashStats = [
    { label:"Published News", val:local.news.filter(n=>n.published).length, total:local.news.length, icon:"📰", color:T.blue, goTo:"news" },
    { label:"Active Events", val:local.events.filter(e=>e.active).length, total:local.events.length, icon:"📅", color:T.teal, goTo:"events" },
    { label:"Testimonials", val:local.testimonials.length, total:local.testimonials.length, icon:"💬", color:"#7c3aed", goTo:"testimonials" },
    { label:"Unread Messages", val:local.messages.filter(m=>!m.read).length, total:local.messages.length, icon:"✉", color:T.gold, goTo:"messages" },
  ];
  const quickActions = [
    {label:"Logo & Branding",icon:"🎨",tab:"logo"},{label:"Navigation Menu",icon:"☰",tab:"nav"},{label:"Homepage Sections",icon:"🏠",tab:"homepage"},
    {label:"Manage Sliders",icon:"🖼",tab:"sliders"},{label:"Add News Article",icon:"📰",tab:"news"},{label:"Add Event",icon:"📅",tab:"events"},
    {label:"Update Settings",icon:"⚙",tab:"site"},{label:"View Messages",icon:"✉",tab:"messages"},{label:"Update Stats",icon:"📊",tab:"stats"},
  ];

  // ── Tab content (no hooks here — only JSX and callbacks) ──
  const renderTab = () => {
    switch (tab) {
      case "dashboard": return (
        <div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:20,marginBottom:32 }}>
            {dashStats.map((s,i) => (
              <div key={i} className="card" style={{ padding:24,cursor:"pointer",borderTop:`3px solid ${s.color}`,transition:"transform .15s" }} onClick={() => setTab(s.goTo)}
                onMouseEnter={e => e.currentTarget.style.transform="translateY(-3px)"} onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                  <span style={{ fontSize:26 }}>{s.icon}</span>
                  <span style={{ color:T.muted,fontSize:18,opacity:.4 }}>→</span>
                </div>
                <div style={{ fontSize:36,fontWeight:800,color:s.color,fontFamily:"Merriweather,serif",lineHeight:1 }}>{s.val}</div>
                <div style={{ color:T.muted,fontSize:13,marginTop:4 }}>{s.label} / {s.total} total</div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding:28 }}>
            <h3 style={{ color:T.navy,fontWeight:700,fontSize:16,marginBottom:20 }}>Quick Actions</h3>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12 }}>
              {quickActions.map((q,i) => (
                <button key={i} onClick={() => setTab(q.tab)} style={{ background:T.slateLight,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,fontFamily:"inherit",fontSize:14,color:T.navy,fontWeight:500,transition:"all .15s",textAlign:"left" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.bluePale; e.currentTarget.style.borderColor=T.blue; }}
                  onMouseLeave={e => { e.currentTarget.style.background=T.slateLight; e.currentTarget.style.borderColor=T.border; }}>
                  <span style={{ fontSize:20 }}>{q.icon}</span>{q.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );

      case "site": return <div className="card" style={{ padding:32 }}><F label="School Name" path="school.name" /><F label="Tagline" path="school.tagline" /><F label="Founded Year" path="school.founded" /><F label="Phone" path="school.phone" /><F label="Email" path="school.email" /><F label="Address" path="school.address" multiline /><F label="Office Hours" path="contact.officeHours" /><SaveBar /></div>;

      case "logo": return (
        <div className="card" style={{ padding:32 }}>
          <F label="Logo Emoji / Icon" path="logo.emoji" />
          <F label="Brand Color" path="logo.color" type="color" />
          <div style={{ marginTop:20,padding:20,background:T.slateLight,borderRadius:10,display:"flex",alignItems:"center",gap:16 }}>
            <div style={{ width:52,height:52,background:local.logo.color,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26 }}>{local.logo.emoji}</div>
            <div><div style={{ fontWeight:700,color:T.navy }}>{local.school.name}</div><div style={{ fontSize:12,color:T.muted }}>Logo Preview</div></div>
          </div>
          <SaveBar />
        </div>
      );

      case "nav": return (
        <div className="card" style={{ padding:32 }}>
          <h3 style={{ color:T.navy,marginBottom:20,fontWeight:700 }}>Navigation Menu Items</h3>
          {local.nav.map((item,i) => (
            <div key={i} style={{ display:"flex",gap:10,marginBottom:12,alignItems:"center" }}>
              <span style={{ color:T.muted,fontSize:13,width:24,textAlign:"center" }}>{i+1}</span>
              <input className="input" value={item} onChange={e => { const n=[...local.nav]; n[i]=e.target.value; setLocal(p=>({...p,nav:n})); }} style={{ flex:1 }} />
              <button onClick={() => setLocal(p=>({...p,nav:p.nav.filter((_,j)=>j!==i)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:7,padding:"8px 12px",cursor:"pointer",fontSize:13,fontWeight:600 }}>✕</button>
            </div>
          ))}
          <button className="btn-outline" style={{ marginTop:8 }} onClick={() => setLocal(p=>({...p,nav:[...p.nav,"New Page"]}))}>+ Add Item</button>
          <SaveBar />
        </div>
      );

      case "homepage": return (
        <div>
          <div className="card" style={{ padding:32,marginBottom:20 }}>
            <h3 style={{ color:T.navy,marginBottom:20,fontWeight:700 }}>Stats Section</h3>
            <F label="Stats Section Title" path="homeSections.statsTitle" />
            {local.homeSections.stats.map((s,i) => (
              <div key={i} style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:8 }}>
                <div><label className="label">Stat {i+1} Value</label><input className="input" value={s.value} onChange={e => { const n=JSON.parse(JSON.stringify(local.homeSections.stats)); n[i].value=e.target.value; upd("homeSections.stats",n); }} /></div>
                <div><label className="label">Stat {i+1} Label</label><input className="input" value={s.label} onChange={e => { const n=JSON.parse(JSON.stringify(local.homeSections.stats)); n[i].label=e.target.value; upd("homeSections.stats",n); }} /></div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding:32,marginBottom:20 }}>
            <h3 style={{ color:T.navy,marginBottom:20,fontWeight:700 }}>Mission Section</h3>
            <F label="Mission Title" path="homeSections.missionTitle" />
            <F label="Mission Text" path="homeSections.missionText" multiline />
          </div>
          <div className="card" style={{ padding:32 }}>
            <h3 style={{ color:T.navy,marginBottom:20,fontWeight:700 }}>Feature Cards</h3>
            <F label="Features Section Title" path="homeSections.featuresTitle" />
            {local.homeSections.features.map((f,i) => (
              <div key={i} style={{ border:`1px solid ${T.border}`,borderRadius:10,padding:16,marginBottom:12 }}>
                <div style={{ display:"grid",gridTemplateColumns:"80px 1fr 2fr",gap:12 }}>
                  <div><label className="label">Icon</label><input className="input" value={f.icon} onChange={e => { const n=JSON.parse(JSON.stringify(local.homeSections.features)); n[i].icon=e.target.value; upd("homeSections.features",n); }} /></div>
                  <div><label className="label">Title</label><input className="input" value={f.title} onChange={e => { const n=JSON.parse(JSON.stringify(local.homeSections.features)); n[i].title=e.target.value; upd("homeSections.features",n); }} /></div>
                  <div><label className="label">Description</label><input className="input" value={f.desc} onChange={e => { const n=JSON.parse(JSON.stringify(local.homeSections.features)); n[i].desc=e.target.value; upd("homeSections.features",n); }} /></div>
                </div>
              </div>
            ))}
          </div>
          <SaveBar />
        </div>
      );

      case "about": return (
        <div className="card" style={{ padding:32 }}>
          <F label="Page Title" path="about.title" /><F label="History" path="about.history" multiline /><F label="Mission" path="about.mission" multiline /><F label="Vision" path="about.vision" multiline /><F label="Principal Name" path="about.principalName" /><F label="Principal's Quote" path="about.principalMsg" multiline />
          <h4 style={{ color:T.navy,marginBottom:12,marginTop:8,fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:.5 }}>Core Values</h4>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            {local.about.values.map((v,i) => <div key={i}><label className="label">Value {i+1}</label><input className="input" value={v} onChange={e => { const n=[...local.about.values]; n[i]=e.target.value; upd("about.values",n); }} /></div>)}
          </div>
          <SaveBar />
        </div>
      );

      case "academics": return (
        <div className="card" style={{ padding:32 }}>
          <F label="Page Title" path="academics.title" /><F label="Subtitle" path="academics.subtitle" multiline />
          {local.academics.programs.map((p,i) => (
            <div key={i} style={{ border:`1px solid ${T.border}`,borderRadius:10,padding:16,marginBottom:12 }}>
              <h4 style={{ color:T.navy,fontSize:13,marginBottom:12,fontWeight:700 }}>Program {i+1}</h4>
              <div style={{ display:"grid",gridTemplateColumns:"60px 1fr 2fr",gap:12 }}>
                <div><label className="label">Icon</label><input className="input" value={p.icon} onChange={e => { const n=JSON.parse(JSON.stringify(local.academics.programs)); n[i].icon=e.target.value; upd("academics.programs",n); }} /></div>
                <div><label className="label">Name</label><input className="input" value={p.name} onChange={e => { const n=JSON.parse(JSON.stringify(local.academics.programs)); n[i].name=e.target.value; upd("academics.programs",n); }} /></div>
                <div><label className="label">Description</label><input className="input" value={p.desc} onChange={e => { const n=JSON.parse(JSON.stringify(local.academics.programs)); n[i].desc=e.target.value; upd("academics.programs",n); }} /></div>
              </div>
            </div>
          ))}
          <SaveBar />
        </div>
      );

      case "admissions": return (
        <div className="card" style={{ padding:32 }}>
          <F label="Page Title" path="admissions.title" /><F label="Subtitle" path="admissions.subtitle" multiline /><F label="Application Deadline" path="admissions.deadline" /><F label="Form Fee" path="admissions.fee" /><F label="Scholarship Note" path="admissions.note" multiline />
          {local.admissions.steps.map((s,i) => <div key={i} style={{ marginBottom:12 }}><label className="label">Step {i+1}</label><input className="input" value={s} onChange={e => { const n=[...local.admissions.steps]; n[i]=e.target.value; upd("admissions.steps",n); }} /></div>)}
          <SaveBar />
        </div>
      );

      case "contact": return <div className="card" style={{ padding:32 }}><F label="Office Hours" path="contact.officeHours" /><F label="Phone" path="school.phone" /><F label="Email" path="school.email" /><F label="Address" path="school.address" multiline /><SaveBar /></div>;

      case "sliders": return (
        <div>
          {local.hero.map((s,i) => (
            <div key={s.id} className="card" style={{ padding:24,marginBottom:16 }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16 }}>
                <h4 style={{ color:T.navy,fontWeight:700 }}>Slide {i+1}</h4>
                <label style={{ display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13,color:T.muted }}>
                  <input type="checkbox" checked={s.active} onChange={e => { const n=JSON.parse(JSON.stringify(local.hero)); n[i].active=e.target.checked; setLocal(p=>({...p,hero:n})); }} />Active
                </label>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 120px",gap:12 }}>
                <div><label className="label">Title</label><input className="input" value={s.title} onChange={e => { const n=JSON.parse(JSON.stringify(local.hero)); n[i].title=e.target.value; setLocal(p=>({...p,hero:n})); }} /></div>
                <div><label className="label">Subtitle</label><input className="input" value={s.sub} onChange={e => { const n=JSON.parse(JSON.stringify(local.hero)); n[i].sub=e.target.value; setLocal(p=>({...p,hero:n})); }} /></div>
                <div><label className="label">BG Color</label><input type="color" className="input" value={s.bg} onChange={e => { const n=JSON.parse(JSON.stringify(local.hero)); n[i].bg=e.target.value; setLocal(p=>({...p,hero:n})); }} style={{ height:42,padding:4 }} /></div>
              </div>
            </div>
          ))}
          <button className="btn-outline" onClick={() => setLocal(p=>({...p,hero:[...p.hero,{id:Date.now(),title:"New Slide",sub:"Subtitle.",bg:"#1e3a5f",active:true}]}))}>+ Add Slide</button>
          <SaveBar />
        </div>
      );

      case "news": return (
        <div>
          <div className="card" style={{ padding:24,marginBottom:20 }}>
            <h3 style={{ color:T.navy,fontWeight:700,marginBottom:20 }}>Add News Article</h3>
            <AddNewsForm onAdd={item => setLocal(p=>({...p,news:[item,...p.news]}))} />
          </div>
          <div className="card" style={{ padding:24 }}>
            <h3 style={{ color:T.navy,fontWeight:700,marginBottom:16 }}>All Articles</h3>
            {local.news.map(n => (
              <div key={n.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:`1px solid ${T.border}`,gap:12 }}>
                <div style={{ flex:1 }}>
                  <span className={`tag ${n.published?"green":"red"}`} style={{ marginBottom:4 }}>{n.published?"Published":"Draft"}</span>
                  <div style={{ fontWeight:600,color:T.navy,fontSize:14 }}>{n.title}</div>
                  <div style={{ fontSize:12,color:T.muted }}>{n.date} · {n.category}</div>
                </div>
                <div style={{ display:"flex",gap:8 }}>
                  <button onClick={() => setLocal(p=>({...p,news:p.news.map(x=>x.id===n.id?{...x,published:!x.published}:x)}))} style={{ background:T.bluePale,color:T.blue,border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600 }}>{n.published?"Unpublish":"Publish"}</button>
                  <button onClick={() => setLocal(p=>({...p,news:p.news.filter(x=>x.id!==n.id)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600 }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <SaveBar />
        </div>
      );

      case "events": return (
        <div>
          <div className="card" style={{ padding:24,marginBottom:20 }}>
            <h3 style={{ color:T.navy,fontWeight:700,marginBottom:20 }}>Add Event</h3>
            <AddEventForm onAdd={item => setLocal(p=>({...p,events:[item,...p.events]}))} />
          </div>
          <div className="card" style={{ padding:24 }}>
            {local.events.map(e => (
              <div key={e.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:`1px solid ${T.border}`,gap:12 }}>
                <div><div style={{ fontWeight:600,color:T.navy,fontSize:14 }}>{e.title}</div><div style={{ fontSize:12,color:T.muted }}>{e.date} · {e.venue}</div></div>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <label style={{ fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:5 }}>
                    <input type="checkbox" checked={e.active} onChange={() => setLocal(p=>({...p,events:p.events.map(x=>x.id===e.id?{...x,active:!x.active}:x)}))} />Active
                  </label>
                  <button onClick={() => setLocal(p=>({...p,events:p.events.filter(x=>x.id!==e.id)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600 }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <SaveBar />
        </div>
      );

      case "testimonials": return (
        <div>
          <div className="card" style={{ padding:24,marginBottom:20 }}>
            <h3 style={{ color:T.navy,fontWeight:700,marginBottom:16 }}>Add Testimonial</h3>
            <AddTestimonialForm onAdd={item => setLocal(p=>({...p,testimonials:[...p.testimonials,item]}))} />
          </div>
          <div className="card" style={{ padding:24 }}>
            {local.testimonials.map(t => (
              <div key={t.id} style={{ padding:"14px 0",borderBottom:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between",gap:12 }}>
                <div><div style={{ fontWeight:600,color:T.navy,fontSize:14 }}>{t.name} <span style={{ color:T.muted,fontWeight:400 }}>· {t.role}</span></div><p style={{ color:T.muted,fontSize:13,marginTop:4 }}>{t.text}</p></div>
                <button onClick={() => setLocal(p=>({...p,testimonials:p.testimonials.filter(x=>x.id!==t.id)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600,flexShrink:0 }}>Delete</button>
              </div>
            ))}
          </div>
          <SaveBar />
        </div>
      );

      case "stats": return (
        <div className="card" style={{ padding:32 }}>
          <h3 style={{ color:T.navy,marginBottom:20,fontWeight:700 }}>School Statistics</h3>
          {Object.entries(local.stats).map(([k,v]) => (
            <div key={k} style={{ marginBottom:14 }}>
              <label className="label">{k.charAt(0).toUpperCase()+k.slice(1).replace(/([A-Z])/g," $1")}</label>
              <input className="input" value={v} onChange={e => setLocal(p=>({...p,stats:{...p.stats,[k]:e.target.value}}))} />
            </div>
          ))}
          <SaveBar />
        </div>
      );

      case "messages": return (
        <div className="card" style={{ padding:24 }}>
          <h3 style={{ color:T.navy,fontWeight:700,marginBottom:20 }}>Contact Messages ({local.messages.filter(m=>!m.read).length} unread)</h3>
          {local.messages.length===0
            ? <p style={{ color:T.muted,fontSize:14 }}>No messages yet.</p>
            : local.messages.map(m => (
              <div key={m.id} style={{ background:m.read?"#fff":T.bluePale,border:`1px solid ${m.read?T.border:T.blue+"44"}`,borderRadius:10,padding:20,marginBottom:12 }}>
                <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:8 }}>
                  <div><span style={{ fontWeight:700,color:T.navy }}>{m.name}</span> <span style={{ color:T.muted,fontSize:13 }}>· {m.email}</span></div>
                  <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                    <span style={{ fontSize:12,color:T.muted }}>{m.date}</span>
                    {!m.read && <span className="tag">New</span>}
                    <button onClick={() => setLocal(p=>({...p,messages:p.messages.map(x=>x.id===m.id?{...x,read:true}:x)}))} style={{ background:T.bluePale,color:T.blue,border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12 }}>Mark Read</button>
                    <button onClick={() => setLocal(p=>({...p,messages:p.messages.filter(x=>x.id!==m.id)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12 }}>Delete</button>
                  </div>
                </div>
                <p style={{ color:T.text,fontSize:14,lineHeight:1.6 }}>{m.message}</p>
              </div>
            ))
          }
          <SaveBar />
        </div>
      );

      case "footer": return <div className="card" style={{ padding:32 }}><F label="Footer Tagline" path="footer.tagline" multiline /><F label="Copyright Text" path="footer.copyright" /><SaveBar /></div>;

      case "toppers": return (
        <div>
          <div className="card" style={{ padding:24,marginBottom:20 }}>
            <h3 style={{ color:T.navy,fontWeight:700,marginBottom:16 }}>Add Topper</h3>
            <AddTopperForm onAdd={item => setLocal(p=>({...p,toppers:[...p.toppers,item]}))} />
          </div>
          <div className="card" style={{ padding:24 }}>
            {local.toppers.map(t => (
              <div key={t.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:`1px solid ${T.border}` }}>
                <div><div style={{ fontWeight:600,color:T.navy }}>{t.name}</div><div style={{ fontSize:13,color:T.muted }}>{t.class} · {t.year} · <strong style={{ color:T.blue }}>{t.percentage}</strong></div></div>
                <button onClick={() => setLocal(p=>({...p,toppers:p.toppers.filter(x=>x.id!==t.id)}))} style={{ background:"#fee2e2",color:T.red,border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600 }}>Delete</button>
              </div>
            ))}
          </div>
          <SaveBar />
        </div>
      );

      case "parliament": return <div className="card" style={{ padding:32 }}><F label="Section Title" path="parliament.title" /><F label="Description" path="parliament.desc" multiline /><F label="President" path="parliament.president" /><F label="Vice President" path="parliament.vicePresident" /><F label="Secretary" path="parliament.secretary" /><SaveBar /></div>;

      case "principal": return <div className="card" style={{ padding:32 }}><F label="Principal Name" path="principalMsg.name" /><F label="Designation" path="principalMsg.designation" /><F label="Full Message" path="principalMsg.message" multiline /><SaveBar /></div>;

      default: return <div className="card" style={{ padding:32 }}><p style={{ color:T.muted }}>Select a section from the sidebar.</p></div>;
    }
  };

  const activeTab = ADMIN_TABS.find(t => t.key === tab);

  return (
    <div style={{ position:"fixed",inset:0,zIndex:9999,display:"flex",background:T.slateLight }}>
      {/* Sidebar */}
      <div style={{ width:224,background:T.navy,display:"flex",flexDirection:"column",overflowY:"auto",flexShrink:0 }}>
        <div style={{ padding:"20px 18px 16px",borderBottom:"1px solid #ffffff15" }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:36,height:36,background:T.gold,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>{local.logo.emoji}</div>
            <div>
              <div style={{ color:"#fff",fontSize:13,fontWeight:700,lineHeight:1.1 }}>{local.school.name}</div>
              <div style={{ color:"#64748b",fontSize:10,letterSpacing:.5 }}>ADMIN PANEL</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,padding:"8px 0" }}>
          {ADMIN_TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ display:"flex",alignItems:"center",gap:10,width:"100%",padding:"9px 18px",background:tab===t.key?T.blue:"transparent",color:tab===t.key?"#fff":"#94a3b8",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:tab===t.key?600:400,transition:"background .15s",textAlign:"left",borderRadius:tab===t.key?"0 8px 8px 0":0,marginBottom:1 }}>
              <span style={{ fontSize:14,width:18,textAlign:"center" }}>{t.icon}</span>{t.label}
            </button>
          ))}
        </div>
        <div style={{ padding:"12px 18px",borderTop:"1px solid #ffffff15" }}>
          <button onClick={onClose} style={{ display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",color:"#94a3b8",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",padding:"8px 0" }}>↗ View Website</button>
          <button onClick={onClose} style={{ display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",color:"#f87171",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",padding:"8px 0" }}>→ Sign Out</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
        <div style={{ background:"#fff",borderBottom:`1px solid ${T.border}`,padding:"0 28px",height:52,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,fontSize:13,color:T.muted }}>
            <span>Admin</span><span>›</span><span style={{ color:T.navy,fontWeight:600 }}>{activeTab?.label}</span>
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:12 }}>
            {saved && <span style={{ color:T.teal,fontWeight:600,fontSize:13 }}>✓ Saved</span>}
            <div style={{ width:32,height:32,background:T.blue,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14 }}>V</div>
            <span style={{ fontSize:13,fontWeight:600,color:T.navy }}>VSSM Admin</span>
          </div>
        </div>
        <div style={{ flex:1,overflowY:"auto",padding:28 }}>
          <div style={{ marginBottom:24 }}>
            <h1 style={{ fontSize:22,fontWeight:800,color:T.navy,marginBottom:4 }}>{activeTab?.label}</h1>
            {tab==="dashboard" && <p style={{ color:T.muted,fontSize:14 }}>Welcome back! Here's an overview of your website.</p>}
          </div>
          {renderTab()}
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// ROOT
// ════════════════════════════════════════════════════════════════
export default function App() {
  const [d, setD] = useState(INIT);
  const [page, setPage] = useState("Home");
  const [admin, setAdmin] = useState(false);

  const pages = {
    Home: <HomePage setPage={setPage} />,
    About: <AboutPage />,
    Academics: <AcademicsPage />,
    Admissions: <AdmissionsPage />,
    Events: <EventsPage />,
    News: <NewsPage />,
    Contact: <ContactPage />,
  };

  return (
    <Ctx.Provider value={{ d, setD }}>
      <style>{CSS}</style>
      {admin
        ? <AdminPanel onClose={() => setAdmin(false)} />
        : <>
            <Navbar page={page} setPage={setPage} openAdmin={() => setAdmin(true)} />
            <main style={{ minHeight:"70vh" }}>{pages[page] || <HomePage setPage={setPage} />}</main>
            <Footer setPage={setPage} />
          </>
      }
    </Ctx.Provider>
  );
}