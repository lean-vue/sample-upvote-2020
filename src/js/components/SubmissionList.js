import SubmissionVotes from './SubmissionVotes.vue';
import { SubmissionContent } from './SubmissionContent.js';

export const SubmissionList = {
  template: `
    <div class="section">
      <article v-for="s in sortedSubmissions" :key="s.id" class="media">
        <figure class="media-left">
          <img class="image is-64x64" :src="s.submissionImage">
        </figure>
        <div class="media-content">
          <submission-content :submission="s"></submission-content>
        </div>
        <div class="media-right">
          <submission-votes :submission="s" @vote="voteFor(s)"></submission-votes>
        </div>
      </article>
    </div>
  `,
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
    'submission-votes': SubmissionVotes,
    SubmissionContent
  }
};

