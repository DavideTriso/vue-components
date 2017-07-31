<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .breadcrumb
    +has('item')
      display: inline-block
      &:after
        color: palette('Grey', '500')
        content: '/'
        display: inline-block
        font-family: Roboto, 'sans-serif'
        margin-left: .5rem
        margin-right: .25rem
        vertical-align: middle
      &:last-child:after
        display: none
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
    name: 'breadcrumb-item',

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
