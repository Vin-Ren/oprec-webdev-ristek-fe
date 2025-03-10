import { type Load, redirect } from "@sveltejs/kit"
import { get } from "svelte/store"
import auth from "../../../stores/auth"

export const load: Load = ({ }) => {
  console.log(get(auth))
  if (get(auth)?.loggedId === false) return redirect(302, '/login')
}