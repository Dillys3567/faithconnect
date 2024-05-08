export type TPage =
  | "Dashboard"
  | "EnterMember"
  | "BulletinEntry"
  | "DataEntry"
  | "Trends"
  | "MemberDetails";

export const Path: Record<TPage, string> = {
  Dashboard: "/",
  EnterMember: "/entermember",
  BulletinEntry: "/bulletinentry",
  DataEntry: "/dataentry",
  Trends: "/trends",
  MemberDetails: "/memberdetails",
};
