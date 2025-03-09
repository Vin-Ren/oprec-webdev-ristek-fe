import { type Load } from "@sveltejs/kit";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ fetch, depends }) => {
  depends('user:auth-state');
  let res = await fetch(`${PUBLIC_BASE_API_URL}/tryout`, {
    method: 'GET'
  });

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
