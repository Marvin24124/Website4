"use client"
import {Button} from "@/components/ui/button"
import {Moon} from "@aliimam/icons"
import {cn} from "@/lib/utils"
import {motion} from "motion/react"
export function ButtonDemo({label,icon=false,onClick}:{label?:string;icon?:boolean;onClick?:()=>void}){return <Button variant="outline" className="relative overflow-hidden border-white/35 bg-white/10 text-white hover:bg-white hover:text-[#075591]" onClick={onClick} aria-label={icon?"Darstellung wechseln":undefined}><div className={cn("-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box]","[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]")}><motion.div className="absolute aspect-square bg-gradient-to-r from-transparent via-[#f6c53b] to-white" animate={{offsetDistance:["0%","100%"]}} style={{width:22,offsetPath:"rect(0 auto auto 0 round 22px)"}} transition={{repeat:Number.POSITIVE_INFINITY,duration:5,ease:"linear"}}/></div>{icon?<Moon/>:label??"Jetzt bestellen"}</Button>}
