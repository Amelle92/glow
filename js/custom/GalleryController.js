function GalleryController () {
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
  }
  this.settings = {
    // Fullscreen images will scale to 90% of screen width and height
    scale_size: .90
  }
  this.numfiles = {
    Tanning: 7,
    Makeup: 24,
    BrowsLashes: 10,
    Bridal: 20
  }
  this.showModal = function(_img) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = _img.src;
    this.scaleImage(_img);
  }
  this.scaleImage = function(_img) {
    var modalImg = document.getElementById("img01");
    let maxWidth = window.innerWidth * this.settings.scale_size;
        maxHeight = window.innerHeight * this.settings.scale_size;
    let imgWidth = _img.naturalWidth,
        imgHeight = _img.naturalHeight;
    let widthRatio = maxWidth / imgWidth,
        heightRatio = maxHeight / imgHeight;
    let bestRatio = Math.min(widthRatio, heightRatio);
    let newWidth = imgWidth * bestRatio,
        newHeight = imgHeight * bestRatio;
    modalImg.setAttribute("style","height:" + newHeight + "px;");
    modalImg.setAttribute("style","width:" + newWidth + "px;");
  }
  this.loadAlbum = function(name) {
    var columns = [];
    var files;
    for(var i = 1; i < 5; i++) {
      columns.push(document.getElementById("R" + String(i)));
      columns[i-1].innerHTML = '';
    }
    if(name == "Tanning")
      files = this.numfiles.Tanning;
    else if(name == "Makeup")
      files = this.numfiles.Makeup;
    else if(name == "BrowsLashes")
      files = this.numfiles.BrowsLashes;
    else if(name == "Bridal")
      files = this.numfiles.Bridal;

    for(var i = 0; i < files; i++) {
      columns[i % 4].innerHTML += '<img src="img/' + name + '/' + i + '.jpg" class="rounded img-fluid mb-4" id="1" onclick="Gal.showModal(this)" alt="">';
    }
  }
  $(window).resize(function() {
    var modalImg = document.getElementById("img01");
    this.scaleImage(modalImg);
  }.bind(this));

  this.loadAlbum('Tanning');
}
