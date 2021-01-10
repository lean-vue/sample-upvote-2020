const UpvoteApp = {
  template: `
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <submission-list></submission-list>
  `
};

const SubmissionVotes = {
  template: `
    <span class="icon is-small" @click="$emit('vote')">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{ submission.votes }}</strong>
    </span>
  `,
  props: ['submission']
};

const SubmissionContent = {
  template: `
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
  `,
  props: ['submission']
};

const app = Vue.createApp(UpvoteApp);

app.component('submission-list', {
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
      submissions: window.Seed.submissions
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
});

app.mount('#app');


