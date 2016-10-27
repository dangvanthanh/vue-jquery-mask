<template>
  <div class="app">
    <h1>jQuery Mask Plugin</h1>
    <div class="">
      <div class="">
        Date
        <input type="text" v-mask="'00/00/0000'">
      </div>
    </div>
  </div>
</template>

<script>
import mask from '../directives/vue-mask'

export default {
  directives: { mask }
}
</script>

<style>

</style>
