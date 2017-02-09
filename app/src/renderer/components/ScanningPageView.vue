<template>
  <div>
    <h1>Scan Away</h1>

    <scan-input></scan-input>
  </div>
</template>

<script>
  import ScanInput from './ScanningPageView/ScanInput'
  export default {
    name: 'scan-page',
    components: {
      'scan-input': ScanInput
    }
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
