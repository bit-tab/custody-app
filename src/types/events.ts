export type Event = {
  title: string;
  date: string;
  time: string;
  type: "medico" | "escolar" | "otro";
  notes?: string;
};