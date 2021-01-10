const UpvoteApp = {
  template: `
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <submission-list></submission-list>
  `
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
        <div class="content">
          <p>
            <strong>
              <a :href="s.url" class="has-text-info">{{ s.title }}</a>
              <span class="tag is-small">#{{ s.id }}</span>
            </strong>
            <br>
            {{ s.description }}
            <br>
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" :src="s.avatar">
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small" @click="voteFor(s)">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{ s.votes }}</strong>
        </span>
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
  }
});

app.mount('#app');


