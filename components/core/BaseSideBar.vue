<script setup lang="ts">
import { useRoute } from "vue-router";

let sidebarLinks = ref([
  {
    label: 'Dashboard',
    path: '/',
    icon: 'SvgoDashboard',
    suLinks: []
  },
  {
    label: 'Applications',
    path: '/applications',
    icon: 'SvgoApplication',
    suLinks: []
  },
  {
    label: 'Manage Jobs',
    path: '/manage-jobs',
    icon: 'SvgoPlainBriefCase',
    suLinks: [
      {
        label: 'Saved Jobs',
        path: '/saved-jobs',
      },
      {
        label: 'Browser Jobs',
        path: 'https://devweb.servehub.io'
      }
    ]
  },
  {
    label: 'Followed Businesses',
    path: '/followed-businesses',
    icon: 'SvgoBuilding',
    suLinks: []
  },
  {
    label: 'My Profile',
    path: '/my-profile',
    icon: 'SvgoUser',
    suLinks: []
  }
]);

const sidebarBottomLinks = [
  {
    label: 'Settings',
    path: '/settings',
    icon: 'SvgoSettings'
  },
  {
    label: 'Help / Support',
    path: '/help',
    icon: 'SvgoHelp'
  },
  {
    label: 'Invite a Colleague',
    path: '/invite',
    icon: 'SvgoAddUsers'
  }
]

const emit = defineEmits(['sidebar-toggled']);

let sidebarExpand = ref(true);
let manageJobsMenuDropdownExpand = ref(false);

watch(() => sidebarExpand.value, (val) => {
  if (!val) manageJobsMenuDropdownExpand.value = false;
  emit('sidebar-toggled', val);
})

const route = useRoute();

watch(() => route.path, (val) => {
  console.log('testing here ', manageJobsMenuDropdownExpand.value, val)
  if (val !== '/saved-jobs') {}
})
</script>

<template>
  <aside class="dashboard-sidebar" :class="[sidebarExpand ? 'sidebar-expanded' : 'sidebar-collapsed']">
    <div class="dashboard-sidebar-inner">
      <div class="dashboard-sidebar-upper">
        <div class="dashboard-sidebar-logo">
          <img v-if="sidebarExpand" src="/logos/logo.svg" alt="ServeHub Logo">
          <img v-else src="/logos/clipped-logo.svg" alt="ServeHub Logo">
          <div class="sidebar-toggle" @click="sidebarExpand = !sidebarExpand">
            <SvgoChevronLeftDouble v-if="sidebarExpand" />
            <SvgoChevronRightDouble v-else />
          </div>
        </div>
        <ul class="sidebar-links">
          <template v-for="(link, i) in sidebarLinks" :key="i">
            <NuxtLink v-if="!link.suLinks.length" :to="link.path" class="sidebar-link-item">
              <component class="sidebar-icon" :is="link.icon" />
              <p>{{ link.label }}</p>
            </NuxtLink>
            <div v-else>
              <div
                  class="sidebar-link-item has-sub-links"
                  :class="{ 'expanded-sub-menu': manageJobsMenuDropdownExpand }"
                  @click="manageJobsMenuDropdownExpand = !manageJobsMenuDropdownExpand"
              >
                <div class="flex gap-3">
                  <component class="sidebar-icon" :is="link.icon"/>
                  <p>{{ link.label }}</p>
                </div>
                <SvgoChevronUp v-if="manageJobsMenuDropdownExpand" class="size-4 text-gray-500" />
                <SvgoChevronDown v-else class="size-4 text-gray-500" />
              </div>
              <div v-if="manageJobsMenuDropdownExpand" class="flex flex-col gap-1 mt-2">
                <template v-for="subLink in link.suLinks">
                  <NuxtLink :to="subLink.path" class="sidebar-link-item">
                    <div class="sidebar-icon"/>
                    <p>{{ subLink.label }}</p>
                  </NuxtLink>
                </template>
              </div>
            </div>
          </template>
        </ul>
      </div>

      <div class="dashboard-sidebar-lower">
        <ul class="sidebar-links">
          <template v-for="(link, i) in sidebarBottomLinks" :key="i">
            <NuxtLink :to="link.path" class="sidebar-link-item">
              <component class="sidebar-icon" :is="link.icon" />
              <p>{{ link.label }}</p>
            </NuxtLink>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style>
.dashboard-sidebar{
  @apply fixed left-0 h-screen py-8 px-4 border-r border-gray-200 transition-all duration-300;
}
.dashboard-sidebar.sidebar-expanded{
  @apply w-[312px];
}
.dashboard-sidebar.sidebar-collapsed{
  @apply w-[80px];
}
.dashboard-sidebar .dashboard-sidebar-logo{
  @apply relative px-2 h-8;
}
.dashboard-sidebar .sidebar-toggle{
  @apply absolute -right-7 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 transition rounded-full size-6 border border-gray-200 flex justify-center items-center cursor-pointer;
}
.dashboard-sidebar .sidebar-toggle svg{
  @apply text-gray-500 size-4 transition;
}
.dashboard-sidebar .dashboard-sidebar-inner{
  @apply flex flex-col justify-between h-full text-base font-semibold;
}
.dashboard-sidebar .dashboard-sidebar-upper{
  @apply flex flex-col gap-6;
}
.dashboard-sidebar .sidebar-links{
  @apply flex flex-col gap-1;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item{
  @apply py-2 px-3 flex items-center gap-3 text-gray-700 rounded-md cursor-pointer hover:bg-brand-50 hover:text-brand-700 transition;
}
 .dashboard-sidebar .sidebar-links .sidebar-link-item.expanded-sub-menu{
  @apply text-brand-700 bg-brand-50;
 }
.dashboard-sidebar .sidebar-links .sidebar-link-item.has-sub-links{
  @apply flex justify-between items-center;
}
.dashboard-sidebar.sidebar-collapsed .sidebar-links .sidebar-link-item{
  @apply py-[14px];
}
.dashboard-sidebar.sidebar-collapsed .sidebar-links .sidebar-link-item .sidebar-icon{
  @apply pl-0.5;
}
.dashboard-sidebar.sidebar-collapsed .sidebar-link-item p{
  @apply hidden;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item .sidebar-icon{
  @apply size-5 text-gray-500;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item:hover,
.dashboard-sidebar .sidebar-links .sidebar-link-item:hover .sidebar-icon,
.dashboard-sidebar .sidebar-links .sidebar-link-item.expanded-sub-menu .sidebar-icon{
  @apply text-brand-700;
}
.dashboard-sidebar-lower{
  @apply pt-6 border-t border-gray-200;
}
/*.dashboard-sidebar .sidebar-links .sidebar-link-item.router-link-active,*/
/*.dashboard-sidebar .sidebar-links .sidebar-link-item.router-link-active .sidebar-icon{*/
/*  @apply text-brand-700;*/
/*}*/
</style>
