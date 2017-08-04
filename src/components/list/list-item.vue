<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .list
    +has('item')
      align-items: center
      background-color: palette('White')
      border-bottom: 1px solid palette('Grey', '200')
      display: flex
      list-style: none
      margin: 0
      padding: 1rem
      width: 100%
      &:last-child
        border: none
      +variant('dark')
        background-color: palette('Blue Grey', '900')
</style>

<template>
  <li :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </li>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'list-item',

    /**
     * The element name of the component.
     */
    element: 'item',

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
