export {}
import 'code-prettify/src/run_prettify'
import '@fontsource/quicksand'
(async () => {
  let statusLang = localStorage.getItem("lang")
  if (statusLang === null) {
    await localStorage.setItem(
      "lang", JSON.stringify({
        default: "en",
        userPreferences: null,
      }),
    )
    location.reload()
  }

})()

