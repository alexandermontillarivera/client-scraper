<script lang="ts">
	import Input from "./elements/Input.svelte"
	import Submit from "./elements/Submit.svelte"
	import { convertFormObject, ajaxSend } from "../../util/form.js"
  import Table from '../elements/Table.svelte'
	import config from "../../config/config.js"
  import { dataDefaultMetaInfo } from '../../util/opengraph.js'
	import type { dataResponse, data } from "../../types/scrapper.js"
	import Alerts from "../elements/Alerts.svelte"
	const submitClick = async (e: Event) => {
		const data = convertFormObject(e)
		const responseAjax = async (dataResponse: dataResponse) => {
			const alertSuccess =
			document.querySelector<HTMLParamElement>(".success-alert")
		  sessionStorage.setItem("metadata", JSON.stringify(dataResponse))
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
			config.apiBase + "/api/meta",
			responseAjax,
			responseError,
		)
	}
  const dataStorage = sessionStorage.getItem("metadata") 
  const dataParse = JSON.parse(dataStorage)
  const dataResult: Array<data> = dataParse

  export let place: string
  export let submit: string
  export let title: string
  export let propertyTitle: string
  export let contentTitle: string
  export let label: string
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
			<Submit place={submit} />
		</form>
		<Alerts />
	</div>
	<div>
    <Table dataDefault={dataDefaultMetaInfo} dataGet={dataResult} title={title} propertyTitle={propertyTitle} contentTitle={contentTitle} />
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
