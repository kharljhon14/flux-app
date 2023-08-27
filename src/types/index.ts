export interface User {
  id: number;
  username: string;
  avatar: string;
}

export interface Post extends User {
  content: string;
  created_at: string;
}
