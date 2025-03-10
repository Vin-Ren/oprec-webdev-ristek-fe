import { type Load } from "@sveltejs/kit";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ fetch, depends }) => {
  depends('user:auth')
  let res = await fetch(`${PUBLIC_BASE_API_URL}/tryout/mine`, {
    method: 'GET',
    credentials: 'include'
  });

  if (res.ok) {
    const data = await res.json();
    return { tryouts: data.tryouts };
  } else {
    return { tryouts: [] };
  }
};
