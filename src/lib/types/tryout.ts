
export type CreateTryoutParams = {
  name: string,
  description: string,
  opensAt: Date,
  closesAt: Date,
  duration: number,
  visibility: "PUBLIC" | "UNLISTED" | "PRIVATE",
  passphrase: string
}

export type UpdateTryoutParams = {
  name: string,
  description: string,
  opensAt: Date,
  closesAt: Date,
  duration: number,
  visibility: "PUBLIC" | "UNLISTED" | "PRIVATE",
  passphrase: string
}