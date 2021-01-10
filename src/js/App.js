import { SubmissionList } from './components/SubmissionList.js';

export const UpvoteApp = {
  template: `
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <submission-list></submission-list>
  `,
  components: {
    SubmissionList
  }
};
