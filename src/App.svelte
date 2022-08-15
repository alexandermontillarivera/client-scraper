<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import Home from './pages/Home.svelte'
  import Meta from './pages/Meta.svelte'
  import OpenGraph from './pages/OpenGraph.svelte'
  import Documentation from './pages/Documentation.svelte'
</script>

<Router>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/meta" >
    <Meta />
  </Route>
  <Route path="/opengraph" >
    <OpenGraph />
  </Route>
  <Route path="/documentation" >
    <Documentation />
  </Route>
</Router>
