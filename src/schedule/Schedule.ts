export type Interval = "hourly" | "daily" | "weekly" | "monthly" | "yearly";
export type Action = "shutdown" | "reboot" | "execute";

export default interface Schedule {
  _id?: string;
  name?: string;
  interval: Interval;
  rule: any;
  action: Action;
  execute?: string;
}