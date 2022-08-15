<script lang="ts">
	import { selectLang } from "../../util/lang.js"
	let dataLang: { error: string; success: string }
	const dataLangDefault = {
		error: "Error scraping",
		success: "Success scraping, wait 3 seconds...",
	}
	if (selectLang.userPreferences === null) {
		dataLang = dataLangDefault
	} else if (selectLang.userPreferences === "es") {
		dataLang = {
			error: "Error buscando datos",
			success: "Exito buscando datos, espere 3 segundos...",
		}
	} else {
		dataLang = dataLangDefault
	}
</script>

<div>
	<p class="error-alert"><i class="fa-solid fa-xmark" /> {dataLang.error}</p>
	<p class="success-alert">
		<i class="fa-solid fa-circle-check" />
		{dataLang.success}
	</p>
</div>

<style>
	div {
		margin-top: 40px;
	}
	p {
		width: 100%;
		padding: 10px;
		margin: 10px;
		border-radius: 20px;
		text-align: center;
		display: none;
	}
	.success-alert {
		background-color: #63e6be;
	}
	.error-alert {
		background-color: #e08585;
	}
</style>
