<template>
  <div style="position: absolute; left: 0; width: 100%; height: 100%">
    <a href=""></a>
    <div>sakkdska</div>
    <div>2k2k2k</div>
    <div class="relative aa">
      <!-- <img
        src="http://gpt-museum.oss-cn-hangzhou.aliyuncs.com/prd/img/sp5.png"
        usemap="#image-map"
        alt="Map"
        style="position: absolute; height: 1000px; left: 0"
        width="750"
        @click="getData"
      /> -->
      <img
        src="http://gpt-museum.oss-cn-hangzhou.aliyuncs.com/prd/kunming/km.png"
        usemap="#image-map"
        alt="Map"
        style="position: absolute; height: 1822px; left: 0"
        width="3000"
        @click="getData"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import logo from "@/assets/860.png";

const imageSource = ref(logo);

const highlight = reactive({
  visible: false,
  style: {
    position: "absolute",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    pointerEvents: "none",
    left: "0",
    top: "0",
    width: "0",
    height: "0",
  },
});

const mapRegions = ref([
  {
    name: "Region 1",
    coords: "0,0,90,90",
  },
]);

const toggleHighlight = (region) => {
  if (!highlight.visible) {
    const coords = region.coords.split(",").map(Number);
    highlight.style.left = `${coords[0]}px`;
    highlight.style.top = `${coords[1]}px`;
    highlight.style.width = `${coords[2] - coords[0]}px`;
    highlight.style.height = `${coords[3] - coords[1]}px`;
    highlight.visible = true;
  } else {
    highlight.visible = false;
  }
};
const getData = (e) => {
  console.log(e.offsetX, e.offsetY, "x,y");
};
const getKey = (obj) => {
  const newobj = {};
  Object.keys(obj).forEach((el) => {
    if (typeof obj[el] === "object") {
      getKey(obj[el]);
    } else {
      newobj[el] = obj[el];
    }
  });
  return newobj;
};
</script>

<style>
.highlight {
  /* Other styles if needed */
}
.aa {
  width: 3000px;
}
</style>
