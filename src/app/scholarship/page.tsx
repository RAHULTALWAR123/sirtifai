import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import NewHeroAbout from "@/components/sections/new-about/NewHeroAbout"
import HowItWorksAbout from "@/components/sections/new-about/HowItWorksAbout"
import SampleQues from "@/components/sections/new-about/SampleQues"
import Fail from "@/components/sections/new-about/Fail"


export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen overflow-x-hidden">
      <Header />
        <NewHeroAbout/>
        <HowItWorksAbout/>
        <SampleQues/>
        <Fail/>
      <Footer />
    </div>
  )
}