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
