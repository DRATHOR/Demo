<template>
  <div>
    <div class="nav_bottom" v-if="!show"></div>
    <div class="nav_bottom" v-if="show">
      <div class="nav_bottom_first">Matched 262 customers</div>
      <div class="nav_bottom_second">
        <div class="pagination_container">
          <div v-for="i in pages" :key="i">
            <span
              class="pagination"
              v-bind:class="[id === i ? 'active' : '']"
              @click="id = i"
              >{{ i }}</span
            >
          </div>
          <div class="pagination next_page">
            {{ ">" }}
          </div>
          <div class="pagination next_slot">
            {{ ">>" }}
          </div>
        </div>

        <div class="filter_details">
          <div class="filter_input">
            <input type="text" placeholder="Best Match" />
            <img src="../assets/downArrow.svg" alt="" class="down_arrow" />
          </div>
          <div class="nav_bottom_checkbox">
            <input type="checkbox" /><span>Active</span>
            <input type="checkbox" /><span>My Locations</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // pages:Number,
    // isOpen:Boolean||false,
    // isActive:Boolean||false,
    // k:Number||1,
    show: Boolean || false,
  },
  data() {
    return {
      pages: 5,
      isActive: false,
      id: 1,
    };
  },
  methods: {
    printProps: (show) => {
      console.log(show);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_bottom {
  height: 40px;
  background-image: linear-gradient(#666667, #414041, #414041);
  display: flex;
  color: white;
}

.nav_bottom_first {
  min-width: 300px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.nav_bottom_second {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0px 5px 0 20px;
}
.pagination_container {
  display: flex;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 20px;
  border-radius: 10px;
  background-color: #99989a;
  margin: 0px 5px;
}
.active {
  background-color: #333233;
}
.next_slot {
  padding: 0 5px;
}
.next_slot:hover,
.next_page:hover {
  background-color: #333233;
}
.filter_details {
  display: flex;
}
.filter_input {
  display: flex;
  background-color: white;
  align-items: center;
}
.filter_input > input {
  width: 75px;
  outline: none;
  border: none;
}
.down_arrow {
  color: #333233;
  /* padding-right:5px; */
  width: 20px;
  height: 20px;
}
.nav_bottom_checkbox {
  font-size: 14px;
}
.nav_bottom_checkbox > span {
  padding: 0px 5px;
}
</style>
