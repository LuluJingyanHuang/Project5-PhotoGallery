function getPhoto() {
  var getName = document.getElementsByTagName("a").toUpperCase();
  return getName;
}

console.log(getPhoto());


$('input').on('keyup',function(){
    let result = $('input').val().toLowerCase();
    console.log(result);

});

$('.photo').append('ahhhhhhhh');
