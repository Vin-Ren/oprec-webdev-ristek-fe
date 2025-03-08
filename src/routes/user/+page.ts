import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch, depends }) => {
    depends('user:auth-state');
    const res = await fetch('api/auth/user', {
        credentials: 'include'
    });
    
    if (res.ok) {
        const data = await res.json();
        return { user: data.user };
    } else {
        return { user: null };
    }
};
