function highlight() {
    //Write your code here
	var boldTags = document.getElementsByTagName("strong");
    for (var i = 0; i < boldTags.length; i++) {
        boldTags[i].style.color = "green";
    }
}


function return_normal() {
    //Write your code here
	var boldTags = document.getElementsByTagName("strong");
    for (var i = 0; i < boldTags.length; i++) {
        boldTags[i].style.color = "black";
    }
}
