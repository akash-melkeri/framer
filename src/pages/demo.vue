<template class="tw-max-h-screen">

    <div class="  tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow" style="height: 100vh">
    <div class="tw-px-4 tw-py-5 sm:tw-px-6" style="height: 10vh">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
          <header class="tw-bg-white">
      <div class="tw-mx-auto tw-max-w-9xl ">
        <Popover class="tw-flex tw-h-10 tw-justify-between">
          <div class="tw-flex tw-px-2 lg:tw-px-0">
            <div class="tw-flex tw-flex-shrink-0 tw-items-center">
              <a href="#">
                <img class="tw-h-8 tw-w-auto" :src="'./logo_incentius.svg'"
                     alt="Your Company"/>
              </a>
            </div>
            <nav aria-label="Global" class="tw-hidden lg:tw-ml-3 lg:tw-flex lg:tw-items-center lg:tw-space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 class="tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-900">{{ item.name }}</a>
            </nav>
          </div>
<!--          <div class="tw-flex tw-flex-1 tw-items-center tw-justify-center tw-px-2 lg:tw-ml-6 lg:tw-justify-end">-->
<!--            <div class="tw-w-full tw-max-w-lg lg:tw-max-w-xs">-->
<!--              <label for="search" class="tw-sr-only">Search</label>-->
<!--              <div class="tw-relative">-->
<!--                <div class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3">-->
<!--                  <MagnifyingGlassIcon class="tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true"/>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <!--          <div class="tw-flex tw-items-center lg:tw-hidden">-->
          <!--            &lt;!&ndash; Mobile menu button &ndash;&gt;-->
          <!--            <PopoverButton class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-blue-500">-->
          <!--              <span class="tw-sr-only">Open main menu</span>-->
          <!--              <Bars3Icon class="tw-block tw-h-6 tw-w-6" aria-hidden="true" />-->
          <!--            </PopoverButton>-->
          <!--          </div>-->
          <!--          <TransitionRoot as="template" >-->
          <!--            <div class="lg:tw-hidden">-->
          <!--              <TransitionChild as="template" enter="tw-duration-150 tw-ease-out" enter-from="tw-opacity-0" enter-to="tw-opacity-100" leave="tw-duration-150 tw-ease-in" leave-from="tw-opacity-100" leave-to="tw-opacity-0">-->
          <!--                <PopoverOverlay class="tw-fixed tw-inset-0 tw-z-20 tw-bg-black tw-bg-opacity-25" aria-hidden="true" />-->
          <!--              </TransitionChild>-->

          <!--              <TransitionChild as="template" enter="tw-duration-150 tw-ease-out" enter-from="tw-opacity-0 tw-scale-95" enter-to="tw-opacity-100 tw-scale-100" leave="tw-duration-150 tw-ease-in" leave-from="tw-opacity-100 tw-scale-100" leave-to="tw-opacity-0 tw-scale-95">-->
          <!--                <PopoverPanel focus class="tw-absolute tw-top-0 tw-right-0 tw-z-30 tw-w-full tw-max-w-none tw-origin-top tw-transform tw-p-2 tw-transition">-->
          <!--                  <div class="tw-divide-y tw-divide-gray-200 tw-rounded-lg tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5">-->
          <!--                    <div class="tw-pt-3 tw-pb-2">-->
          <!--                      <div class="tw-flex tw-items-center tw-justify-between tw-px-4">-->
          <!--                        <div>-->
          <!--                          <img class="tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="Your Company" />-->
          <!--                        </div>-->
          <!--                        <div class="tw&#45;&#45;mr-2">-->
          <!--                          <PopoverButton class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-blue-500">-->
          <!--                            <span class="tw-sr-only">Close menu</span>-->
          <!--                            <XMarkIcon class="tw-h-6 tw-w-6" aria-hidden="true" />-->
          <!--                          </PopoverButton>-->
          <!--                        </div>-->
          <!--                      </div>-->
          <!--                      <div class="tw-mt-3 tw-space-y-1 tw-px-2">-->
          <!--                        <a v-for="item in navigation" :key="item.name" :href="item.href" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-900 hover:tw-bg-gray-100 hover:tw-text-gray-800">{{ item.name }}</a>-->
          <!--                      </div>-->
          <!--                    </div>-->
          <!--                    <div class="tw-pt-4 tw-pb-2">-->
          <!--                      <div class="tw-flex tw-items-center tw-px-5">-->
          <!--                        <div class="tw-flex-shrink-0">-->
          <!--                          <img class="tw-h-10 tw-w-10 tw-rounded-full" :src="user.imageUrl" alt="" />-->
          <!--                        </div>-->
          <!--                        <div class="tw-ml-3">-->
          <!--                          <div class="tw-text-base tw-font-medium tw-text-gray-800">{{ user.name }}</div>-->
          <!--                          <div class="tw-text-sm tw-font-medium tw-text-gray-500">{{ user.email }}</div>-->
          <!--                        </div>-->
          <!--                        <button type="button" class="tw-ml-auto tw-flex-shrink-0 tw-rounded-full tw-bg-white tw-p-1 tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2">-->
          <!--                          <span class="tw-sr-only">View notifications</span>-->
          <!--                          <BellIcon class="tw-h-6 tw-w-6" aria-hidden="true" />-->
          <!--                        </button>-->
          <!--                      </div>-->
          <!--                      <div class="tw-mt-3 tw-space-y-1 tw-px-2">-->
          <!--                        <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-900 hover:tw-bg-gray-100 hover:tw-text-gray-800">{{ item.name }}</a>-->
          <!--                      </div>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </PopoverPanel>-->
          <!--              </TransitionChild>-->
          <!--            </div>-->
          <!--          </TransitionRoot>-->
          <div class="tw-hidden lg:tw-ml-4 lg:tw-flex lg:tw-items-center">
            <button type="button"
                    class="tw-flex-shrink-0 tw-rounded-full tw-bg-white tw-p-1 tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2">
              <span class="tw-sr-only">View notifications</span>
              <BellIcon class="tw-h-6 tw-w-6" aria-hidden="true"/>
            </button>
            <q-btn-toggle
              v-model="mode_options"
              spread
              class="my-custom-toggle tw-dark:tw-text-zinc-400 q-pa-md"
              no-caps
              unelevated
              @click="craeteImage()"
              toggle-color="primary"
              rounded
              color="grey-2"
              text-color="primary"
              :options="[
                    {label: 'Reset', value: 'one'},
                    {label: 'Generate', value: 'two'}
                  ]"
            />
            <!-- Profile dropdown -->
<!--            <Menu as="div" class="tw-relative tw-ml-4 tw-flex-shrink-0">-->
<!--              <div>-->
<!--                <MenuButton-->
<!--                  class="tw-flex tw-rounded-full tw-bg-white tw-text-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2">-->
<!--                  <span class="tw-sr-only">Open user menu</span>-->
<!--                  <img class="tw-h-8 tw-w-8 tw-rounded-full" :src="user.imageUrl" alt=""/>-->
<!--                </MenuButton>-->
<!--              </div>-->
<!--              &lt;!&ndash;              <transition enter-active-class="tw-transition tw-ease-out tw-duration-100"&ndash;&gt;-->
<!--              &lt;!&ndash;                          enter-from-class="tw-transform tw-opacity-0 tw-scale-95"&ndash;&gt;-->
<!--              &lt;!&ndash;                          enter-to-class="tw-transform tw-opacity-100 tw-scale-100"&ndash;&gt;-->
<!--              &lt;!&ndash;                          leave-active-class="tw-transition tw-ease-in tw-duration-75"&ndash;&gt;-->
<!--              &lt;!&ndash;                          leave-from-class="tw-transform tw-opacity-100 tw-scale-100"&ndash;&gt;-->
<!--              &lt;!&ndash;                          leave-to-class="tw-transform tw-opacity-0 tw-scale-95">&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                <MenuItems&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  <MenuItem v-for="item in userNavigation" :key="item.name">&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                    <a :href="item.href">{{ item.name }}</a>&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  </MenuItem>&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                </MenuItems>&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;              </transition>&ndash;&gt;-->
<!--            </Menu>-->
          </div>
        </Popover>
      </div>
    </header>
    </div>
    <div class="tw-px-4 tw-py-5 sm:tw-p-6" style="height: 80vh">
      <div v-bind:style="{margin: 'auto', padding: frame_padding +'px', background : gradient, 'border-radius': 30 + 'px', 'height':'100%', width: '50%'}" >
         <div class="" v-bind:style="{ margin: 'auto', overflow:'hidden', 'height':'100%', width: '100%'}">
              <div v-if="!preview_list.length" style="margin: auto; height: 400px; width: 400px" class="bg-gray-5;" >
                <q-card class="transparent"  style="height: 400px; width: 400px">
                  <q-card-section style="margin: auto" class="text-center q-pa-md">
                <q-btn class="btn btn-info " color="white" flat round icon="cloud_upload" @click="onPickFile" style="border:2px dashed #ffffff"></q-btn><br>
                    <span class="text-white text-caption" >Try Your Image</span>
                    </q-card-section>
                  <q-card-section style="margin: auto" class="text-center q-pa-md">
                <q-btn class="btn btn-info " color="white" flat round icon="add" style="border:2px dashed #ffffff" @click="preview_list[0] = 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'" ></q-btn>
                <br> <span class="text-white text-caption" >Try Demo Image</span>
                  </q-card-section>
                  <input type="file" style="display:none" accept="image/*" multiple="multiple" ref="myFileInput"
                       @change="previewMultiImage" class="form-control-file rounded-borders" id="my-file">
                </q-card>
              </div>
              <div v-else
                   v-bind:style="{ margin:'auto', padding:  img_padding+ 'px', objectFit:'contain !important', height:'100%', width:'100%', 'box-shadow': 2 +'px ' + 3 + 'px '  + shadow_size + 'px',  background : 'grey', overflow:'hidden',    'border-radius': roundness_size + 'px'}"
                   class="  sm:tw-rounded-lg tw-min-w-full tw-inline-flex">
                <img :src="preview_list[0]" alt="" class=""
                       :style="{ margin:'auto', overflow:'hidden', height:'100%', width:'100%', objectFit:'contain !important'}"/>
              </div>
            </div>
      </div>
    </div>
    <div class="tw-px-8 tw-pb-4 sm:tw-px-6 " style="height: 10vh">
      <div class="row q-gutter-lg tw-px-8">
      <div class="col"> <q-icon name="crop_free" color="grey-8"></q-icon> Frame
        <q-slider
                              v-model="img_padding"
                              :min="0"
                              :max="100"
                              track-size="15px"
                              selection-color="transparent"
                               thumb-size="15px"
                            /></div>
      <div class="col"> <q-icon name="fiber_smart_record" color="grey-8"></q-icon> Radius<q-slider
                              v-model="roundness_size"
                              :min="0"
                              :max="30"
                              track-size="10px"
                              color="primary"
                            /></div>
      <div class="col"> <q-icon name="crop_free" color="grey-8"></q-icon> Padding <q-slider
                              v-model="frame_padding"
                              :min="0"
                              :max="100"
                              track-size="15px"
                              selection-color="transparent"
                               thumb-size="15px"
                            /></div>
      <div class="col"> <q-icon name="crop_free" color="grey-8"></q-icon> Shadow <q-slider
                              v-model="shadow_size"
                              :min="5"
                              :max="50"
                              track-size="15px"
                              selection-color="transparent"
                               thumb-size="15px"
                            /></div>

        <div class="col"> <q-icon name="crop_free" color="grey-8"></q-icon> Gradient <q-slider
                              v-model="shadow_size"
                              :min="5"
                              :max="50"
                              track-size="15px"
                              selection-color="transparent"
                               thumb-size="15px"
                            /></div>
  <div class="col"> <q-icon name="crop_free" color="grey-8"></q-icon> Rotation <q-slider
                              v-model="shadow_size"
                              :min="5"
                              :max="50"
                              track-size="15px"
                              selection-color="transparent"
                               thumb-size="15px"
                            /></div>
         </div>
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
    </div>
  </div>
</template>
<script>
import {ref, defineComponent} from 'vue';
import { domtoimage } from 'dom-to-image';
import {VueGpickr, LinearGradient} from 'vue-gpickr';
import {
  ArrowLongLeftIcon,
  CheckIcon,
  HandThumbUpIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/vue/20/solid'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]

const user = {
  name: 'Whitney Francis',

  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  {name: 'Incentius', href: '#'},
]
const breadcrumbs = [
  {name: 'Jobs', href: '#', current: false},
  {name: 'Front End Developer', href: '#', current: false},
  {name: 'Applicants', href: '#', current: true},
]
const userNavigation = [
  {name: 'Your Profile', href: '#'},
  {name: 'Settings', href: '#'},
  {name: 'Sign out', href: '#'},
]
const attachments = [
  {name: 'resume_front_end_developer.pdf', href: '#'},
  {name: 'coverletter_front_end_developer.pdf', href: '#'},
]
const eventTypes = {
  applied: {icon: UserIcon, bgColorClass: 'tw-bg-gray-400'},
  advanced: {icon: HandThumbUpIcon, bgColorClass: 'tw-bg-blue-500'},
  completed: {icon: CheckIcon, bgColorClass: 'tw-bg-green-500'},
}
const gradient = new LinearGradient({
  angle: 0,
  stops: [
    ['#ff6cab', 0],
    ['#7366ff', 1]
  ]
})
const textColor = 'tw-text-green-500'

export default defineComponent({
  name: 'Home',
  components: {
    MagnifyingGlassIcon,
    VueGpickr
  },
  setup() {
    return {
      image:ref(null),
      activeColor: ref('red'),
      active: ref(false),
      font_size: ref(10),
      standard: ref(10),
      roundness_size: ref(10),
      shadow_size: ref(10),
      img_height: ref(50),
      img_width: ref(50),
      img_padding: ref(20),
      frame_padding: ref(0),
      mode_options: ref('one'),
      shape: ref('left'),
      file: ref(),
      myFileInput: ref(),
      preview: ref(null),
      preview_list: ref([]),
      image_list: ref([]),
      user,
      eventTypes,
      attachments,
      userNavigation,
      navigation,
      breadcrumbs,
      gradient: ref(gradient),
      textColor,
    }
  },
  methods: {
    onPickFile() {
      this.$refs.myFileInput.click()
    },
onFilePicked (event) {
  const files = event.target.files
  console.log(files)
  let filename = files[0].name
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    this.imageUrl = fileReader.result
  })
  fileReader.readAsDataURL(files[0])
  this.image = files[0]
},
      previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
     getFile () {
      this.$refs.myFileInput.$el.change()
    },
    previewMultiImage: function(e) {

      var input = event.target
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while(count --) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    },
    craeteImage() {
      domtoimage.toJpeg(document.getElementById('my-node'), {quality: 0.95})
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
    },
    toggleMode() {
      let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      let isSystemDarkMode = darkModeMediaQuery.matches
      let isDarkMode = document.documentElement.classList.add('tw-dark')

      if (isDarkMode === isSystemDarkMode) {
        delete window.localStorage.isDarkMode
      } else {
        window.localStorage.isDarkMode = isDarkMode
      }
    },
    setMode(event) {
      this.mode_options = event
      if (event == 'one') {
        localStorage.theme = 'light'
        document.documentElement.classList.add('light')
      } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      }
      console.log('mode', this.mode_options, event)
    }
  },
  created() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})
</script>