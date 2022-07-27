<template>
  <div class="open_order_search">
    <div class="open_order_first_container">
      <SideBar />
    </div>
    <div class="open_order_second_container">
      <div class="open_order_search_details">
        <div class="second_container_header">
          <div
            class="second_container_header_item"
            v-for="(item, i) in headerList"
            :key="i"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="row" v-for="(item, index) in data" :key="index">
          <div
            class="box"
            v-for="(elements, i) in Object.values(item)"
            :key="i"
          >
            <div class="card">
              <p>{{ elements }}</p>
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
        { name: "P/S NO." },
        { name: "PO Number" },
        { name: "Date" },
        { name: "Customers" },
        { name: "Asc" },
        { name: "Status" },
      ],
      data: [
        {
          psNumber: "8584261",
          poNuber: "RESET 22",
          date: "7/25/22",
          customer: "RAJASWINI GSA",
          asc: "999",
          status: "PACKED",
        },
        {
          psNumber: "8584280",
          poNuber: "SP_TC003.013_22",
          date: "7/25/22",
          customer: "BARKHA JAIN",
          asc: "999",
          status: "PACKED",
        },
        {
          psNumber: "8584279",
          poNuber: "22 SHIP",
          date: "7/25/22",
          customer: "BARKHA JAIN",
          asc: "999",
          status: "PACKED",
        },
        {
          psNumber: "8584278",
          poNuber: "TEXT1 0725",
          date: "7/25/22",
          customer: "MANASA P",
          asc: "999",
          status: "PACKED",
        },
        {
          psNumber: "8584276",
          poNuber: "TEXT 2 OW RBO",
          date: "7/25/22",
          customer: "PRATYUSHA",
          asc: "999",
          status: "QUEUED",
        },
        {
          psNumber: "8584275",
          poNuber: "SP_TC002.010_27",
          date: "7/25/22",
          customer: "BARKHA JAIN",
          asc: "999",
          status: "PACKED",
        },
        {
          psNumber: "8584272",
          poNuber: "TEXTBKODR_JULY2",
          date: "7/25/22",
          customer: "GOODYEAR TIRE & RUBBER",
          asc: "999",
          status: "B/O",
        },
        {
          psNumber: "8584271",
          poNuber: "SP_TCOO2.022",
          date: "7/25/22",
          customer: "BARKHA JAIN",
          asc: "999",
          status: "PRINT_WAIT",
        },
      ],
    };
  },
  components: {
    SideBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  border-right: 1px solid #deddde;
  background-color: gray;
}
.box {
  background-color: #f7f5f7;
  min-height: 40px;
  border: 1px solid #deddde;
  border-top: none;
  border-right: none;
  align-items: center;
  display: flex;
  flex: 1;
}
.card {
  /* padding:10px; */
}
.card > p {
  line-height: 17px;
  padding: 5px 10px;
  font-size: 14px;
  margin: 0;
}
.open_order_search {
  display: flex;
  height: 80vh;
  background-color: #f7f5f7;
  /* border: 3px solid blue; */
}

.open_order_first_container {
  display: flex;
  min-width: 280px;
  border-right: 1px solid #deddde;
  /* height: 80vh; */
  position: sticky;
  /* border: 3px solid red; */
}

.open_order_second_container {
  display: flex;
  flex-direction: column;
  flex: 1;
  /* height: 80vh; */
  padding-left: 20px;
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
  border-right: 1px solid #deddde;
  height: 40px;
  /* border: 3px solid green; */
}

.second_container_header_item {
  color: white;
  display: flex;
  flex: 1;
  height: 40px;
  align-items: center;
  border-left: 1px solid #deddde;
  padding: 0 10px;
}
</style>
