<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .drawer
    +has('title')
      display: inline-flex
      font-size: 1.125rem
      font-weight: 400
      line-height: 4rem
      position: relative
      vertical-align: middle
      for $color, $palette in $colors
        +variant($color)
          color: palette($palette)
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'drawer-title',

    /**
     * The element name of the component.
     */
    element: 'title',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],
  };
</script>
