export type TPage = "Dashboard" | "EnterMember" | "BulletinEntry" | "DataEntry";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  EnterMember: "/entermember",
  BulletinEntry: "/bulletinentry",
  DataEntry: "/dataentry",
};
