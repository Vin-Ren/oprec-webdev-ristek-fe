import { type Load } from "@sveltejs/kit";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ fetch, depends, params }) => {
  depends('user:auth-state');
  let res = await fetch(`${PUBLIC_BASE_API_URL}/tryout/${params.id}/details`, {
    method: 'GET'
  });

  if (res.ok) {
    const data = await res.json();
    return { tryout: data.tryout };
  } else {
    return { tryout: null };
  }
};
