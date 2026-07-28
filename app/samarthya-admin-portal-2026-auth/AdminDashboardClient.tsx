"use client"

import * as React from "react";
import { addTeam, updateTeamStatus, deleteTeam, logoutAdmin, toggleResultsPublishStatus } from "./actions";
import { Trophy, Users, LogOut, Plus, Search, Trash2, ShieldAlert, Sparkles, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

interface Team {
  _id: string;
  teamName: string;
  projectTitle: string;
  theme: "women-empowerment" | "open-innovation";
  round1Status: "Pending" | "Shortlisted" | "Rejected";
  round2Status: "Pending" | "Shortlisted" | "Rejected";
  round3Status: "None" | "Winner" | "1st Runner Up" | "2nd Runner Up" | "Best Women-Centric Project" | "Finalist";
  createdAt: string;
  updatedAt: string;
}

interface AdminDashboardClientProps {
  initialTeams: Team[];
  initialShowResults: boolean;
}

export default function AdminDashboardClient({ initialTeams, initialShowResults }: AdminDashboardClientProps) {
  const [teams, setTeams] = React.useState<Team[]>(initialTeams);
  const [showResults, setShowResults] = React.useState(initialShowResults);
  const [search, setSearch] = React.useState("");
  const [themeFilter, setThemeFilter] = React.useState<string>("all");
  const [round1Filter, setRound1Filter] = React.useState<string>("all");
  const [round2Filter, setRound2Filter] = React.useState<string>("all");
  const [round3Filter, setRound3Filter] = React.useState<string>("all");

  // Custom Confirmation Modal State
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalConfirmAction, setModalConfirmAction] = React.useState<() => void>(() => {});

  const triggerConfirm = (message: string, onConfirm: () => void) => {
    setModalMessage(message);
    setModalConfirmAction(() => () => {
      onConfirm();
      setShowConfirmModal(false);
    });
    setShowConfirmModal(true);
  };

  // Form State
  const [teamName, setTeamName] = React.useState("");
  const [projectTitle, setProjectTitle] = React.useState("");
  const [theme, setTheme] = React.useState<"women-empowerment" | "open-innovation">("women-empowerment");
  const [formError, setFormError] = React.useState("");
  const [formSuccess, setFormSuccess] = React.useState("");
  const [formLoading, setFormLoading] = React.useState(false);

  // Stats calculation
  const totalTeams = teams.length;
  const round1Shortlisted = teams.filter(t => t.round1Status === "Shortlisted").length;
  const round2Shortlisted = teams.filter(t => t.round2Status === "Shortlisted").length;
  const winnersCount = teams.filter(t => t.round3Status !== "None").length;

  // Add Team Submission
  const handleAddTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !projectTitle) {
      setFormError("All fields are required");
      return;
    }

    setFormError("");
    setFormSuccess("");
    setFormLoading(true);

    try {
      const res = await addTeam({ teamName, projectTitle, theme });
      if (res.success && res.team) {
        setTeams([res.team, ...teams]);
        setTeamName("");
        setProjectTitle("");
        setFormSuccess("Team added successfully!");
      } else {
        setFormError(res.error || "Failed to add team");
      }
    } catch (err) {
      setFormError("An unexpected error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  // Update Team Status
  const handleStatusChange = async (id: string, round: 1 | 2 | 3, newStatus: string) => {
    try {
      const res = await updateTeamStatus(id, round, newStatus);
      if (res.success && res.team) {
        setTeams(teams.map(t => (t._id === id ? res.team! : t)));
      } else {
        alert(res.error || "Failed to update status");
      }
    } catch (err) {
      alert("Failed to connect to server");
    }
  };

  // Delete Team
  const handleDeleteTeam = (id: string, name: string) => {
    triggerConfirm(`Are you sure you want to delete team "${name}"? This action cannot be undone.`, async () => {
      try {
        const res = await deleteTeam(id);
        if (res.success) {
          setTeams(teams.filter(t => t._id !== id));
        } else {
          alert(res.error || "Failed to delete team");
        }
      } catch (err) {
        alert("Failed to connect to server");
      }
    });
  };

  // Toggle results publish status
  const handleTogglePublish = () => {
    const nextState = !showResults;
    const confirmMsg = nextState
      ? "Are you sure you want to publish the results? This will display the 'Results' tab in the website navigation header."
      : "Are you sure you want to hide the results? This will remove the 'Results' tab from the website navigation header.";

    triggerConfirm(confirmMsg, async () => {
      try {
        const res = await toggleResultsPublishStatus(nextState);
        if (res.success) {
          setShowResults(nextState);
        } else {
          alert(res.error || "Failed to update results visibility");
        }
      } catch (err) {
        alert("Failed to connect to server");
      }
    });
  };

  // Logout admin
  const handleLogout = async () => {
    await logoutAdmin();
    window.location.reload();
  };

  // Filter & Search logic
  const filteredTeams = teams.filter(team => {
    const matchesSearch =
      team.teamName.toLowerCase().includes(search.toLowerCase()) ||
      team.projectTitle.toLowerCase().includes(search.toLowerCase());

    const matchesTheme = themeFilter === "all" || team.theme === themeFilter;
    const matchesRound1 = round1Filter === "all" || team.round1Status === round1Filter;
    const matchesRound2 = round2Filter === "all" || team.round2Status === round2Filter;
    const matchesRound3 = round3Filter === "all" || (round3Filter === "Winner" ? team.round3Status !== "None" : team.round3Status === round3Filter);

    return matchesSearch && matchesTheme && matchesRound1 && matchesRound2 && matchesRound3;
  });

  return (
    <div className="min-h-screen bg-bg relative pb-16 overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none"></div>

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b-brutal border-dark shadow-brutal-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-heading font-black text-2xl uppercase tracking-tighter hover:text-primary transition-colors">
              Samarthya 2026 Panel
            </Link>
            <span className="bg-primary text-white text-[10px] font-black tracking-widest px-2 py-1 uppercase border-[2px] border-dark">
              Console
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleTogglePublish}
              className={`px-4 py-2 border-[2px] border-dark hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center gap-2 ${
                showResults 
                  ? "bg-green-500 text-white" 
                  : "bg-white text-dark"
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${showResults ? "bg-white animate-pulse" : "bg-primary"}`}></span>
              {showResults ? "Results Published" : "Publish Results"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-white text-dark px-4 py-2 border-[2px] border-dark hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center gap-2"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10 space-y-8">
        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, label: "Total Teams", val: totalTeams, col: "text-dark bg-white" },
            { icon: Sparkles, label: "R1 Shortlisted", val: round1Shortlisted, col: "text-white bg-dark" },
            { icon: SlidersHorizontal, label: "R2 Finalists", val: round2Shortlisted, col: "text-light bg-primary" },
            { icon: Trophy, label: "Winners Set", val: winnersCount, col: "text-dark bg-white border-primary shadow-[4px_4px_0_0_#E10600]" }
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-4 md:p-6 border-[3px] border-dark shadow-brutal-sm flex items-center gap-4 ${stat.col}`}
            >
              <div className="p-3 border-2 border-dark bg-white text-dark shrink-0">
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
                <p className="text-xl md:text-3xl font-heading font-black tabular-nums">{stat.val}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Console layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Add Team form Panel */}
          <div className="lg:col-span-4 bg-white border-[3px] border-dark p-6 shadow-brutal relative">
            {/* Corner decorator */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
            
            <h2 className="font-heading font-black text-xl uppercase mb-6 flex items-center gap-2 border-b-2 border-dark/10 pb-3">
              <Plus size={20} className="text-primary" /> Add New Team
            </h2>

            <form onSubmit={handleAddTeam} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full h-11 px-3 border-[2px] border-dark font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shadow-brutal-sm text-sm"
                  placeholder="e.g. Code Wizards"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Project Title</label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full h-11 px-3 border-[2px] border-dark font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shadow-brutal-sm text-sm"
                  placeholder="e.g. IoT Smart Home"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Competition Theme</label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="w-full h-11 px-3 border-[2px] border-dark font-bold bg-white text-sm focus-visible:outline-none shadow-brutal-sm"
                >
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="open-innovation">Open Innovation</option>
                </select>
              </div>

              {formError && (
                <div className="bg-primary/10 border-[2px] border-primary p-3 text-primary text-xs font-bold uppercase tracking-wide">
                  {formError}
                </div>
              )}

              {formSuccess && (
                <div className="bg-green-500/10 border-[2px] border-green-600 p-3 text-green-700 text-xs font-bold uppercase tracking-wide">
                  {formSuccess}
                </div>
              )}

              <button
                type="submit"
                disabled={formLoading}
                className="w-full h-12 bg-dark text-white border-[3px] border-dark shadow-brutal font-heading font-black uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {formLoading ? "Adding..." : "Add Team Record"}
              </button>
            </form>
          </div>

          {/* Results Table Panel */}
          <div className="lg:col-span-8 bg-white border-[3px] border-dark p-6 shadow-brutal space-y-6">
            <h2 className="font-heading font-black text-xl uppercase flex items-center gap-2 border-b-2 border-dark/10 pb-3">
              <SlidersHorizontal size={20} className="text-primary" /> Manage Results
            </h2>

            {/* Filters Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 bg-bg p-3 border-[2px] border-dark shadow-brutal-sm">
              <div className="md:col-span-2 relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-9 pl-8 pr-3 border-[2px] border-dark font-medium bg-white text-xs focus-visible:outline-none"
                  placeholder="Search team or project..."
                />
                <Search size={14} className="absolute left-2.5 top-2.5 text-dark/40" />
              </div>

              <div>
                <select
                  value={themeFilter}
                  onChange={(e) => setThemeFilter(e.target.value)}
                  className="w-full h-9 px-2 border-[2px] border-dark bg-white font-bold text-[10px] uppercase focus-visible:outline-none"
                >
                  <option value="all">All Themes</option>
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="open-innovation">Open Innovation</option>
                </select>
              </div>

              <div>
                <select
                  value={round1Filter}
                  onChange={(e) => setRound1Filter(e.target.value)}
                  className="w-full h-9 px-2 border-[2px] border-dark bg-white font-bold text-[10px] uppercase focus-visible:outline-none"
                >
                  <option value="all">Round 1 (All)</option>
                  <option value="Pending">Pending</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <select
                  value={round3Filter}
                  onChange={(e) => setRound3Filter(e.target.value)}
                  className="w-full h-9 px-2 border-[2px] border-dark bg-white font-bold text-[10px] uppercase focus-visible:outline-none"
                >
                  <option value="all">Round 3 (All)</option>
                  <option value="Winner">Winner (Any)</option>
                  <option value="None">No Winner Rank</option>
                  <option value="Winner">Winner (1st)</option>
                  <option value="1st Runner Up">1st Runner Up</option>
                  <option value="2nd Runner Up">2nd Runner Up</option>
                  <option value="Best Women-Centric Project">Best Women-Centric</option>
                  <option value="Finalist">Finalist</option>
                </select>
              </div>
            </div>

            {/* Teams Grid List (Scrollable) */}
            <div className="overflow-x-auto border-[2px] border-dark shadow-brutal-sm">
              {filteredTeams.length === 0 ? (
                <div className="p-8 text-center bg-white">
                  <ShieldAlert size={40} className="text-primary mx-auto mb-3" />
                  <p className="font-heading font-black uppercase text-lg">No Team Records Found</p>
                  <p className="text-sm font-medium text-dark/50 mt-1">Try refining your filters or adding a new team.</p>
                </div>
              ) : (
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-dark text-white border-b-2 border-dark text-xs uppercase tracking-widest font-heading">
                      <th className="p-3 font-black">Team / Project</th>
                      <th className="p-3 font-black">Theme</th>
                      <th className="p-3 font-black">Round 1 (PPT)</th>
                      <th className="p-3 font-black">Round 2 (Video)</th>
                      <th className="p-3 font-black">Round 3 (Final)</th>
                      <th className="p-3 font-black text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeams.map((team, index) => {
                      const isR1Shortlisted = team.round1Status === "Shortlisted";
                      const isR2Shortlisted = team.round2Status === "Shortlisted";
                      
                      return (
                        <tr key={team._id} className="border-b-[2px] border-dark hover:bg-bg/50 transition-colors text-xs font-medium">
                          <td className="p-3">
                            <p className="font-black text-sm text-dark">{team.teamName}</p>
                            <p className="text-dark/60 mt-0.5">{team.projectTitle}</p>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 border-[1.5px] border-dark text-[9px] font-black uppercase tracking-wider ${team.theme === 'women-empowerment' ? 'bg-primary/10 text-primary' : 'bg-dark/10 text-dark'}`}>
                              {team.theme === 'women-empowerment' ? 'Women Emp.' : 'Open Innov.'}
                            </span>
                          </td>
                          <td className="p-3">
                            <select
                              value={team.round1Status}
                              onChange={(e) => handleStatusChange(team._id, 1, e.target.value)}
                              className="h-8 px-1 border-[1.5px] border-dark bg-white font-bold focus-visible:outline-none"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <select
                              value={team.round2Status}
                              onChange={(e) => handleStatusChange(team._id, 2, e.target.value)}
                              disabled={!isR1Shortlisted}
                              className="h-8 px-1 border-[1.5px] border-dark bg-white font-bold focus-visible:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <select
                              value={team.round3Status}
                              onChange={(e) => handleStatusChange(team._id, 3, e.target.value)}
                              disabled={!isR2Shortlisted}
                              className="h-8 px-1 border-[1.5px] border-dark bg-white font-bold focus-visible:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <option value="None">None</option>
                              <option value="Winner">Winner (1st)</option>
                              <option value="1st Runner Up">1st Runner Up</option>
                              <option value="2nd Runner Up">2nd Runner Up</option>
                              <option value="Best Women-Centric Project">Best Women-Centric</option>
                              <option value="Finalist">Finalist</option>
                            </select>
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteTeam(team._id, team.teamName)}
                              className="text-primary hover:text-white hover:bg-primary p-2 border-[1.5px] border-transparent hover:border-dark active:translate-x-0.5 active:translate-y-0.5 transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Custom Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm" onClick={() => setShowConfirmModal(false)}></div>
          
          {/* Modal Content */}
          <div className="bg-white border-brutal border-dark shadow-brutal p-8 max-w-md w-full z-10 relative">
            {/* CAD Registration Marks */}
            <div className="absolute -top-3 -left-3 w-4 h-4 border-t-[3px] border-l-[3px] border-dark z-20" />
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t-[3px] border-r-[3px] border-dark z-20" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-[3px] border-l-[3px] border-dark z-20" />
            <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-[3px] border-r-[3px] border-dark z-20" />

            <div className="flex items-center gap-3 mb-4 text-primary">
              <ShieldAlert size={28} />
              <h3 className="font-heading font-black text-xl uppercase tracking-wider">Confirm Action</h3>
            </div>

            <p className="font-medium text-dark/80 text-sm mb-8 leading-relaxed">
              {modalMessage}
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2.5 bg-white text-dark border-[2px] border-dark shadow-brutal-sm hover:translate-y-0.5 hover:shadow-none transition-all font-bold uppercase tracking-wider text-xs"
              >
                Cancel
              </button>
              <button
                onClick={modalConfirmAction}
                className="px-5 py-2.5 bg-primary text-white border-[2px] border-dark shadow-brutal-sm hover:translate-y-0.5 hover:shadow-none transition-all font-bold uppercase tracking-wider text-xs"
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
