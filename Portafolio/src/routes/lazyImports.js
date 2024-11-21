import { lazy } from "react"

export const Home=lazy(()=>import('../routes/home/Home.jsx'))
export const About=lazy(()=>import('../routes/about/About.jsx'))
export const Contac=lazy(()=>import('../routes/contact/Contact.jsx'))