

$('a').each(function() {
    if($(this).children('img').length == 1 && $(this).children().length == 1) {
  
      // get snapshot
      var snapshotImgURL = getSnapShotOf($(this).attr('href')); // replace this with your AJAX call to get the snapshot
  
      // set it to the image
      $(this).children('img').attr('src', snapshotImgURL);
  
    }
  });