export interface inputs {
  lang: string,
  input: Array<{
    type: string,
    place: string,
    name: string,
    label: string,
    req: boolean
  }>
}