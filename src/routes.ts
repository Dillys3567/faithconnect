export type TPage = "Dashboard" | "EnterMember" | "Details" | "DataEntry";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  EnterMember: "/entermember",
  Details: "/details",
  DataEntry: "/dataentry",
};
