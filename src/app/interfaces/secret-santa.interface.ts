/**
 * Created by yves.schleich on 12/09/16.
 */
export interface SecretSanta {
  id?: string | number,
  name: string,
  email: string
}

export interface SecretSantas {
  secretSantas: SecretSanta[]
}
