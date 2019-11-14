<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {getTaskList} from '@/projects/projectA/api/allApi.js'
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data(){
    return{
      list:[]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      getTaskList({}).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>
