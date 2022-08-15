<script lang="ts">
	import Input from "./elements/Input.svelte"
	import Select from "./elements/Select.svelte"
	import Submit from "./elements/Submit.svelte"
  import { dataDefaultOpenGraph } from '../../util/opengraph.js'
	import { convertFormObject, ajaxSend } from "../../util/form.js"
  import Table from '../widget/Table.svelte'
	import config from "../../config/config.js"
	import type { dataResponse, data } from "../../types/scrapper.js"
  
	import Alerts from "../elements/Alerts.svelte"
	import Items from "../list/Items.svelte"
	export const listData: Array<string> = [
		"og:type",
		"og:title",
		"og:description",
		"og:image",
		"og:url",
		"og:image:width",
		"og:image:height",
		"og:locale",
		"og:locale",
		"twitter:text:title",
		"twitter:image",
		"twitter:card",
		"twitter:site",
    "twitter:creator"
	]
	const submitClick = async (e: Event) => {
		const data = convertFormObject(e)
		const responseAjax = async (dataResponse: dataResponse) => {
			const alertSuccess =
			document.querySelector<HTMLParamElement>(".success-alert")
		  sessionStorage.setItem("openGraph", JSON.stringify(dataResponse))
			alertSuccess.style.display = "block"
			window.setTimeout(() => {
        window.location.reload()
      }, 3000)
		}
		const responseError = () => {
			const alertError =
			document.querySelector<HTMLParamElement>(".error-alert")
			alertError.style.display = "block"
			return "error"
		}
		await ajaxSend(
			data,
			"POST",
			config.apiBase + "/api/opengraph",
			responseAjax,
			responseError,
		)
	}
  const dataStorage = sessionStorage.getItem("openGraph") 
  const dataParse = JSON.parse(dataStorage)
  const dataResult: Array<data> = dataParse

  export let place: string
  export let submit: string
  export let title: string
  export let propertyTitle: string
  export let contentTitle: string
  export let label: string
  export let options: {place: string, data: Array<{place: string, value: string}>}
  export let itemTitle: string
</script>

<section>
	<div>
		<form id="main" on:submit|preventDefault={submitClick}>

        
			<Input
				label={label}
				place={place}
				name="siteUrl"
				req={true}
				type="url"
			/>
			<Select
				req={true}
				label={options.place}
				name="typeOgp"
				placeholder={options.place}
				data={options.data}
			/>
			<Submit place={submit} />
		</form>
		<Alerts />
	</div>
	<div>
		<Items title={ itemTitle } data={ listData } />

	</div>
  <div>
    <Table dataDefault={dataDefaultOpenGraph} title={title} propertyTitle={propertyTitle} contentTitle={contentTitle} dataGet={ dataResult } />
  </div>

</section>

<style>
	section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 600px));
    justify-content: center;
	}
	div {
		padding: 40px;
		border-radius: 20px;
		margin: 20px;
		height: max-content;
	}
  @media (max-width: 1351px) {
    section{
      grid-template-columns: repeat(auto-fit, minmax(100%, 600px));
    }
  }
  @media (max-width: 1120px) {
    section{
      display: block
    }
    div{
      width: 100%;
      background-color: red;
      margin: 40px 0px
    }
  }
	@media (prefers-color-scheme: light) {
		div {
			background-color: var(--bg-clight);
		}
	}
	@media (prefers-color-scheme: dark) {
		div {
			background-color: var(--bg-cdark);
		}
	}
</style>
