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
    +variant('red')
      color: palette('Red')
    +variant('pink')
      color: palette('Pink')
    +variant('purple')
      color: palette('Purple')
    +variant('deep-purple')
      color: palette('Deep Purple')
    +variant('indigo')
      color: palette('Indigo')
    +variant('blue')
      color: palette('Blue')
    +variant('light-blue')
      color: palette('Light Blue')
    +variant('cyan')
      color: palette('Cyan')
    +variant('teal')
      color: palette('Teal')
    +variant('green')
      color: palette('Green')
    +variant('light-green')
      color: palette('Light Green')
    +variant('lime')
      color: palette('Lime')
    +variant('yellow')
      color: palette('Yellow')
    +variant('amber')
      color: palette('Amber')
    +variant('orange')
      color: palette('Orange')
    +variant('deep-orange')
      color: palette('Deep Orange')
    +variant('brown')
      color: palette('Brown')
    +variant('blue-grey')
      color: palette('Blue Grey')
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
