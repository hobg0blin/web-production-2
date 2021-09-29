let myImages = [{'src': 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', 'height': '80px', 'width': '80px', 'top': '10px', 'left': '12px', 'caption': 'A special lad'}, {'src': 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d', 'top': '20px', 'left': '80px', 'height': '100px', 'width': '100px', 'caption': 'A floofy boi'}]


function addImages(imageArray) {
  let container = O('image-container')
  //loop over our list of objects
    //inside the loop
    //create an image div
    //let imgDiv = createImageDiv(imageArray[i])
    //add caption:
    //imgDiv.innerHTML += "<p>" + imageArray[i].caption + "</p>"
  //container.appendChild(imgDiv)
}

function createImage(imageObject) {
  // create the element to add to the page
  // we're using a div so we can add things like captions to it
  let containerDiv = document.createElement("div")
  //set container class
  containerDiv.addClass("image-container")
  //set container div styles
  S(containerDiv).top = imageObject.top
  S(containerDiv).left =  imageObject.left
  let img = document.createElement("img")
  // set image attributes
  img.setAttribute("src", imageObject.src);
  //set image style
  S(img).height = imageObject.height;
  S(img).width = imageObject.width
  //add the image to our container div
  containerDiv.appendChild(img)
  return containerDiv;
}

addImages(myImages)
