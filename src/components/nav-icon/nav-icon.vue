<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .nav-icon
    border-radius: 100%
    color: palette('White')
    display: inline-flex
    justify-content: space-between
    flex-direction: column
    padding: .5rem
    margin: .75rem
    position: relative
    vertical-align: middle
    &:hover
      cursor: pointer
    for $color, $palette in $colors
      +variant($color)
        color: palette($palette)
</style>

<template>
  <div :class="classNames">
    <v-icon>
      menu
    </v-icon>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'nav-icon',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],

    /**
     * The sub components for this component.
     */
    components: {
      VIcon: require('@/components/icon').Icon,
    },
  };
</script>
