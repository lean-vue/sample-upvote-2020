import { SubmissionList } from './SubmissionList.js';
import { submissionsSeed } from '../seed.js';

export const UpvoteApp = {
  template: `
    <div>
      <h2 class="title has-text-centered dividing-header">UpVote!</h2>
      <submission-list :submissions="submissions"></submission-list>
    </div>
  `,
  data: () => ({
    submissions: submissionsSeed
  }),
  components: {
    SubmissionList
  }
};
