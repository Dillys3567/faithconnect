export type TPage =
  | "Dashboard"
  | "EnterMember"
  | "BulletinEntry"
  | "DataEntry"
  | "Trends";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  EnterMember: "/entermember",
  BulletinEntry: "/bulletinentry",
  DataEntry: "/dataentry",
  Trends: "/trends"
};
