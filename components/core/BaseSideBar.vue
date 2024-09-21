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
    path: '',
    icon: 'SvgoApplication',
    suLinks: []
  },
  {
    label: 'Manage Jobs',
    path: '',
    icon: 'SvgoPlainBriefCase',
    suLinks: []
  },
  {
    label: 'Followed Businesses',
    path: '',
    icon: 'SvgoBuilding',
    suLinks: []
  },
  {
    label: 'My Profile',
    path: '',
    icon: 'SvgoUser',
    suLinks: []
  }
]

const sidebarBottomLinks = [
  {
    label: 'Settings',
    path: '',
    icon: 'SvgoSettings'
  },
  {
    label: 'Help / Support',
    path: '',
    icon: 'SvgoHelp'
  },
  {
    label: 'Invite a Colleague',
    path: '',
    icon: 'SvgoAddUsers'
  }
]
</script>

<template>
  <aside class="dashboard-sidebar">
    <div class="dashboard-sidebar-inner">
      <div class="dashboard-sidebar-upper">
        <div class="">
          <img src="/logos/logo.svg" alt="ServeHub Logo">
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

<style scoped lang="postcss">
.dashboard-sidebar{
  @apply fixed left-0 w-[312px] h-screen py-8 px-6 border border-red-500;
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
  @apply py-2 px-3 flex items-center gap-3 text-gray-700;
}
.dashboard-sidebar .sidebar-links .sidebar-link-item .sidebar-icon{
  @apply size-5 text-gray-500;
}
</style>
