import { SubmissionContent } from './SubmissionContent.js';
import { SubmissionVotes } from './SubmissionVotes.js';

import { submissionsSeed } from '../seed.js';

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
  data() {
    return {
      submissions: submissionsSeed
    }
  },
  methods: {
    voteFor(submission) {
      ++submission.votes;
    }
  },
  computed: {
    sortedSubmissions() {
      return [...this.submissions].sort((s1, s2) => s2.votes - s1.votes);
    }
  },
  components: {
    SubmissionContent,
    SubmissionVotes
  }
};
