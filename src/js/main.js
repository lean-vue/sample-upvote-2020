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
  }
}

Vue.createApp(UpvoteApp).mount('#app');
