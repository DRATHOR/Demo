<template>
    <div class="customerSearch_container">
        <h1>Open Order Search</h1>
        <p>Search by name, bill-to, phone number or just type anything.</p>
        <p>You can also refine using a variety of data attributes to nerrow your search results.</p>
        <h2>Start Searching</h2>
    </div>
</template>

<script>
export default {
    name: 'CustomerSearch',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customerSearch_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
}

p {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    /* font-style: bold; */
}

h2 {
    color: rgb(66, 176, 219);
}

h1 {
    font-size: 40px;
    padding-bottom: 10px;
    margin: 0;
}
</style>
