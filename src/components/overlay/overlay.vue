<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .overlay
    background-color: rgba(0, 0, 0, 0.5)
    height: 100%
    left: 0
    position: fixed
    top: 0
    width: 100%
    z-index: 2
</style>

<template>
  <div :class="classNames" @click="onClick"></div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'overlay',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],

    /**
     * The methods that are available on the component.
     */
    methods: {
      /**
       * Method which will emit the click event.
       */
      onClick() {
        this.$emit('click');
      },
    },
  };
</script>
