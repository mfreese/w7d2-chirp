$.getJSON('https://nameless-cove-75673.herokuapp.com/posts')
.then(function(r){
$('.chirps').html('<table class="table table-bordered">')
$('.chirps table').append('<tr><th>Avatar</th><th>User</th><th>Chirp</th><th>Time Posted</th></tr>')
console.log(r)
r.posts.forEach(function(c){
  if (c.user.avatar == null){
    c.user.avatar = 'https://robohash.org/' + c.user.id + '?size=55x55'
  }
  $('.chirps table').append('<tr><td><img src=' + c.user.avatar + '></td><td>' + c.user.name + '</td><td>' + c.chirp + '></td><td>' + c.created_at + '</td></tr>')
})
})
