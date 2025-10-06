// src/theme/Theme.ts
export const COLORS = {
  primary: "#19183B",
  secondary: "#708993",
  accent: "#A1C2BD",
  background: "#E7F2EF",
  white: "#FFFFFF",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  lightGray: "#F3F4F6",
};

export const SIZES = {
  base: 8,
  radius: 12,
  padding: 16,
  header: 22,
  title: 18,
  body: 14,
};

export const FONTS = {
  header: { fontSize: SIZES.header, fontWeight: "700" as const },
  title: { fontSize: SIZES.title, fontWeight: "600" as const },
  body: { fontSize: SIZES.body, fontWeight: "400" as const },
};
