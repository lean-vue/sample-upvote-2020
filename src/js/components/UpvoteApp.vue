<template>
  <div>
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <submission-list :submissions="submissions"></submission-list>
  </div>
</template>

<style scoped>
.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>

<script>
import SubmissionList from './SubmissionList.vue';
import { submissionsSeed } from '../seed.js';

export default {
  name: 'UpvoteApp',
  data: () => ({
    submissions: submissionsSeed
  }),
  components: {
    SubmissionList
  }
}
</script>
