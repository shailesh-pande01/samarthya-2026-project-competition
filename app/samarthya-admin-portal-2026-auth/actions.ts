"use server"

import { cookies } from "next/headers";
import { connectToDatabase } from "@/lib/mongodb";
import TeamResult from "@/lib/models/TeamResult";
import Setting from "@/lib/models/Setting";
import { revalidatePath } from "next/cache";

export async function verifyAdminPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || "samarthya_admin_2026";
  
  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2, // 2 hours
      path: "/",
    });
    return { success: true };
  }
  
  return { success: false, error: "Incorrect admin password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function getTeams() {
  try {
    await connectToDatabase();
    const teams = await TeamResult.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(teams));
  } catch (error) {
    console.error("Error fetching teams:", error);
    return [];
  }
}

export async function addTeam(formData: { teamName: string; projectTitle: string; theme: "women-empowerment" | "open-innovation" }) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }

  try {
    await connectToDatabase();
    
    // Check if team already exists
    const existing = await TeamResult.findOne({ teamName: formData.teamName.trim() });
    if (existing) {
      return { success: false, error: "A team with this name already exists" };
    }

    const team = await TeamResult.create({
      teamName: formData.teamName.trim(),
      projectTitle: formData.projectTitle.trim(),
      theme: formData.theme,
    });
    
    revalidatePath("/samarthya-admin-portal-2026-auth");
    revalidatePath("/winners");
    return { success: true, team: JSON.parse(JSON.stringify(team)) };
  } catch (error: any) {
    console.error("Error adding team:", error);
    return { success: false, error: error.message || "Failed to add team" };
  }
}

export async function updateTeamStatus(id: string, round: 1 | 2 | 3, status: string) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }

  try {
    await connectToDatabase();
    
    const update: any = {};
    if (round === 1) {
      update.round1Status = status;
      // If Round 1 is Rejected, reset subsequent rounds to prevent logical bugs
      if (status === "Rejected") {
        update.round2Status = "Pending";
        update.round3Status = "None";
      }
    } else if (round === 2) {
      update.round2Status = status;
      // If Round 2 is Rejected, reset subsequent round
      if (status === "Rejected") {
        update.round3Status = "None";
      }
    } else if (round === 3) {
      update.round3Status = status;
    }

    const updated = await TeamResult.findByIdAndUpdate(id, update, { new: true });
    
    revalidatePath("/samarthya-admin-portal-2026-auth");
    revalidatePath("/winners");
    return { success: true, team: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error updating team status:", error);
    return { success: false, error: error.message || "Failed to update team status" };
  }
}

export async function deleteTeam(id: string) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }

  try {
    await connectToDatabase();
    await TeamResult.findByIdAndDelete(id);
    
    revalidatePath("/samarthya-admin-portal-2026-auth");
    revalidatePath("/winners");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting team:", error);
    return { success: false, error: error.message || "Failed to delete team" };
  }
}

export async function getResultsPublishStatus() {
  try {
    await connectToDatabase();
    const setting = await Setting.findOne({ key: "showResultsInHeader" });
    return setting ? setting.value : false;
  } catch (error) {
    console.error("Error fetching results publish status:", error);
    return false;
  }
}

export async function toggleResultsPublishStatus(publish: boolean) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }

  try {
    await connectToDatabase();
    await Setting.findOneAndUpdate(
      { key: "showResultsInHeader" },
      { value: publish },
      { upsert: true, new: true }
    );
    revalidatePath("/");
    revalidatePath("/winners");
    revalidatePath("/samarthya-admin-portal-2026-auth");
    return { success: true };
  } catch (error: any) {
    console.error("Error toggling results publish status:", error);
    return { success: false, error: error.message || "Failed to update status" };
  }
}
