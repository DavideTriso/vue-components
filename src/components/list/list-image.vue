<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .list
    +has('image')
      border-radius: 100%
      display: inline-flex
      height: 3rem
      margin-right: 1rem
      object-fit: cover
      width: 3rem
</style>

<template>
  <img
    :class="classNames"
  />
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'list-image',

    /**
     * The element name of the component.
     */
    element: 'image',

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
