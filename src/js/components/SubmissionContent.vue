<template>
  <div class="content">
      <p>
        <strong>
          <a :href="submission.url" class="has-text-info">{{ submission.title }}</a>
          <span class="tag is-small">#{{ submission.id }}</span>
        </strong>
        <br>
        {{ submission.description }}
        <br>
        <small class="is-size-7">
          Submitted by:
          <img class="image is-24x24" :src="submission.avatar">
        </small>
      </p>
    </div>
</template>

<style scoped>
.tag {
  font-size: 0.6rem !important;
}

.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}
</style>

<script>
export default {
  props: ['submission']
}
</script>
