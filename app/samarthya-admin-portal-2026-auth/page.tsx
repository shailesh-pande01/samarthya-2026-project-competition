import { getTeams, isAdminAuthenticated, getResultsPublishStatus } from "./actions";
import AdminDashboardClient from "./AdminDashboardClient";
import AdminLoginClient from "./AdminLoginClient";

export const metadata = {
  title: "Admin Panel | Samarthya 2026",
  description: "Manage results for Round 1, 2, and 3",
};

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  
  if (!authenticated) {
    return <AdminLoginClient />;
  }
  
  const teams = await getTeams();
  const showResults = await getResultsPublishStatus();
  
  return <AdminDashboardClient initialTeams={teams} initialShowResults={showResults} />;
}
