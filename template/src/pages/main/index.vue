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
      <Navbar />
    </template>
    <template v-slot:main> </template>
  </DatacenterV3Layout>
</template>

<script>
import DatacenterV3Layout from '@layouts/DatacenterV3Layout'
import Logo from './sections/Logo'
import PlatformNav from './sections/PlatformNav'
import User from './sections/User'
import Navbar from './sections/Navbar'
export default {
  name: 'mainPage',
  components: {
    DatacenterV3Layout,
    Logo,
    PlatformNav,
    User,
    Navbar
  }
}
</script>
