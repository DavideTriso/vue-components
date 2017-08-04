<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .breadcrumb
    +has('link')
      color: palette('Blue Grey', '800')
      display: inline-flex
      vertical-align: middle
      text-decoration: none
      transition: color $transition_speed ease-in-out
      &:hover
        cursor: pointer

      for $color, $palette in $colors
        +variant($color)
          color: palette($palette)
          &:hover
            color: palette($palette, '900')
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
