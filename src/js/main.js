(function(){

  const submissionsSection = document.querySelector('.section');
  const submissionTpl = document.getElementById('submissionTpl');

  renderSubmissions();

  // register vote event
  document.querySelector('.section').addEventListener('click', ev => {
    if (ev.target.matches('.media-right i')) {

      const id = Number( ev.target.closest('article').dataset['id']);
      const submission = window.Seed.submissions.find( s => s.id === id );
      submission.votes++;

      renderSubmissions();
    }
  });

  function renderSubmissions() {

    submissionsSection.textContent = '';

    const sortedSubmissions = window.Seed.submissions.sort((a,b) => b.votes - a.votes);

    sortedSubmissions.forEach(element => {

      const tplClone = submissionTpl.content.cloneNode(true);

      const submissionArticle = tplClone.querySelector('article.media');
      submissionArticle.dataset['id'] = element.id;

      const submissionImage = tplClone.querySelector('.media-left img');
      submissionImage.src = element.submissionImage;

      const submissionTitle = tplClone.querySelector('.media-content strong a');
      submissionTitle.textContent = element.title;
      submissionTitle.href = element.url;

      const submissionId = tplClone.querySelector('.media-content strong span');
      submissionId.textContent = '#' + element.id;

      const submissionDesc = tplClone.querySelector('.media-content br').nextSibling;
      submissionDesc.nodeValue = element.description;

      const submissionAvatar = tplClone.querySelector('.media-content img');
      submissionAvatar.src = element.avatar;

      const submissionVotes = tplClone.querySelector('.media-right strong');
      submissionVotes.textContent = element.votes;

      submissionsSection.appendChild(tplClone);

    });

  }

})();
