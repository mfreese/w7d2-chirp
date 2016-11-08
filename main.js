$.getJSON('https://nameless-cove-75673.herokuapp.com/posts')
.then(function(r){
$('.chirps').html('<table class="table table-striped"></table>')
$('.chirps table').append('<tr><th>User</th><th>Time</th><th>Avatar</th><th>Chirp</th></tr>')
console.log(r)
r.posts.forEach(function(c){
  if (c.user.avatar == null){
    c.user.avatar = 'https://robohash.org/' + c.user.id + '?size=60x60'
  }
  $('.chirps table').append('<tr><td>' + c.user.name + '</td><td>' + c.created_at + '</td><td><img src=' + c.user.avatar + '></td><td>' + c.chirp + '</td></tr>')
})
})
