import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Stats } from "@/components/sections/Stats"
import { Themes } from "@/components/sections/Themes"
import { Timeline } from "@/components/sections/Timeline"
import { PrizeSection } from "@/components/sections/PrizeSection"
import { Registration } from "@/components/sections/Registration"
import { WhyParticipate } from "@/components/sections/WhyParticipate"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Themes />
        <Timeline />
        <PrizeSection />
        <Registration />
        <WhyParticipate />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
