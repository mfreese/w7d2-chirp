$.getJSON('https://nameless-cove-75673.herokuapp.com/posts')
.then(function(r){
$('.chirps').html('<table class="table table-striped"></table>')
$('.chirps table').append('<tr><th>User</th><th>Time</th><th>Avatar</th><th>Chirp</th></tr>')
console.log(r)
r.posts.forEach(function(c){
  $('.chirps table').append('<tr><td>' + c.users + '</td><td>' + c.time + '</td><td>' + c.avatar + '</td><td>' + c.chirp + '</td></tr>')
})
})
