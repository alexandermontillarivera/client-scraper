const url = new URLSearchParams(window.location.search)

const query = {
  widget: url.get('widget'),
  bg: url.get('bg')
}

export default query