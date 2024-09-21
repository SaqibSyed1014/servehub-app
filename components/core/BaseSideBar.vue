<script setup lang="ts">
const sidebarLinks = [
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
    suLinks: []
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
]

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
</script>

<template>
  <aside class="dashboard-sidebar">
    <div class="dashboard-sidebar-inner">
      <div class="dashboard-sidebar-upper">
        <div class="relative">
          <img src="/logos/logo.svg" alt="ServeHub Logo">
          <div class="absolute -right-9 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 transition rounded-full size-6 border border-gray-200 flex justify-center items-center cursor-pointer">
            <SvgoChevronLeftDouble class="text-gray-500 size-2" />
          </div>
        </div>
        <ul class="sidebar-links">
          <template v-for="(link, i) in sidebarLinks" :key="i">
            <RouterLink :to="link.path" class="sidebar-link-item">
              <component class="sidebar-icon" :is="link.icon" />
              {{ link.label }}
            </RouterLink>
          </template>
        </ul>
      </div>

      <div class="dashboard-sidebar-lower">
        <ul class="sidebar-links">
          <template v-for="(link, i) in sidebarBottomLinks" :key="i">
            <RouterLink :to="link.path" class="sidebar-link-item">
              <component class="sidebar-icon" :is="link.icon" />
              {{ link.label }}
            </RouterLink>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style>
.dashboard-sidebar{
  @apply fixed left-0 w-[312px] h-screen py-8 px-6 border-r border-gray-200;
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
  @apply py-2 px-3 flex items-center gap-3 text-gray-700 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item .sidebar-icon{
  @apply size-5 text-gray-500;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item:hover,
.dashboard-sidebar .sidebar-links .sidebar-link-item:hover .sidebar-icon{
  @apply text-brand-700;
}
.dashboard-sidebar-lower{
  @apply pt-6 border-t border-gray-200;
}
/*.dashboard-sidebar .sidebar-links .sidebar-link-item.router-link-active,*/
/*.dashboard-sidebar .sidebar-links .sidebar-link-item.router-link-active .sidebar-icon{*/
/*  @apply text-brand-600;*/
/*}*/
</style>
