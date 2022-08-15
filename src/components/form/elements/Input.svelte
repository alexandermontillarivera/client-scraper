<script lang="ts">
  export let label: string = 'Tag'
  export let name: string = 'name'
  export let type: string = 'text'
  export let place: string = 'Placeholder'
  export let req: boolean = false
</script>

<div>
  <label for={ label }>{ label }</label>
  <input type={ type } name={ name } placeholder={ place } required={ req }>
</div>

<style>
  input{
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
    margin-top: 20px;
    width: 100%;
    padding: 11px 26px;
    margin-bottom: 30px;
    border-radius: 30px;
    outline: none!important;
    transition: .3s;
  }
  input:focus{
    border: 1px solid #FFDAC0
  }
  @media (prefers-color-scheme: light) {
    input{
      border: 1px solid rgba(238, 238, 238, 0.71);
      background-color: var(--bg-cclight);
      color: var(--black);
    }
  }
  @media (prefers-color-scheme: dark) {
    input{
      border: 1px solid #767676;
      background: var(--bg-ccdark);
      color: #fff;
    }
  }
</style>