const UpvoteApp = {
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
      return [...this.submissions].sort((s1,s2) => s2.votes - s1.votes);
    }
  }
}

Vue.createApp(UpvoteApp).mount('#app');
