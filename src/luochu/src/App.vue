<template>
  <div>
    <h1>落初文学</h1>
    <el-container>
      <el-header>
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 精选</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane label="女生">女生</el-tab-pane>
          <el-tab-pane label="男生">男生</el-tab-pane>
          <el-tab-pane label="限免">限免</el-tab-pane>
          <el-tab-pane label="大神">大神</el-tab-pane>
          <el-tab-pane label="全本">全本</el-tab-pane>
        </el-tabs>
      </el-header>

      <el-main></el-main>

      <el-footer>
        <!-- <router-view/> -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
            <!-- <router-link :to="item.path"> -->
              {{item.text}}
            <!-- </router-link> -->
          </el-menu-item>
        </el-menu>
      </el-footer>
    </el-container>
    
    
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      activeIndex: "/main",
      menus: [
        {
          name: "main",
          path: "/main",
          text: "主页"
        },
        {
          name: "books",
          path: "/books",
          text: "书架"
        },
        {
          name: "classes",
          path: "/classes",
          text: "分类"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    handleSelect(index, indexpath) {
      console.log(index, indexpath);
    }
  },
  components: {}
};
</script>

<style>
</style>
