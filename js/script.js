$(document).ready(function() {
  var $listNode = $("#image_list");
  var $listNode2 = $("#image_list2");
  var $captionNode = $("#caption");
  //var $imageNode = $("#image");
  var links = $listNode.find('a');
  var links2 = $listNode2.find('a');
  var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  shuffle(arr);
  //alert(arr[0]);
  //alert(links);
  var i, linkNode, image;
  var imageCache = [];
  var imageCounter = 0;
  var image1 = "";
  var image2 = "";
  var loc1 = 0;
  var loc2 = 0;
  var totaltry=0;

  for(i = 0; i < links.length; i++){
    linkNode = links[i];

    $(linkNode).on('click', function(e) {
      e.preventDefault();
      imageCounter = $(this).parent().index();
	  
      //swapImage(imageCounter);
	  changeImage(imageCounter+1);
    });

    image = new Image();
    image.src = $(linkNode).attr('href');
    image.title = $(linkNode).attr('title');
    imageCache.push(image);
  }
  for(i = 0; i < links2.length; i++){
    linkNode = links2[i];

    $(linkNode).on('click', function(e) {
      e.preventDefault();
      imageCounter = $(this).parent().index();
      //swapImage(imageCounter);
	  changeImage(imageCounter+6);
    });

    image = new Image();
    image.src = $(linkNode).attr('href');
    image.title = $(linkNode).attr('title');
    imageCache.push(image);
  }
  function changeImage(place) {
	 totaltry++;
	if(image1!=""&&image2!=""&&image1==image2&&loc1!=loc2){
		image1 = "";
		image2 = "";
		//$("#image"+loc1).parent().removeAttr("href");
		//$("#image"+loc2).parent().removeAttr("href");
		loc1 = 0;
		loc2 = 0;
		
	}else if(image1!=""&&image2!=""&&image1!=image2){
		var $imgN1 = $("#image"+loc1);
		var $imgN2 = $("#image"+loc2);
		$imgN1.attr('src', "images/playingcard.png");
		//$imgN1.attr('alt', "images/playingcard.png");
		$imgN1.attr('id', "image"+loc1);
		$imgN2.attr('src', "images/playingcard.png");
		//$imgN1.attr('alt', "images/playingcard.png");
		$imgN2.attr('id', "image"+loc2);
		image1 = "";
		image2 = "";
		loc1 = 0;
		loc2 = 0;
	}
		
	//var count = Math.floor((Math.random() * 5) + 1);
	var count = arr[place-1];
    image = imageCache[count];
	var $imageNode = $("#image"+place);
	if(image1==""){
		image1 =image.src;
		loc1 = place;
	}else{
		image2 =image.src;
		loc2 = place;
	}	
    $imageNode.attr('src', image.src);
    $imageNode.attr('alt', image.title);
	$imageNode.attr('id', "image"+place);
    $captionNode.html("Total Try : "+totaltry);
	
  }
  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
});
$(document).on("click", ".btn", function(){
			
			location.reload(true);
});
