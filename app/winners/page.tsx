import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { SectionTitle } from "@/components/ui/section-title"
import { Trophy, Medal, Award, CheckCircle2 } from "lucide-react"
import { connectToDatabase } from "@/lib/mongodb"
import TeamResult from "@/lib/models/TeamResult"

export const metadata = {
  title: "Winners | Samarthya 2026",
  description: "Winners of Samarthya 2026",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
}

export default async function WinnersPage() {
  let teams: any[] = [];
  try {
    await connectToDatabase();
    teams = await TeamResult.find({}).sort({ teamName: 1 });
  } catch (e) {
    console.error("Database fetch error:", e);
  }

  // Filter lists
  const winners = teams.filter(t => ["Winner", "1st Runner Up", "2nd Runner Up", "Best Women-Centric Project"].includes(t.round3Status));
  const finalists = teams.filter(t => t.round2Status === "Shortlisted");
  const round1Shortlisted = teams.filter(t => t.round1Status === "Shortlisted");

  const hasResults = winners.length > 0 || finalists.length > 0 || round1Shortlisted.length > 0;

  const getWinnerOrderValue = (status: string) => {
    switch (status) {
      case "Winner": return 1;
      case "1st Runner Up": return 2;
      case "2nd Runner Up": return 3;
      case "Best Women-Centric Project": return 4;
      default: return 5;
    }
  };

  const sortedWinners = [...winners].sort((a, b) => getWinnerOrderValue(a.round3Status) - getWinnerOrderValue(b.round3Status));

  return (
    <>
      <Navbar />
      <main className="min-h-[90vh] bg-bg relative overflow-hidden pb-24">
        {/* Background blueprint grid */}
        <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <SectionTitle title="Samarthya 2026 Results" />

          {!hasResults ? (
            // Announcements Placeholder
            <div className="bg-white border-brutal border-dark shadow-brutal p-12 max-w-2xl mx-auto mt-12 flex flex-col items-center text-center">
              <div className="bg-primary p-6 border-[3px] border-dark mb-8 text-white animate-pulse">
                <Trophy size={64} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-wider mb-4">
                Winner announcements coming soon
              </h2>
              <p className="text-lg text-dark/70 font-medium">
                Check back after some time!!!!
              </p>
            </div>
          ) : (
            <div className="space-y-20 max-w-5xl mx-auto mt-12">

              {/* Winners Circle Section */}
              {winners.length > 0 && (
                <section className="space-y-8">
                  <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-widest text-center text-primary border-b-4 border-dashed border-dark pb-4">
                    🏆 Winners Circle
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {sortedWinners.map((winner) => {
                      const isMainWinner = winner.round3Status === "Winner";
                      const isSpecial = winner.round3Status === "Best Women-Centric Project";

                      return (
                        <div
                          key={winner._id}
                          className={`border-brutal border-dark p-6 md:p-8 flex flex-col justify-between hover:translate-y-1 transition-all duration-300 relative overflow-hidden group bg-white ${isMainWinner
                              ? 'shadow-[8px_8px_0_0_#E10600] border-primary'
                              : isSpecial
                                ? 'bg-dark text-white border-primary shadow-[8px_8px_0_0_#E10600]'
                                : 'shadow-brutal'
                            }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className={`px-3 py-1.5 border-[2px] border-dark text-xs font-black uppercase tracking-widest ${isMainWinner
                                  ? 'bg-primary text-white'
                                  : isSpecial
                                    ? 'bg-white text-dark border-primary'
                                    : 'bg-bg text-dark'
                                }`}>
                                {winner.round3Status}
                              </span>
                              <div className={`p-2 border-2 border-dark rounded-full bg-bg text-dark group-hover:scale-110 transition-transform ${isSpecial ? 'bg-white text-primary border-primary' : ''}`}>
                                {winner.round3Status === "Winner" && <Trophy size={24} className="text-primary" />}
                                {["1st Runner Up", "2nd Runner Up"].includes(winner.round3Status) && <Medal size={24} />}
                                {winner.round3Status === "Best Women-Centric Project" && <Award size={24} className="text-primary" />}
                              </div>
                            </div>

                            <h3 className="font-heading font-black text-2xl uppercase tracking-wide mb-2">
                              {winner.teamName}
                            </h3>
                            <p className={`text-base font-medium mb-6 ${isSpecial ? 'text-white/80' : 'text-dark/70'}`}>
                              {winner.projectTitle}
                            </p>
                          </div>

                          <div className={`pt-4 border-t-[2px] flex items-center justify-between text-xs font-bold uppercase tracking-wider ${isSpecial ? 'border-white/10' : 'border-dark/10'}`}>
                            <span>Theme</span>
                            <span className="text-primary font-black">
                              {winner.theme === "women-empowerment" ? "Women Empowerment" : "Open Innovation"}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )}

              {/* Finalists Section */}
              {finalists.length > 0 && (
                <section className="space-y-8">
                  <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-widest text-center text-dark border-b-4 border-dashed border-dark pb-4">
                    📢 Round 2 Shortlisted Finalists
                  </h2>
                  <div className="bg-white border-brutal border-dark shadow-brutal p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {finalists.map((team) => (
                        <div key={team._id} className="flex items-start gap-4 p-4 border-[2px] border-dark bg-bg/50">
                          <div className="bg-primary text-white p-2 border-2 border-dark shrink-0">
                            <CheckCircle2 size={16} />
                          </div>
                          <div>
                            <p className="font-black font-heading text-lg uppercase tracking-tight">{team.teamName}</p>
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mt-0.5">
                              {team.theme === "women-empowerment" ? "Women Empowerment" : "Open Innovation"}
                            </p>
                            <p className="text-sm font-medium text-dark/70 mt-1">{team.projectTitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Round 1 PPT Submission Shortlist Section */}
              {round1Shortlisted.length > 0 && (
                <section className="space-y-8">
                  <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-widest text-center text-dark border-b-4 border-dashed border-dark pb-4">
                    📝 Round 1 Shortlisted Teams (PPT Phase)
                  </h2>
                  <div className="bg-white border-brutal border-dark shadow-brutal p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {round1Shortlisted.map((team) => (
                        <div key={team._id} className="p-3 border-[2px] border-dark bg-bg hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center">
                          <p className="font-heading font-black text-base uppercase tracking-tight truncate" title={team.teamName}>
                            {team.teamName}
                          </p>
                          <span className="text-[10px] font-bold text-dark/50 uppercase tracking-widest mt-1 block">
                            {team.theme === "women-empowerment" ? "Women Empowerment" : "Open Innovation"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
