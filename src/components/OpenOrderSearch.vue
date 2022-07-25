<template>
    <div class="open_order_search">
        <div class="open_order_first_container">
            <SideBar />
        </div>
        <div class="open_order_second_container">
            <div class="open_order_search_details">
                <div class="second_container_header">
                    <div class="second_container_header_item" v-for="(item, i) in headerList" :key="i">
                        {{ item.name }}
                    </div>

                </div>
                <div class="row">
                    <div class="box" v-for="(item, i) in headerList" :key="i">
                        <!-- card for each column -->
                        <div class="card">
                            <p>ATTN:NICOLLE MONTOYA</p>
                            <p>2350 W 60 ST #17</p>
                            <p>HIALEAH, FL, 33016</p>
                            <p>UNITED STATES</p>
                            <p>P: 754-244-1137</p>
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="box" v-for="(item, i) in headerList" :key="i">
                       <div class="card">
                            <p>ATTN:NICOLLE MONTOYA</p>
                            <p>2350 W 60 ST #17</p>
                            <p>HIALEAH, FL, 33016</p>
                            <p>UNITED STATES</p>
                            <p>P: 754-244-1137</p>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
    name: "OpenOrderSearch",
    data() {
        return {
            headerList: [
                { name: "OP/S NO." },
                { name: "PO Number" },
                { name: "Date" },
                { name: "Entery Loc" },
                { name: "Ship Loc" },
                { name: "Total" },
                { name: "Asc" },
                { name: "Status" },
            ],
        };
    },
    components: {
        SideBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    display: flex;
    flex-direction: row;
    border-right: 1px solid #DEDDDE;
}
.box {
    background-color: #F7F5F7;
    min-height: 200px;
    border: 1px solid #DEDDDE;
    border-top: none;
    border-right:none;
    flex:1;
}
.card{
    /* padding:10px; */
}
.card>p{
    line-height: 17px;
    padding:5px 10px;
    font-size: 14px;
    margin:0;
}
.open_order_search {
    display: flex;
    height: 76vh;
    background-color: #F7F5F7;
    /* border: 3px solid blue; */

}

.open_order_first_container {
    display: flex;
    min-width: 280px;
    border-right: 1px solid #DEDDDE;
    /* height: 80vh; */
    position: sticky;
    /* border: 3px solid red; */
}

.open_order_second_container {
    display: flex;
    flex-direction: column;
    flex: 1;
    /* height: 80vh; */
    padding-left:20px;
    overflow-y: auto;
    /* border: 3px solid yellow; */

}

.open_order_search_details {
    overflow-y: auto;
    height: 80vh;
}

.open_order_search_details ::-webkit-scrollbar {
    width: 1px;
}

.second_container_header {
    display: flex;
    /* flex: 1; */
    position: sticky;
    top: 0;
    background-color: #676668;
    border-radius: 5px 5px 0 0;
    border-right: 1px solid #DEDDDE;
    height: 40px;
    /* border: 3px solid green; */

}

.second_container_header_item {
    color: white;
    display: flex;
    flex: 1;
    height: 40px;
    align-items: center;
    border-left: 1px solid #DEDDDE;
    padding: 0 10px;
}

</style>
