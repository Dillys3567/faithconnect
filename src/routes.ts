export type TPage = "Dashboard" | "EnterMember" | "Details";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  EnterMember: "/entermember",
  Details: "/details",
};
