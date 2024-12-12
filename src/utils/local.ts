import { ColumnType, TaskType } from "../types/types";

export const initialTasks: TaskType[] = [
  
];
export const InitialColumn: ColumnType[] = [
  { title: "todo", emoji: "📝", color: "#4F46E5" },
  { title: "progress", emoji: "⌛", color: "#FACC15" },
  { title: "completed", emoji: "✅", color: "#10B981" },
];

export const emojiRegex =
  /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|[\u203C-\u3299]|[\uDC00-\uDFFF])/gu;
