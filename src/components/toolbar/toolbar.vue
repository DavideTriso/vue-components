<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .toolbar
    align-items: flex-start
    box-shadow: $box_shadow_minimum
    display: flex
    flex-direction: row
    height: 4rem
    left: 0
    position: fixed
    top: 0
    width: 100%
    z-index: 1
    for $color, $palette in $colors
      +variant($color)
        background-color: palette($palette)
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'toolbar',

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
