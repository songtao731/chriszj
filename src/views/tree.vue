<template>
  <div class="demo-container">
    <div id="viewer"></div>
    <ul class="item-container">
      <li
        v-for="(item, index) in itemArr"
        :key="index"
        @click="changView(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <div id="tooltip-content">
    <article>
      <h2>我是标识文字</h2>
    </article>
    <div>11</div>
  </div>
  <div id="tooltip-content2">
    <article>
      <h2>我是圆心标记</h2>
    </article>
    <div>11</div>
  </div>
  <div id="lorem-content">
    <h1>HTML Ipsum Presents</h1>

    <p>
      <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
      et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
      vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
      quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
      placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
      pharetra. Vestibulum erat wisi, condimentum sed,
      <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit
      eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
      enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
      Ut felis.
    </p>
    <h2>Header Level 2</h2>

    <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ol>

    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
        Cras in mi at felis aliquet congue. Ut a est eget ligula molestie
        gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
        tellus est malesuada tellus, at luctus turpis elit sit amet quam.
        Vivamus pretium ornare est.
      </p>
    </blockquote>

    <h3>Header Level 3</h3>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Viewer } from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";

import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";
import { events } from "@photo-sphere-viewer/core";
import imgs from "@/assets/1-1.jpg";
import imgs2 from "@/assets/3-1.jpg";
import imgs3 from "@/assets/2-2.jpg";

import imgs2s from "@/assets/3-1-1.jpg";
import dw from "@/assets/dw.png";
import { onMounted, ref } from "vue";

const viewer = ref();
const markersPlugin = ref();
const gallery = ref();

const itemArr = [
  {
    // img: require('@/assets/imgs/demo/demo1.jpeg'),
    img: imgs,
    name: "杨家界-三门峡",
    marks: [
      {
        pitch: 0.11,
        yaw: -0.35,
        content: "我是标记点1",
        id: 1,
      },
      {
        yaw: 0,
        pitch: 0,
        content: "我是标记点2",
        id: 2,
      },
      {
        pitch: 0.21,
        yaw: -0.85,
        content: "我是标记点3",
        id: 3,
      },
    ],
  },
  {
    img: imgs2,
    marks: [
      {
        pitch: 0.11,
        yaw: -0.45,
        content: "张家界标记点1",
        id: 4,
      },
      {
        yaw: 0.22,
        pitch: -0.11,
        content: "张家界标记点2",
        id: 5,
      },
      {
        pitch: 0.31,
        yaw: -0.55,
        content: "张家界标记点3",
        id: 6,
      },
    ],
    name: "杨家界-一线天",
  },
  {
    img: imgs3,
    marks: [
      {
        pitch: 0.21,
        yaw: -0.55,
        content: "张家界标记点3=1",
        id: 7,
      },
      {
        yaw: 0.42,
        pitch: -0.21,
        content: "张家界标记点2=2",
        id: 8,
      },
      {
        pitch: 0.51,
        yaw: -0.55,
        content: "张家界标记点4=3",
        id: 9,
      },
    ],
    name: "金鞭岩",
  },
];

//初始化视图
const init = (data) => {
  viewer.value = new Viewer({
    container: document.getElementById("viewer"),
    panorama: data.img,
    caption: data.name,
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    plugins: [
      [
        MarkersPlugin,
        {
          markers: [],
        },
      ],
      [
        GalleryPlugin,
        {
          visibleOnLoad: true,
          hideOnClick: false,
        },
      ],
      [
        AutorotatePlugin,
        {
          autorotatePitch: "5deg",
          autostartDelay: 2000,
        },
      ],
    ],
  });

  viewer.value.addEventListener(
    "ready",
    () => {
      viewer.value.rotate({
        textureX: 1500,
        textureY: 1000,
      });
      console.log(viewer.value);
    },
    { once: true }
  );
};
//动态添加标记(获取已存在的标记)
const setMarkerConfig = (data) => {
  markersPlugin.value = viewer.value.getPlugin(MarkersPlugin);
  if (!data.marks.length) {
    return;
  }
  data.marks.forEach((ele) => {
    const markerConfig = {
      id: ele.id,
      tooltip: {
        content: ele.content,
        position: "top",
      },
      position: { pitch: ele.pitch, yaw: ele.yaw },
      image: dw,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      content: document.getElementById("lorem-content").innerHTML,
    };

    markersPlugin.value.addMarker(markerConfig);
    markersPlugin.value.showMarkerTooltip(markerConfig.id);
  });
  //   const markerConfig = {
  //     id: "custom-tooltip",
  //     tooltip: {
  //       content: document.querySelector("#tooltip-content").innerHTML,
  //       className: "custom-tooltip",
  //       position: "top",
  //     },
  //     position: { pitch: data.pitch, yaw: data.yaw },
  //     image: dw,
  //     size: { width: 32, height: 32 },
  //     anchor: "bottom center",
  //     content: document.getElementById("lorem-content").innerHTML,
  //   };
  //   const markerConfig2 = {
  //     // html marker with custom style   空格可以换行
  //     id: "text",
  //     position: { pitch: data.pitch, yaw: data.yaw },

  //     html: "HTML <b>marker</b> &hearts;",
  //     anchor: "bottom right",
  //     scale: [0.5, 1.5],
  //     style: {
  //       maxWidth: "100px",
  //       color: "white",
  //       fontSize: "20px",
  //       fontFamily: "Helvetica, sans-serif",
  //       textAlign: "center",
  //     },
  //     tooltip: {
  //       content: "An HTML marker",
  //       position: "right",
  //     },
  //     content: document.getElementById("lorem-content").innerHTML,
  //   };
  //   const markerConfig3 = {
  //     // circle marker
  //     id: "circle",
  //     circle: 10,
  //     tooltip: {
  //       content: "A image marker. <b>Click me!</b>",
  //       className: "custom-tooltip",
  //       position: "top",
  //     },
  //     position: { pitch: 0.21, yaw: -0.85 },
  //     size: { width: 32, height: 32 },
  //     anchor: "bottom center",
  //     content: document.getElementById("lorem-content").innerHTML,
  //   };
  //   markersPlugin.value.addMarker(markerConfig);
  //   markersPlugin.value.addMarker(markerConfig2);
  //   markersPlugin.value.addMarker(markerConfig3);

  //   // 显示 tooltip
  //   markersPlugin.value.showMarkerTooltip("custom-tooltip");
  //   markersPlugin.value.showMarkerTooltip("text");
  //   markersPlugin.value.showMarkerTooltip("circle");
};

//添加展示图
const setList = () => {
  gallery.value = viewer.value.getPlugin(GalleryPlugin);

  gallery.value.setItems([
    {
      id: "sphere",
      panorama: imgs,
      thumbnail: imgs,
      name: "城市",
      options: {
        caption: "城市地图",
      },
    },
    {
      id: "key-biscayne",
      panorama: imgs2,
      thumbnail: imgs2s,
      name: "张家界",
      options: {
        caption: "张家界地图",
      },
    },
  ]);
};
//全局点击事件
const clickView = () => {
  viewer.value.addEventListener("click", ({ data }) => {
    console.log(data, "全局点击数据");
    //  markersPlugin.value.clearMarkers();
  });
};
//标记点击事件
const clickMarker = () => {
  markersPlugin.value.addEventListener("select-marker", ({ marker }) => {
    console.log(marker);
  });
};
//创建标记点
const setClickMarker = () => {
  viewer.value.addEventListener("click", ({ data }) => {
    if (!data.rightclick) {
      markersPlugin.value.addMarker({
        id: "#" + Math.random(),
        position: { yaw: data.yaw, pitch: data.pitch },
        image: dw,
        size: { width: 32, height: 32 },
        anchor: "bottom center",
        tooltip: "Generated pin",
        data: {
          generated: true,
        },
      });
    }
  });
};
//切换场景

const changView = (data) => {
  if (viewer.value)
    try {
      viewer.value.destroy();
    } catch (e) {}
  init(data);
  markersPlugin.value.clearMarkers();
  setTimeout(() => {
    setMarkerConfig(data);
    clickView();
    clickMarker();
  }, 1000);
};

onMounted(() => {
  //初始化数据
  init(itemArr[0]);
  //设置标记点||点击事件||切换图

  setTimeout(() => {
    setMarkerConfig(itemArr[0]);
    // setList();
    //  setClickMarker();
    clickView();
    clickMarker();
    // changView(itemArr[0]);
  }, 1000);
});
</script>

<style lang="scss" scoped>
.demo-container {
  min-width: 1439px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  #viewer {
    width: 100%;
    height: calc(100% - 100px);
  }

  .item-container {
    text-align: center;
    top: 100px;
    li {
      cursor: pointer;
      display: inline-block;
      padding: 10px 20px;
      &:hover {
        background-color: blue;
        color: white;
      }
    }
  }
}
</style>
