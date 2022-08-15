export interface data {
  property: string, 
  content: string,
  name: string
}

export interface dataResponse {
  status: number,
  data: Array<data>
}