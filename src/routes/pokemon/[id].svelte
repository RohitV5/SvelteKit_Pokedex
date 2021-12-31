<!-- server side javascript get the url param and fetch pokemon details and pass data through props-->
<script context="module">
    export async function load({params}){
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
        return {props: {pokeman}}
    }
</script>

<!-- client side javascript -->
<script>
    // expecting a prop by the name of pokeman which will be returned from serverside script
    export let pokeman;
</script>
<h1>{pokeman.name}</h1>