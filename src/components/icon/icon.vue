<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .icon
    font-family: 'Material Icons'
    font-feature-settings: 'liga'
    font-weight: normal
    font-style: normal
    font-size: 1.5rem
    direction: ltr
    display: flex
    letter-spacing: normal
    line-height: 1
    text-transform: none
    word-wrap: normal
    white-space: nowrap
    -webkit-font-smoothing: antialiased
    text-rendering: optimizeLegibility
    -moz-osx-font-smoothing: grayscale
    +variant('signifier')
      position: absolute
      vertical-align: middle
      color: palette('Grey')
    +variant('spin')
      animation: spin 2s infinite linear
</style>
<template>
  <i :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </i>
</template>
<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'icon',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
