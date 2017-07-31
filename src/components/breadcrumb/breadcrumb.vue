<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .breadcrumb
    display: block
    list-style: none
    margin: 0
    margin-bottom: 1rem
    padding: 0
</style>

<template>
  <ul :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </ul>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'breadcrumb',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
