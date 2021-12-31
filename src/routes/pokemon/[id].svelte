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
    const type = pokeman.types[0].type.name
</script>
<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
<p>Type: 
    <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
    | Weight: <strong>{pokeman.weight} </strong>

</p>
<img class="card-image" src= {pokeman.sprites['front_default']} alt={pokeman.name}>
