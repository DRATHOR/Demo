<template>
  <div class="header_bar">
    <div class="nav">
      <div class="nav_first">
        <div class="nav_logo">
          <h1>MSC</h1>
        </div>
        <div>
          <div class="nav_search">
            <button v-on:click="isOpen = !isOpen">
              Options<span class="nav_option">C</span
              ><span class="nav_option_icon">▼</span>
            </button>
            <input type="text" placeholder="Search Customers" />
          </div>
          <transition appear>
            <div v-if="isOpen">
              <ul>
                <li v-for="(item, i) in list" :key="i">
                  <router-link v-bind:to="item.link" @click="isOpen = !isOpen">
                    {{ item.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="nav_second">
        <div class="nav_menu" v-for="(item, i) in navMenu" :key="i">
          <stong class="pb-8">{{ item.title }}</stong>
          <small class="pb-8 font-size-12">{{ item.subTitle }}</small>
        </div>
        <div class="nav_menu_thired">
          <stong class="pb-8">Order:#</stong>
          <small class="pb-8 font-size-12">Items:</small>
          <div class="nav_menu_button">
            <button class="success">Close</button>|
            <button class="warn">Delete</button>
          </div>
        </div>
        <div class="nav_menu_thired">
          <div class="nav_menu_user_info">
            <img src="../assets/person.svg" alt="" class="user_img" />
            <stong>GottumuS ▼</stong>
          </div>
        </div>
      </div>
    </div>
    <!-------------------------bottom nav bar-------- -->

    <BottomHeaderBar :show="ShowBottomBar" />
  </div>
</template>
<script>
import BottomHeaderBar from "../components/BottomHeaderBar.vue";
export default {
  name: "HeaderBar",
  props: {
    ShowBottomBar: Boolean,
  },
  components: {
    BottomHeaderBar,
  },
  data() {
    return {
      list: [
        { id: "1", name: "Open Order", link: "/open-order" },
        { id: "2", name: "Customer", link: "/#" },
        { id: "3", name: "Acquistion", link: "/#" },
        { id: "4", name: "Items", link: "/#" },
        { id: "5", name: "Part Number", link: "/#" },
        { id: "6", name: "Vendor", link: "/#" },
        { id: "7", name: "Purchase", link: "/#" },
      ],
      navMenu: [
        {
          title: "Bill To:#",
          subTitle: "Not Selected",
        },
        {
          title: "Ship To:#",
          subTitle: "Not Selected",
        },
        {
          title: "Contect:",
          subTitle: "Not Selected",
        },
      ],
      isOpen: false,
    };
  },
  methods: {
    onClickMethods: (e) => {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.header_bar {
  position: sticky;
  top: 0;
  z-index: 2;
}

.nav {
  background-color: #3d3c3e;
  display: flex;
  justify-content: space-between;
  height: 105px;
  width: 100%;
  margin: 0;
}

.nav_logo > h1 {
  font-size: 75px;
  font-weight: 800;
  font-style: italic;
  color: #fe3331;
  padding-right: 20px;
  padding-left: 10px;
}

.nav_first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
}

.nav_search {
  /* width: 30px; */
  margin-top: -10px;
  display: flex;
  align-items: center;
  font-weight: 500;
  /* flex: 1; */
}

.nav_search > button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px 0 0 15px;
  background-color: #f0eef0;
  padding: 5px;
  border: none;
  height: 34px;
  width: 100px;
}

.nav_search > input {
  border-radius: 0 15px 15px 0;
  padding: 5px;
  width: 130px;
  outline: none;
  height: 23px;
}

.nav_second {
  display: flex;
  width: 65%;
}

.nav_menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
  color: white;
  border-right: 3px solid #4d4c4e;
}

.nav_option {
  width: 20px;
  height: 20px;
  background-color: #36768a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  /* font-weight: 500; */
}

.nav_option_icon {
  color: #36768a;
}

.nav_menu_thired {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
  color: white;
  /* border-right: 3px solid #4D4C4E; */
}

.user_img {
  color: #fff;
}

.nav_menu_user_info {
  display: flex;
  align-items: center;
}

.pb-8 {
  padding-bottom: 8px;
}

.font-size-12 {
  font-size: 12px;
}

.nav_menu_button {
  display: flex;
  min-width: 120px;
  justify-content: space-between;
  /* padding-top:10px; */
}

.nav_menu_button > button {
  padding: 5px;
  border-radius: 4px;
  border: none;
  color: #f5f5f5;
  /* margin-right:10px; */
}

.success {
  background-color: #36768a;
}

.warn {
  background-color: #913734;
}

.drop_down,
ul {
  position: absolute;
  top: 55px;
  background: white;
  width: 128px;
  z-index: 2;
  background-color: while;
  padding: 10px 10px 0px;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0px 0px 20px -3px #888888;
}

li {
  padding: 0 10px 10px 10px;
  font-weight: 600;
  font-size: 14px;
}

p {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #363231;
}
</style>
