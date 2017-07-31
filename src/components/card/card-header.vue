<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .card
    +has('header')
      display: flex
      padding: 1rem
      padding-bottom: 0
      width: 100%
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
    name: 'card-header',

    /**
     * The element name of the component.
     */
    element: 'header',

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
