<script lang="ts">
	import { writable } from "svelte/store"
  import { selectLang } from '../../util/lang.js'
  export let id: string
	const changeLang = () => {
		const select = document.querySelector<HTMLSelectElement>(`#${id}`)
		const option = select.options[select.selectedIndex]
		let newLang = {
			default: "en",
			userPreferences: option.value,
		}
		const language = localStorage.getItem("lang")
		const setLang = writable(language)
		setLang.subscribe(() =>
			localStorage.setItem("lang", JSON.stringify(newLang))
		)
    location.reload()
	}
  let message: string
  if(selectLang.userPreferences === 'es'){
    message = 'Seleccione su idioma'
  } else {
    message = 'Select your language'
  }
</script>
<i class="fa-solid fa-language desktop-icon"></i>
<select id={id}  on:change={changeLang} title={ message }>
	<option value="en" selected={selectLang.userPreferences == "en"}>English</option>
	<option value="es" selected={selectLang.userPreferences == "es"}>Español</option>
</select>

<style>
  option, select{
    background: transparent;
    font-family: "Quicksand";
    font-size: 16px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    box-sizing: border-box;
  }
  select{
		appearance: none;
    width: 5rem;
  }
  @media (max-width: 991px) {
    .desktop-icon{
      display: none;
    }
  }
  @media (prefers-color-scheme: light){
    option{
      background-color: var(--bg-light);
    }
  }
  @media (prefers-color-scheme: dark){
    option{
      background-color: var(--bg-dark);
    }
  } 
</style>