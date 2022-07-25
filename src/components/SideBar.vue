<template>
    <div class="sidebar">
        <div v-for="(item, i) in sideBarList" :key="i">
            <div class="sidebar_title">
                {{ item.title }}
            </div>
            <div class="sidebar_elements" v-if="item.list">
                <div class="sidebar_elements_item" v-for="(elements, index) in item.list" :key="index">
                    {{ elements.item }}
                    <span class="sidebar_elements_counter" v-if="elements.count">{{elements.count}}</span>
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
                        { item: 'Bill To' ,count:57},
                        { item: 'Contact' ,count:135},
                        { item: 'Ship To' ,count:75},
                    ]
                },
                { title: 'STATE' ,list:[
                    {item:'AL',count:23},
                    {item:'AR',count:23},
                    {item:'CA',count:23},
                    {item:'DC',count:23},
                    {item:'FL',count:23},
                    {item:'GA',count:23},
                    {item:'LA',count:23},
                    {item:'MA',count:23},
                    {item:'MN',count:23},
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
    display: flex;
    align-items: center;
}
.sidebar_elements_counter{
    width:auto;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F7FB;
    margin-left:10px;
    padding:5px;
    border-radius: 3px;
border:1px solid #DEDDDE;
font-size: 12px;
}
</style>
