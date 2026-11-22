import {useMemo,useState,type CSSProperties} from "react"
import {AnimatePresence,motion} from "motion/react"

export type Product={name:string;category:string;detail:string;price:string;color:string;accent:string;tag?:string}
export const products:Product[]=[
  {name:"Mineralwasser still",category:"Wasser",detail:"Natriumarm & nitratfrei",price:"7,50 €",color:"#d8f1e1",accent:"#419867",tag:"Klassiker"},
  {name:"Mineralwasser medium",category:"Wasser",detail:"Mit wenig Kohlensäure",price:"7,50 €",color:"#dcecf8",accent:"#297cb5"},
  {name:"Mineralwasser spritzig",category:"Wasser",detail:"Mit mehr Kohlensäure",price:"7,50 €",color:"#f7dfe2",accent:"#d43145"},
  {name:"Birne",category:"Wasser Plus",detail:"Kalorienarm, mit Vitamin C",price:"10,00 €",color:"#ecf0c9",accent:"#8b9e32"},
  {name:"Grüner Apfel",category:"Wasser Plus",detail:"Fruchtig & kalorienarm",price:"10,00 €",color:"#d9efcf",accent:"#4b9b48"},
  {name:"Orange-Ingwer",category:"Wasser Plus",detail:"Fruchtig mit feiner Würze",price:"10,00 €",color:"#f9e2c3",accent:"#e8792b"},
  {name:"Zitrone ZERO",category:"ZERO",detail:"Zitronig, nur 1 kcal/100 ml",price:"10,00 €",color:"#f2f0c0",accent:"#d5b82f",tag:"Ohne Zucker"},
  {name:"Orange ZERO",category:"ZERO",detail:"Fruchtig & zuckerfrei",price:"10,50 €",color:"#fee0c1",accent:"#ee7929"},
  {name:"Cola Mix ZERO",category:"ZERO",detail:"Cola-Orange ohne Zucker",price:"10,50 €",color:"#ead4c0",accent:"#865129"},
  {name:"Zitronenlimonade",category:"Limonaden",detail:"Mit Vitamin C",price:"9,00 €",color:"#f8efbd",accent:"#d3b32a"},
  {name:"Orangenlimonade",category:"Limonaden",detail:"5 % Fruchtsaft",price:"9,50 €",color:"#f8d6b6",accent:"#e16d20",tag:"Beliebt"},
  {name:"Cola Mix",category:"Limonaden",detail:"Cola mit Orange",price:"10,00 €",color:"#e6c9b2",accent:"#8b4929"},
  {name:"RAPP-Sport",category:"Erfrischung",detail:"Isotonisch & kalorienarm",price:"13,00 €",color:"#d4edee",accent:"#168c9a"},
  {name:"Pink Grapefruit",category:"Erfrischung",detail:"Herb-fruchtig, 10 % Saft",price:"13,50 €",color:"#fad1dc",accent:"#db5277",tag:"Neu"},
  {name:"Apfel-Schorle",category:"Saft & Schorle",detail:"55 % Saft, ohne Zuckerzusatz",price:"12,00 €",color:"#e8edc5",accent:"#82983e"},
  {name:"Apfel & Birne",category:"Saft & Schorle",detail:"100 % Fruchtsaft",price:"17,00 €",color:"#f2e2b6",accent:"#b68d2f",tag:"Neu gemischt"},
  {name:"Apfelsaft naturtrüb",category:"Saft & Schorle",detail:"Direktsaft, 100 % Frucht",price:"16,00 €",color:"#edd6ae",accent:"#ad772d"},
  {name:"Mineralwasser Plus-Kiste",category:"Mischkisten",detail:"Fünf Sorten, je 4 Flaschen",price:"10,00 €",color:"#dcebe2",accent:"#418f69"},
  {name:"Limo-Kiste",category:"Mischkisten",detail:"Fünf Limonaden gemischt",price:"10,00 €",color:"#f4dfba",accent:"#d6852e"},
  {name:"Saft-Kiste",category:"Mischkisten",detail:"Fünf Säfte gemischt",price:"18,00 €",color:"#efd2b5",accent:"#bd6335"},
  {name:"Pils",category:"Biere",detail:"Hopfenbetontes Premium-Pils",price:"15,00 €",color:"#e7e1c2",accent:"#937b27"},
  {name:"Hell",category:"Biere",detail:"Bayerisches Vollbier",price:"14,00 €",color:"#f1dfad",accent:"#b17a21",tag:"Bayerisch"},
  {name:"Weisse",category:"Biere",detail:"Hefetrüb, mit Flaschengärung",price:"15,00 €",color:"#ead4ae",accent:"#9d6729"},
  {name:"Radler",category:"Biere",detail:"Helles Vollbier & Zitrone ZERO",price:"13,00 €",color:"#e8e3b5",accent:"#9b8b2e"},
]
const categories=["Alle",...Array.from(new Set(products.map(product=>product.category)))]

export default function Sortiment({cart,onAdd,onOpenCart}:{cart:Record<string,number>;onAdd:(name:string)=>void;onOpenCart:()=>void}){
  const [category,setCategory]=useState("Alle")
  const [query,setQuery]=useState("")
  const visible=useMemo(()=>products.filter(product=>(category==="Alle"||product.category===category)&&product.name.toLowerCase().includes(query.toLowerCase())),[category,query])
  const cartCount=Object.values(cart).reduce((sum,value)=>sum+value,0)
  return <section id="sortiment" className="bg-[#edf5f8] py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10">
    <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><p className="eyebrow">Von der Quelle bis zur Brauerei</p><h2 className="headline mt-5">Unser Sortiment</h2></div><div><p className="text-lg leading-8 text-[#496477]">Alle Getränke kommen in der blauen RAPP-Kiste mit 20 Mehrwegflaschen à 0,5 Liter. Die angezeigten Preise verstehen sich pro 10-Liter-Kiste.</p><div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#075591]">Inklusive Zustellung · ohne Pfand</div></div></div>
    <div className="sticky top-24 z-30 -mx-5 mt-12 border-y border-[#075591]/10 bg-[#edf5f8]/95 px-5 py-4 backdrop-blur-xl md:-mx-10 md:px-10"><div className="mx-auto flex max-w-[1360px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-2 overflow-x-auto pb-1">{categories.map(item=><button key={item} onClick={()=>setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold transition ${category===item?"bg-[#075591] text-white":"bg-white text-[#31566f] hover:bg-[#d9ebf3]"}`}>{item}</button>)}</div><div className="flex items-center gap-3"><label className="relative flex-1 lg:w-64"><span className="sr-only">Sortiment durchsuchen</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Getränk suchen …" className="h-11 w-full rounded-full border border-[#075591]/15 bg-white px-5 pr-11 outline-none focus:ring-2 focus:ring-[#075591]"/><span className="absolute right-4 top-2.5" aria-hidden="true">⌕</span></label><div className="grid h-11 min-w-11 place-items-center rounded-full bg-[#f6c53b] px-3 text-sm font-black" aria-label={`${cartCount} vorgemerkte Kisten`}>{cartCount}</div></div></div></div>
    <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><AnimatePresence mode="popLayout">{visible.map(product=><motion.article layout initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.96}} key={product.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_12px_35px_rgba(6,46,77,.07)]"><div className="relative flex h-64 items-end justify-center overflow-hidden" style={{background:product.color}}>{product.tag&&<span className="absolute left-5 top-5 z-10 rounded-full bg-[#d31f36] px-3 py-1 text-xs font-black uppercase tracking-wider text-white">{product.tag}</span>}<div className="product-bottle" style={{"--label":product.accent} as CSSProperties}><span>RAPP</span><b>{product.name}</b></div><div className="absolute bottom-5 right-5 rounded-2xl bg-white/85 px-3 py-2 text-xs font-black text-[#075591] backdrop-blur">20 × 0,5 l</div></div><div className="p-6"><span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d31f36]">{product.category}</span><h3 className="mt-3 min-h-14 text-xl font-black leading-tight">{product.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#5b7180]">{product.detail}</p><div className="mt-5 flex items-center justify-between border-t border-[#075591]/10 pt-5"><div><b className="text-2xl">{product.price}</b><small className="block text-[#6b7e89]">pro Kiste</small></div><button onClick={()=>onAdd(product.name)} className="grid h-12 w-12 place-items-center rounded-full bg-[#075591] text-2xl text-white transition hover:scale-105 hover:bg-[#d31f36]" aria-label={`${product.name} in den Warenkorb legen`}>+</button></div>{cart[product.name]?<p className="mt-3 text-sm font-bold text-[#075591]">{cart[product.name]} × im Warenkorb</p>:null}</div></motion.article>)}</AnimatePresence></motion.div>
    {!visible.length&&<div className="mt-10 rounded-[2rem] bg-white p-12 text-center"><p className="text-xl font-black">Kein Getränk gefunden.</p><button onClick={()=>{setQuery("");setCategory("Alle")}} className="mt-4 font-bold text-[#075591] underline">Filter zurücksetzen</button></div>}
    <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-[#075591] p-7 text-white md:flex-row md:items-center md:p-9"><div><p className="text-2xl font-black">{cartCount?`${cartCount} Kiste${cartCount===1?"":"n"} im Warenkorb`:"Ihre nächste Lieferung"}</p><p className="mt-2 text-white/70">Ihre Auswahl bleibt erhalten, während Sie durch die Website navigieren.</p></div><button onClick={onOpenCart} className="rounded-full bg-[#f6c53b] px-6 py-3 font-black text-[#062e4d]">Warenkorb öffnen</button></div>
  </div></section>
}
