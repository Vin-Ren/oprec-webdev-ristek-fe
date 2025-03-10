import { writable } from "svelte/store";

export type User = {
  id: string;
  username: string;
  avatarUrl: string;
  githubId: number | null;
  role: "Admin" | "User";
}

const auth = writable<{ user: User | null, loggedId: boolean }>({ user: null, loggedId: false });

export default auth;