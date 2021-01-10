<template>
  <div class="section">
    <article v-for="s in sortedSubmissions" :key="s.id" class="media">
      <figure class="media-left">
        <img class="image is-64x64" :src="s.submissionImage" />
      </figure>
      <div class="media-content">
        <submission-content :submission="s"></submission-content>
      </div>
      <div class="media-right">
        <submission-votes :submission="s" @vote="voteFor(s)"></submission-votes>
      </div>
    </article>
  </div>
</template>

<style scoped>
.section {
  padding: 2rem 1.5rem;
}

.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}

.media + .media {
  margin-top: 1.5rem;
}
</style>

<script>
import SubmissionVotes from './SubmissionVotes.vue';
import SubmissionContent from './SubmissionContent.vue';

export default {
  props: ['submissions'],
  methods: {
    voteFor: function (submission) {
      ++submission.votes;
    }
  },
  computed: {
    sortedSubmissions: function () {
      return [...this.submissions].sort((s1, s2) => s2.votes - s1.votes);
    }
  },
  components: {
    SubmissionVotes,
    SubmissionContent
  }
}
</script>
