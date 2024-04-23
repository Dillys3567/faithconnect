export type TPage = "Dashboard" | "Forms" | "Details";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  Forms: "/forms",
  Details: "/details",
};
