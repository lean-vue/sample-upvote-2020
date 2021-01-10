import { SubmissionList } from './SubmissionList.js';

export const UpvoteApp = {
  template: `
    <div>
      <h2 class="title has-text-centered dividing-header">UpVote!</h2>
      <submission-list :submissions="submissions"></submission-list>
    </div>
  `,
  data: () => ({
    submissions: window.Seed.submissions
  }),
  components: {
    SubmissionList
  }
};
