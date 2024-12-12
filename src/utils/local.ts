import { ColumnType, TaskType } from "../types/types";

export const initialTasks: TaskType[] = [
  
];
export const InitialColumn: ColumnType[] = [
  { title: "todo", emoji: "📝", color: "#457B9D" },
  { title: "progress", emoji: "⌛", color: "#E9C46A" },
  { title: "completed", emoji: "✅", color: "#2A9D8F" },
];

export const emojiRegex =
  /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|[\u203C-\u3299]|[\uDC00-\uDFFF])/gu;
