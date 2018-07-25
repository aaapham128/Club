var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'Images/Photoshop.png') {
      	  window.open("https://www.adobe.com/products/photoshop.html?promoid=PC1PQQ5T&mv=other");

	} else {
	  myImage.setAttribute ('src','images/cupcake1.jpg');
	}
}
