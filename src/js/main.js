console.log('Your starting point. Enjoy the ride!');
new Vue({
  el: '#app',
  data: {
    submissions: window.Seed.submissions
  },
  methods: {
    voteFor: function(submission) {
      ++submission.votes;
    }
  },
  computed: {
    sortedSubmissions: function() {
      return [...this.submissions].sort((s1,s2) => s2.votes - s1.votes);
    }
  }
});
