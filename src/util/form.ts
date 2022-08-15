export const clearHtmlTags = (text: string) => {
  return text.replace(/<(?:.|'script'|\n)*?>/gm, '')
}

export const convertFormObject = (e: any) => {
  const formData: FormData = new FormData(e.target)
  const data = {}
  for (let field of formData) {
    const [key, value] = field
    // @ts-ignore
    const filter = clearHtmlTags(value)
    // @ts-ignore
    data[key] = filter
  }
  return data
}

export const ajaxSend = async (data: object, method: string, endpoint: string, cbSuccess: Function, cbError: Function) => {
  const sending: string = JSON.stringify(data)
  const request: XMLHttpRequest = new XMLHttpRequest
  request.open(method, endpoint, true)
  request.setRequestHeader('Content-Type', 'application/json')
  request.onload = () => {
    if(request.readyState === request.DONE){
      if(request.status === 200){
        cbSuccess(JSON.parse(request.response))
      } else {
        cbError()
      }
    }
  }
  request.send(sending)
}