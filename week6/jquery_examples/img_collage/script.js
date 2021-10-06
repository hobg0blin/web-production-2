let myImages = [{'src': 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', 'height': '200px', 'width': '200px', 'top': '150px', 'left': '150px', 'caption': 'A special lad'}, {'src': 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d', 'top': '180px', 'left': '300px', 'height': '250px', 'width': '250px', 'caption': 'A floofy boi'}, {'src': 'https://i.pinimg.com/originals/94/96/30/9496300b8da1e3ddf38c64f3260cf859.jpg', 'width': '250px', 'height': '250px', 'top': '435px', 'left': '150px', 'caption': 'A fella wearing sunglasses' }, {'src': 'https://imgk.timesnownews.com/66603010_1317351581756321_4675944928644445097_n_1570362730__rend_1_1.jpg?tr=w-360', 'width': '300px', 'height': '300px', 'top': '475px', 'left': '350px', 'caption': 'A sunny boi' }, {'src': 'https://s.hdnux.com/photos/51/50/21/10912852/3/rawImage.jpg', 'width': '420px', 'height': '375px', 'top': '190px', 'left': '600px', 'caption': 'Why is he driving?' },  ]

function addImages(imageArray) {
  let container = $('#image-container')
  for (let i=0; i < imageArray.length; i++) {
    let imgDiv = createImage(imageArray[i])
    imgDiv.append("<p class='caption'>" + imageArray[i].caption + "</p>")
    container.append(imgDiv)
  }
  addClick()
}

function createImage(imageObject) {
  // create the element to add to the page
  // we're using a div so we can add things like captions to it
  let containerDiv = $("<div></div>")    //set container div styles
  containerDiv.css({
    'top': imageObject.top,
    'left': imageObject.left
  })
  //set container class
  containerDiv.addClass("image-container")
  let img = $("<img />", {
      src: imageObject.src
  })

  //set image style
  img.css({height: imageObject.height})
  img.css({width: imageObject.width})
  //add the image to our container div
  containerDiv.append(img)
  return containerDiv;
}
// we have to add this click handler after we've added all the images to the page, otherwise jQuery won't detect them
function addClick() {
  $("img").click(function() {
    console.log('foo')
    $(this).addClass("grayscale")
  })
}


addImages(myImages)
