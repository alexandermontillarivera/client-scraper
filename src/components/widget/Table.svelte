<script lang="ts">
  import type { dataResponse} from '../../types/scrapper.js'
  export let title: string
  export let propertyTitle: string
  export let contentTitle: string
  export let dataGet: Array<dataResponse>
  export let dataDefault: any
</script>

<div>
  <p>{title}</p>
  <table>
    <thead>
      <td><b>{propertyTitle}</b></td>
      <td><b>{contentTitle}</b></td>
    </thead>
    <tbody>
      {#if dataGet !== null}
        {#each dataGet.data as item}
        <tr>
          <td>{item.name  ?? item.property }</td>
          <td>{item.content}</td>
        </tr>
        {/each}
        {:else}
        {#each dataDefault as item}
        <tr>
          <td>{item.property ?? item.name}</td>
          <td>{item.content}</td>
        </tr>
        {/each}
      {/if}
    </tbody>
    <tfoot>
      <td><b>{propertyTitle}</b></td>
      <td><b>{contentTitle}</b></td>
    </tfoot>
  </table>
</div>

<style>
  td{
    border: 1px solid #767676;
    text-align: center;
  }
  td{
    padding: 20px
  }
  p{
    margin-bottom: 20px;
  }
  div{
    width: 100%;
    overflow-x: auto;
  }
  table{
    width: 100%;
    border-radius: 20px;
  }
  thead td:first-child{
    border-top-left-radius: 20px;
  }
  thead td:last-child{
    border-top-right-radius: 20px;
  }
  tfoot td:first-child{
    border-bottom-left-radius: 20px;
  }
  tfoot td:last-child{
    border-bottom-right-radius: 20px;
  }
  @media (prefers-color-scheme: light) {
		td {
			background-color: var(--bg-cclight);
		}
	}
	@media (prefers-color-scheme: dark) {
		td {
      background-color: var(--bg-ccdark);

		}
	}
</style>