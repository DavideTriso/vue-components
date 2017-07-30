<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .navigation
    +has('item')
      list-style: none
      margin: 0
      padding: 0
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
    name: 'navigation-item',

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
