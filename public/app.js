$.get('/github/user/repos')
  .then(
    data => JSON.parse(data).forEach(repo =>
    $('#results')),
    err => console.error(err.status, err.statusText, 'broken stuff')
  )
