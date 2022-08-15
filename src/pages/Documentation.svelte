<script lang="ts">
  import Menu from '../components/nav/Menu.svelte'
  import { getLang } from '../util/lang.js'
  const lang: any = getLang('documentation')
</script>


<div>
  <Menu />
  <main>
    <div class="content">
      {#await lang}
      <p>Loading...</p>
    {:then lang}
      <h1>{lang.title}</h1>
      <img src="/img/api.png" alt="">
      <p>{lang.description}</p>
      <h2>{lang.metadata.title}</h2>
      <p>{lang.metadata.description}</p>
      <p>{@html lang.metadata.codeDescription}</p>
      <div class="code">
        <code class="prettyprint lang-javascript">
          {@html `
            //*</br>
            &nbsp;# EndpointApi: https://scraperty.deno.dev/api/meta </br>
            &nbsp;# Method: POST </br>
            &nbsp;# BodyData?: {siteUrl: "url"}
            </br>*//</br></br>
            const requestMetaData = (data, method, cbError, cbSuccess) => {<br>
              &nbsp;const sending = JSON.stringify(data)<br>
              &nbsp;const request = new XMLHttpRequest<br>
              &nbsp&nbsp;request.open(method, endpoint, true)<br>
              &nbsp&nbsprequest.setRequestHeader('Content-Type', 'application/json')<br>
              &nbsp&nbsp;request.onload = () => {<br>
                &nbsp&nbsp&nbsp;&nbsp;if(request.readyState === request.DONE){<br>
                  &nbsp&nbsp&nbsp;&nbsp;&nbsp;if(request.status === 200){<br>
                    &nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;cbSuccess(JSON.parse(request.response))<br>
                    &nbsp&nbsp&nbsp;&nbsp;&nbsp;} else {<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbspcbError()<br>
                      &nbsp&nbsp&nbsp;&nbsp;}<br>
                      &nbsp&nbsp&nbsp;}<br>
                      &nbsp&nbsp}<br>
                      &nbsp&nbsprequest.send(sending)<br>
              }
          `}
        </code>
      </div>
      <h2>{lang.opengraph.title}</h2>
      <p>{lang.opengraph.description}</p>
      <p>{@html lang.opengraph.codeDescription}</p>
      <div class="code">
        <code class="prettyprint lang-javascript">
          {@html `
            //*</br>
            &nbsp;# EndpointApi: https://scraperty.deno.dev/api/opengraph</br>
            &nbsp;# Method: POST </br>
            &nbsp;# BodyData?: {siteUrl: "url", type: "property" || type: "name"}
            </br>*//</br></br>
            const requestMetaData = (data, method, cbError, cbSuccess) => {<br>
              &nbsp;const sending = JSON.stringify(data)<br>
              &nbsp;const request = new XMLHttpRequest<br>
              &nbsp&nbsp;request.open(method, endpoint, true)<br>
              &nbsp&nbsprequest.setRequestHeader('Content-Type', 'application/json')<br>
              &nbsp&nbsp;request.onload = () => {<br>
                &nbsp&nbsp&nbsp;&nbsp;if(request.readyState === request.DONE){<br>
                  &nbsp&nbsp&nbsp;&nbsp;&nbsp;if(request.status === 200){<br>
                    &nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;cbSuccess(JSON.parse(request.response))<br>
                    &nbsp&nbsp&nbsp;&nbsp;&nbsp;} else {<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbspcbError()<br>
                      &nbsp&nbsp&nbsp;&nbsp;}<br>
                      &nbsp&nbsp&nbsp;}<br>
                      &nbsp&nbsp}<br>
                      &nbsp&nbsprequest.send(sending)<br>
              }
          `}
        </code>
      </div>
    {/await}
    </div>
  </main>
</div>


<style>
  img {
		width: 100%;
		margin: 40px auto;
		display: block;
		border-radius: 20px;
	}
  p{
    margin: 40px 0px;
		font-size: 20px;
  }
  code{
		font-size: 20px;
  }
  .code{
    overflow-x: auto;
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
  }
  @media (prefers-color-scheme: light) {
    .code{
      background-color: var(--bg-clight);
    }
  }
  @media (prefers-color-scheme: dark) {
    .code{
      background-color: var(--bg-code-dark);
    }

  }
</style>
