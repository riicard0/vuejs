<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Lara Elizabeth</h1>
              <span class="text-grey">Web Designer & Developer</span><br />
              <v-btn tile dark class="text-yellow mt-8" variant="outlined">Contact me</v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="position: absolute;z-index: 9999;bottom:0;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center;">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative;z-index: 9999;" class="mt-16">
              <v-img src="i1.png" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">

        PAREI AQUI: 12:04 <br />
        YouTube (AAE IdeaPro): https://www.youtube.com/watch?v=7yd5Q6b-rss&list=WL&index=2

      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar
  },
});
</script>

<style scoped>
.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.head:after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
</style>