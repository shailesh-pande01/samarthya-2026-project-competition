import { SectionTitle } from "@/components/ui/section-title"
import { siteConfig } from "@/constants/data"

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Decorative corners */}
      <div className="hidden md:block absolute top-0 left-0 w-16 h-16 border-t-brutal border-l-brutal border-dark" />
      <div className="hidden md:block absolute top-0 right-0 w-16 h-16 border-t-brutal border-r-brutal border-dark" />
      <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 border-b-brutal border-l-brutal border-dark" />
      <div className="hidden md:block absolute bottom-0 right-0 w-16 h-16 border-b-brutal border-r-brutal border-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={`About ${siteConfig.name}`} />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg border-brutal border-dark p-8 md:p-12 shadow-brutal relative">
            {/* Inner accent */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary border-2 border-dark" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-dark border-2 border-primary" />

            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                <strong className="text-primary font-bold">Samarthya 2026</strong> is a national-level project competition organized by <strong className="font-bold text-dark">{siteConfig.organizer}</strong>, aimed at inspiring students to develop innovative and impactful solutions for real-world challenges.
              </p>
              
              <div className="bg-white border-2 border-dark p-6 my-8 -mx-4 md:mx-0 shadow-brutal-sm">
                <p className="mb-4">The competition revolves around two major themes:</p>
                <ul className="list-none space-y-3 font-bold font-heading text-xl">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary block" /> Women Empowerment
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-dark block" /> Open Innovation
                  </li>
                </ul>
              </div>

              <p>
                It follows a hybrid format involving online submissions and offline/online final presentations.
              </p>
              <p className="text-primary font-bold">
                Students can showcase creativity, technical excellence, research and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
