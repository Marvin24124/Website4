"use client"
import {useState,type CSSProperties} from "react"
import {LayoutGroup,motion} from "motion/react"
import "./motion-number-counter-utils/index.css"
const pill:CSSProperties={backgroundColor:"white",borderRadius:1000,padding:"8px 12px",display:"flex",alignItems:"center",gap:18,fontFamily:'"Geist Mono", monospace',boxShadow:"0 14px 30px rgba(7,85,145,.16)"}
const control:CSSProperties={backgroundColor:"#e5f2fa",borderRadius:50,padding:8,display:"flex",alignItems:"center",gap:10}
const numberStyle:CSSProperties={fontSize:32,minWidth:28,textAlign:"center",color:"#075591",fontWeight:800,fontVariantNumeric:"tabular-nums"}
const buttonMotion={initial:{boxShadow:"0px 0px 0px 2px #07559100"},whileHover:{scale:1.1},whileTap:{scale:.9},whileFocus:{boxShadow:"0px 0px 0px 2px #075591"},layout:true,style:control}
const pillSpring={type:"spring" as const,stiffness:400,damping:30}
function Icon({type}:{type:"minus"|"plus"}){return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/>{type==="plus"?<path d="M12 5v14"/>:null}</svg>}
export function NumberCounter({min=Number.NEGATIVE_INFINITY,max=Number.POSITIVE_INFINITY}:{min?:number;max?:number}){const [value,setValue]=useState(Math.max(1,min));const step=(delta:number)=>()=>setValue(current=>Math.min(Math.max(current+delta,min),max));return <LayoutGroup><motion.div className="number-counter" layout style={pill} transition={{layout:pillSpring}}><motion.button type="button" aria-label="Eine Kiste weniger" disabled={value<=min} onClick={step(-1)} {...buttonMotion}><Icon type="minus"/></motion.button><motion.span layout style={numberStyle}>{value}</motion.span><motion.button type="button" aria-label="Eine Kiste mehr" disabled={value>=max} onClick={step(1)} {...buttonMotion}><Icon type="plus"/></motion.button></motion.div></LayoutGroup>}
export default NumberCounter
