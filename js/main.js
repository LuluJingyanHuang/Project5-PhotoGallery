var result;
function getID() {
    var result = document.getElementById('search');
    result=result.value.toLowerCase()
    console.log(result);
    var images = document.querySelectorAll('.photo img');
    console.log(images.length);

    for (i=0; i<images.length; i+=1) {
        var image = document.getElementsByTagName('img')[i];
        var long = document.getElementsByTagName('a')[i];
        var caption= image.getAttribute('alt').toLowerCase();
        var longCaption= long.getAttribute('data-title').toLowerCase();
        var match = result.includes(caption);
        var match1= longCaption.includes(result);
        console.log(match1);
        if (match === true){
          image.style.display= '';

        } else if (match1 === true){
            image.style.display= '';
            console.log(match1);
        }else {
          image.style.display = 'none';
          long.style.display= 'none' ;
        }

          }
}

document.getElementById("search").addEventListener("keyup", getID);

//
// function getCaption() {
//   var images = document.getElementsByTagName('img');
//   console.log(images.length);
//
//   for (i=0; i<images.length; i+=1) {
//       var image = document.getElementsByTagName('img')[i];
//       var caption= image.getAttribute('alt').toLowerCase();
//       console.log(caption);
//       console.log(result);
//       var match = result.includes(caption);
//       if (match = true){
//         document.write('aye');
//           }
//
//         }
//       }
//
//
//
// getCaption();
