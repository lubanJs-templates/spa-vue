<template>
  <DatacenterV3Layout>
    <template v-slot:logo>
      <Logo />
    </template>
    <template v-slot:platformNav>
      <PlatformNav />
    </template>
    <template v-slot:user>
      <User />
    </template>
    <template v-slot:menu>
      <Sidebar />
    </template>
    <template v-slot:main>
      <Breadcrumb />
      <router-view />
    </template>
  </DatacenterV3Layout>
</template>

<script>
import DatacenterV3Layout from '@layouts/DatacenterV3Layout'
import Logo from './sections/Logo'
import PlatformNav from './sections/PlatformNav'
import User from './sections/User'
import Sidebar from './sections/Sidebar'
import Breadcrumb from './sections/Breadcrumb'
export default {
  name: 'mainPage',
  components: {
    DatacenterV3Layout,
    Logo,
    PlatformNav,
    User,
    Sidebar,
    Breadcrumb
  }
}
</script>
