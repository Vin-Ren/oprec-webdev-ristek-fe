import { type Load } from "@sveltejs/kit";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ fetch, depends }) => {
  let res = await fetch(`${PUBLIC_BASE_API_URL}/tryout`, {
    method: 'GET'
  });

  if (res.ok) {
    const data = await res.json();
    return { tryouts: data.tryouts };
  } else {
    return { tryouts: [] };
  }
};
