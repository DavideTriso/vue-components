<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .breadcrumb
    +has('link')
      transition(100ms)
      color: palette('Blue Grey', '800')
      display: inline-block
      vertical-align: middle
      text-decoration: none
      &:hover
        cursor: pointer
      +variant('primary')
        color: palette('Blue')
        &:hover
          color: palette('Blue', '900')
      +variant('success')
        color: palette('Green')
        &:hover
          color: palette('Green', '900')
      +variant('danger')
        color: palette('Red')
        &:hover
          color: palette('Red', '900')
      +variant('warning')
        color: palette('Orange')
        &:hover
          color: palette('Orange', '900')
      +variant('info')
        color: palette('Light Blue')
        &:hover
          color: palette('Light Blue', '900')
      +variant('dark')
        color: palette('Blue Grey', '800')
        &:hover
          color: palette('Blue Grey', '900')
</style>
<template>
  <router-link
    :to="route"
    :class="classNames"
  >
    <slot>
      {{ content }}
    </slot>
  </router-link>
</template>
<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'breadcrumb-link',

    /**
     * The element name of the component.
     */
    element: 'link',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The properties of the component
     */
    props: {
      /**
       * The route that's being used.
       */
      route: {
        type: Object,
        required: true,
      },
    },
  };
</script>
