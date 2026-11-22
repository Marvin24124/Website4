import {useState} from "react"
import {AnimatePresence,motion} from "motion/react"
import NumberCounter from "@/components/ui/motion-number-counter"
import {ButtonDemo} from "@/components/ui/button-border"

const cards=[
  {title:"Unser Service",text:"Keine Kisten mehr tragen: Wir liefern Getränke bis vor Ihre Haustür und nehmen Leergut wieder mit.",image:"/assets/service.png"},
  {title:"Ihre Bestellung",text:"Bestellen Sie bequem und verpassen Sie keine Lieferung – telefonisch, online oder direkt beim Fahrer.",image:"/assets/bestellung.png"},
  {title:"Die Brauerei RAPP",text:"Eine unabhängige bayerische Familienbrauerei mit langer Tradition und eigenem Charakter.",image:"/assets/brauerei.png"},
  {title:"Der Mineralbrunnen",text:"Natürliches, natriumarmes Mineralwasser aus der RAPPEN-Quelle in 250 Metern Tiefe.",image:"/assets/brunnen.png"},
]

function App(){
  const [menu,setMenu]=useState(false)
  const [notice,setNotice]=useState("")
  const order=()=>{setNotice("Ihre Auswahl wurde vorgemerkt.");setTimeout(()=>setNotice(""),2800)}
  return <div className="min-h-screen bg-[#f5f3ed] text-[#062e4d]">
    <header className="sticky top-0 z-50 border-b border-[#075591]/10 bg-[#f5f3ed]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <button onClick={()=>setMenu(!menu)} className="grid h-12 w-12 place-items-center rounded-full border border-[#075591]/20" aria-label="Menü öffnen"><span className="text-2xl">{menu?"×":"☰"}</span></button>
        <a href="#start"><img src="/assets/rapp-logo.png" alt="RAPP" className="h-16 w-auto"/></a>
        <div className="flex items-center gap-3"><a href="tel:08007277000" className="hidden text-sm font-bold lg:block">0800 7277000</a><div className="rounded-full bg-[#075591]"><ButtonDemo label="Bestellen" onClick={order}/></div></div>
      </div>
      <AnimatePresence>{menu&&<motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-[#075591]/10 bg-white"><div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-7 text-xl font-bold md:grid-cols-4 md:px-10"><a href="#service" onClick={()=>setMenu(false)}>Service</a><a href="#bestellen" onClick={()=>setMenu(false)}>Bestellung</a><a href="#welt" onClick={()=>setMenu(false)}>RAPP-Welt</a><a href="#kontakt" onClick={()=>setMenu(false)}>Kontakt</a></div></motion.nav>}</AnimatePresence>
    </header>

    <main id="start">
      <section className="relative overflow-hidden bg-[#075591] text-white">
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full border-[60px] border-white/5"/>
        <div className="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1fr_1.15fr]">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="relative z-10">
            <p className="mb-6 text-sm font-extrabold uppercase tracking-[.24em] text-[#f6c53b]">Ihr bayerischer Getränke-Heimdienst</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8.5rem)] uppercase leading-[.82] tracking-[-.07em]">Getränke.<br/><span className="text-[#f6c53b]">Direkt.</span><br/>Daheim.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">Wir bringen RAPP-Getränke zuverlässig zu Ihnen nach Hause. Ohne Schleppen, mit persönlichem Service und einem Mehrwegsystem, das seit Generationen funktioniert.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonDemo label="Liefergebiet prüfen" onClick={()=>document.querySelector("#bestellen")?.scrollIntoView({behavior:"smooth"})}/><a href="#service" className="inline-flex h-11 items-center rounded-full border border-white/30 px-5 text-sm font-bold hover:bg-white hover:text-[#075591]">So funktioniert’s</a></div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}} className="relative flex min-h-[520px] items-center justify-center">
            <div className="absolute inset-8 rounded-[50%] bg-[#f6c53b]"/>
            <img src="/assets/apfel-birne.webp" alt="RAPPEN Apfel- und Birnensaft" className="relative z-10 max-h-[610px] w-full object-contain drop-shadow-2xl"/>
            <div className="absolute bottom-2 left-0 z-20 max-w-[250px] rounded-3xl bg-white p-5 text-[#075591] shadow-soft"><b className="text-xl">Neu gemischt</b><p className="mt-2 text-sm leading-6 text-[#335c79]">70 % Apfel, 30 % Birne – naturtrüb, vollmundig und harmonisch fruchtig.</p></div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 text-center md:py-32">
        <p className="eyebrow">Ein herzliches Grüß Gott aus Lorsch</p>
        <h2 className="headline mx-auto mt-5 max-w-5xl">Wir nehmen Ihnen die Getränkebesorgung ab.</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#496477]">Persönlich, verlässlich und bequem: Wählen Sie Ihre Getränke, wir bringen die Kisten bis an die Haustür und nehmen Ihr Leergut direkt wieder mit.</p>
      </section>

      <section id="service" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Rundum versorgt</p><h2 className="headline mt-4">Die RAPP-Welt</h2></div><p className="max-w-md text-lg leading-8 text-[#496477]">Von der eigenen Quelle und Brauerei bis zur Lieferung: bei RAPP kommt alles aus einer Hand.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{cards.map((card,index)=><motion.article key={card.title} whileHover={{y:-8}} transition={{type:"spring",stiffness:300}} className="group overflow-hidden rounded-[2rem] bg-[#f5f3ed]"><div className="flex h-64 items-end justify-center overflow-hidden bg-[#e5f2fa]"><img src={card.image} alt="" className="h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-105"/></div><div className="p-7"><span className="text-xs font-extrabold tracking-[.18em] text-[#d31f36]">0{index+1}</span><h3 className="mt-4 text-2xl font-black">{card.title}</h3><p className="mt-4 leading-7 text-[#496477]">{card.text}</p><a href="#kontakt" className="mt-6 inline-block border-b-2 border-[#f6c53b] pb-1 font-bold">Mehr erfahren</a></div></motion.article>)}</div>
        </div>
      </section>

      <section id="bestellen" className="overflow-hidden bg-[#f6c53b] py-24 md:py-32"><div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2"><div><p className="eyebrow !text-[#075591]">Einfach ausprobieren</p><h2 className="headline mt-5">Wie viele Kisten dürfen wir bringen?</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#254b65]">Stellen Sie Ihre Liefermenge ein. Die Demo zeigt, wie einfach eine Bestellung im neuen Auftritt funktionieren kann.</p><div className="mt-9 flex flex-wrap items-center gap-5"><NumberCounter min={1} max={12}/><button onClick={order} className="h-14 rounded-full bg-[#d31f36] px-7 font-extrabold text-white shadow-lg transition hover:-translate-y-1">Auswahl vormerken</button></div></div><div className="relative min-h-[420px]"><div className="absolute inset-0 rotate-3 rounded-[3rem] bg-[#075591]"/><img src="/assets/fahrer.png" alt="RAPP Fahrer bei der Getränkelieferung" className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-2xl"/></div></div></section>

      <section id="welt" className="bg-[#062e4d] py-20 text-white"><div className="mx-auto grid max-w-[1440px] gap-px overflow-hidden rounded-[2rem] bg-white/15 md:grid-cols-4">{[["Sortiment","Alle Getränke im Überblick"],["Liefergebiet","Werden Sie von RAPP beliefert?"],["Mehrwegsystem","Nachhaltig im Kreislauf"],["Gutschein","RAPP frei Haus verschenken"]].map(([title,text])=><a href="#kontakt" key={title} className="group bg-[#062e4d] p-8 transition hover:bg-[#075591] md:p-10"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#f6c53b]">Auf einen Blick</span><h3 className="mt-10 text-2xl font-black">{title}</h3><p className="mt-3 text-white/65">{text}</p><span className="mt-10 block h-10 w-10 rounded-full border border-white/30 text-center text-2xl leading-9 transition group-hover:bg-white group-hover:text-[#075591]">+</span></a>)}</div></section>
    </main>

    <footer id="kontakt" className="bg-white"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr_1fr] md:px-10"><div><img src="/assets/rapp-logo.png" alt="RAPP" className="h-24"/><p className="mt-7 max-w-sm leading-7 text-[#496477]">Gebr. RAPP oHG<br/>Im Rod 1<br/>64653 Lorsch</p></div><div><h3 className="font-black uppercase tracking-wider">Kontakt</h3><a className="mt-6 block text-2xl font-black text-[#075591]" href="tel:08007277000">0800 7277000</a><a className="mt-3 block" href="mailto:info@rapp.de">info@rapp.de</a></div><div><h3 className="font-black uppercase tracking-wider">Rechtliches</h3><div className="mt-6 grid gap-3 text-[#496477]"><a href="#">AGB</a><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">Zahlungsinformationen</a></div></div></div><div className="border-t border-[#075591]/10 px-5 py-6 text-center text-sm text-[#496477]">© 2026 Gebr. RAPP oHG · Konzeptumsetzung nach öffentlicher RAPP-Referenz</div></footer>
    <AnimatePresence>{notice&&<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:30}} className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-[#062e4d] px-6 py-4 font-bold text-white shadow-2xl">{notice}</motion.div>}</AnimatePresence>
  </div>
}
export default App
