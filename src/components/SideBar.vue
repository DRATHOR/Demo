<template>
    <div class="sidebar">
        <div v-for="(item, i) in sideBarList" :key="i">
            <div class="sidebar_title">
                {{ item.title }}
            </div>
            <div class="sidebar_elements" v-if="item.list">
                <div class="sidebar_elements_item" v-for="(elements, index) in item.list" :key="index">
                    {{ elements.item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            sideBarList: [
                { title: 'AVAILABLE REFINEMENTS' },
                {
                    title: 'MATCH TYPE', list: [
                        { item: 'Bill To' },
                        { item: 'Contact' },
                        { item: 'Ship To' },
                    ]
                },
                { title: 'STATE' ,list:[
                    {item:'AL'},
                    {item:'AR'},
                    {item:'CA'},
                    {item:'DC'},
                    {item:'FL'},
                    {item:'GA'},
                    {item:'LA'},
                    {item:'MA'},
                    {item:'MN'},
                ]},
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar{
    position:sticky;
    top:140px;
    z-index: 2;
    min-width: 280px;
    padding:10px;
    overflow: auto;
}
.sidebar_title{
    font-weight: 500;
    color:#A1A0A2;
    padding:10px;
}
.sidebar_elements{
    padding:0px 10px;
}
.sidebar_elements_item{
    padding:5px 10px;
}
</style>
