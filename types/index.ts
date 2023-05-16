export type SessionProgram = {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
};

export type Session = {
  id: string;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  create_at: string;
  program: SessionProgram[];
};
