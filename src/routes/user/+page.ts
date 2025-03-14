import { redirect, type Load } from "@sveltejs/kit";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ fetch, depends }) => {
  depends('user:auth-state');
  let res = await fetch(`${PUBLIC_BASE_API_URL}/auth/user`, {
    credentials: 'include'
  });

  if (!res.ok) {
    redirect(302, '/login')
  }

  const data = await res.json();
  if (!data.user.githubId) {
    return { user: data.user };
  }

  res = await fetch(`https://api.github.com/user/${data.user.githubId}`)
  if (!res.ok) {
    return { user: data.user }
  }
  return { user: data.user, githubProfile: await res.json() }
};
