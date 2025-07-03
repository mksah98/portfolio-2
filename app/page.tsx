import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl  py-10">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}
