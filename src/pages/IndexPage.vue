<template>
  <q-page
    class="q-pa-sm bg-grey-2 text-red flex flex-center"
    :style="{ height: heightQpage }"
    :style-fn="setHeightQPage" @click="createImage"
  >
    <div id="PLAYGROUND"
      class="tw-h-full tw-w-fit flex flex-center text-yellow tw-rounded-md overflow-hidden"
      v-bind:style="{ padding: G_FRAME + 'px',background : 'linear-gradient('+ G_ROTATION +'deg,'+ hexToHSL(G_COLOR,G_GRADIENT)+')' }"
    >
      <img
        class="tw-h-full q-pa-lg bg-white"
        :style="{
          'border-radius': G_RADIUS / 2 + 'px',
          padding: G_PADDING + 'px',
          'box-shadow': '0px 0px ' + G_SHADOW + 'px' + ' #111111ff',
        }"
        src="https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-abstract-portrait-1-macinmac.jpg"
      />
    </div>
    <q-footer bordered class="bg-white text-dark">
      <q-toolbar class="flex flex-center">
        <div class="tw-w-full tw-container row q-gutter-lg">
        <div class="col row q-py-sm tw-items-center justify-end">
          <div v-bind:style="{background:'linear-gradient('+ G_ROTATION +'deg,'+ hexToHSL(G_COLOR,G_GRADIENT)+')'}"
            class="tw-border cursor-pointer tw-border-gray-700 tw-rounded tw-h-4 tw-w-6 md:tw-h-6 md:tw-w-8 lg:tw-h-8 lg:tw-w-12 justify-center ">
            <q-menu>
              <q-color v-model="G_COLOR" no-header no-footer class="my-picker" />
            </q-menu>
          </div>
          <div class="q-pl-sm text-bold text-uppercase">{{G_COLOR}}</div>
        </div>
          <div class="col">
            <q-icon name="crop_free" color="grey-8"></q-icon> Frame
            <q-slider
              v-model="G_FRAME"
              :min="0"
              :max="150"
              track-size="10px"
              color="primary"
            />
          </div>
          <div class="col">
            <q-icon name="crop_free" color="grey-8"></q-icon> Padding
            <q-slider
              v-model="G_PADDING"
              :min="0"
              :max="50"
              track-size="10px"
              color="primary"
            />
          </div>
          <div class="col">
            <q-icon name="fiber_smart_record" color="grey-8"></q-icon>
            Radius<q-slider
              v-model="G_RADIUS"
              :min="0"
              :max="500"
              track-size="10px"
              color="primary"
            />
          </div>
          <div class="col">
            <q-icon name="crop_free" color="grey-8"></q-icon> Shadow
            <q-slider
              v-model="G_SHADOW"
              :min="5"
              :max="100"
              track-size="10px"
              color="primary"
            />
          </div>

          <div class="col">
            <q-icon name="crop_free" color="grey-8"></q-icon> Gradient
            <q-slider
              v-model="G_GRADIENT"
              :min="0"
              :max="15"
              track-size="10px"
              color="primary"
            />
          </div>
          <div class="col">
            <q-icon name="crop_free" color="grey-8"></q-icon> Rotation
            <q-slider
              v-model="G_ROTATION"
              :min="0"
              :max="360"
              track-size="10px"
              color="primary"
            />
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'
import { domtoimage } from 'dom-to-image';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      visible: ref(true),
      heightQpage: ref(),
      G_COLOR:ref("#ff0000"),
      G_FRAME: ref(60),
      G_RADIUS: ref(30),
      G_PADDING: ref(24),
      G_SHADOW: ref(0),
      G_GRADIENT: ref(0),
      G_ROTATION: ref(0),
      G_BG_GRADIENT:ref()
    };
  },
  methods: {
    createImage() {

      domtoimage.toJpeg(document.getElementById('PLAYGROUND'), {quality: 0.95})
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        }).catch((error)=>{
          console.log(error)
        })
    },
    setHeightQPage(offset) {
      this.heightQpage = offset ? window.innerHeight - offset + "px" : "100vh";
      // return { minHeight: offset ? window.innerHeight-offset+'px' : '100vh' }
    },
    hexToHSL(H,percent = 0) {
      // Convert hex to RGB first
      let r = 0, g = 0, b = 0;
      if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
      } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
      }
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

      if (delta == 0)
        h = 0;
      else if (cmax == r)
        h = ((g - b) / delta) % 6;
      else if (cmax == g)
        h = (b - r) / delta + 2;
      else
        h = (r - g) / delta + 4;

      h = Math.round(h * 60);

      if (h < 0)
        h += 360;

      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
      // if(flag == 0)
        // return "hsl(" + h + "," + s + "%," + l + "%)";
      // else if (flag == 1)
      // return "hsl(" + h + "," + s + "%," + ((l-percent > 0)?l-percent:l) + "%)" + ',' +"hsl(" + h + "," + s + "%," + ((l-percent < 100)?l+percent:100) + "%)";

      return "hsl(" + h + "," + s + "%," + ((l-percent > 0)?l-percent:l) + "%)"+ ',' + "hsl(" + ((h+percent*1.5 < 360)?h+percent*1.5:(h+percent*1.5)-360) + "," + s + "%," + l + "%)";
      // else if (flag == 2)
      //   return "hsl(" + h + "," + s + "%," + ((l+20 < 100)?l+20:100) + "%)";
    }
  },
  created() {
  },
})
</script>
