<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import Home from './pages/Home.svelte'
  import Meta from './pages/Meta.svelte'
  import OpenGraph from './pages/OpenGraph.svelte'
  import Documentation from './pages/Documentation.svelte'
</script>

<Router>
  <Route path="/" primary={false}>
    <Home />
  </Route>
  <Route path="/meta" primary={false}>
    <Meta />
  </Route>
  <Route path="/opengraph" primary={false}>
    <OpenGraph />
  </Route>
  <Route path="/documentation" primary={false}>
    <Documentation />
  </Route>
</Router>
