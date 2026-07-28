import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITeamResult extends Document {
  teamName: string;
  projectTitle: string;
  theme: "women-empowerment" | "open-innovation";
  round1Status: "Pending" | "Shortlisted" | "Rejected";
  round2Status: "Pending" | "Shortlisted" | "Rejected";
  round3Status: "None" | "Winner" | "1st Runner Up" | "2nd Runner Up" | "Best Women-Centric Project" | "Finalist";
  createdAt: Date;
  updatedAt: Date;
}

const TeamResultSchema: Schema = new Schema(
  {
    teamName: { type: String, required: true, unique: true, trim: true },
    projectTitle: { type: String, required: true, trim: true },
    theme: { type: String, enum: ["women-empowerment", "open-innovation"], required: true },
    round1Status: { type: String, enum: ["Pending", "Shortlisted", "Rejected"], default: "Pending" },
    round2Status: { type: String, enum: ["Pending", "Shortlisted", "Rejected"], default: "Pending" },
    round3Status: {
      type: String,
      enum: ["None", "Winner", "1st Runner Up", "2nd Runner Up", "Best Women-Centric Project", "Finalist"],
      default: "None",
    },
  },
  {
    timestamps: true,
  }
);

const TeamResult: Model<ITeamResult> =
  mongoose.models.TeamResult || mongoose.model<ITeamResult>("TeamResult", TeamResultSchema);

export default TeamResult;
