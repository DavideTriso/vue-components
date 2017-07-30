<style lang="stylus">
  .content
    margin: 1rem 0
    position: relative
    min-height: calc(100vh - 2rem)
    &:before
      display: block
      content: " "
      height: 4rem
      position: relative
</style>
<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>
<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'content',

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
