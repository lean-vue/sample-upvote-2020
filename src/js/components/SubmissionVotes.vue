<template>
  <span class="icon is-small" @click="$emit('vote')">
    <i class="fa fa-chevron-up"></i>
    <strong class="has-text-info">{{ submission.votes }}</strong>
  </span>
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>

<script>
export default {
  props: ["submission"],
};
</script>
