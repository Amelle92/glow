function NavbarController() {
  this.settings = {
    fadeSpeed: 1000,
    pageIDs: ['#Home', '#About-Jenna', '#About-Amy', '#About-GlowGirls',
    '#Services-Tanning', '#Services-Makeup', '#Services-Waxing',
    '#Services-SprayTanning', '#Services-Facials', '#Services-BrowsLashes', '#Gallery',
    '#Contact']
  };

  this.showContent = function(id) {
    this.hideContent(id);
    if (id != null) {
      $(id).hide().fadeIn(this.settings.fadeSpeed).delay(0);
    }
  };

  this.hideContent = function(exclude) {
    var filtered = this.settings.pageIDs.filter(function(i) {return i != exclude});
    for(var i = 0; i < filtered.length; i++) {
      $(filtered[i]).hide();
    }
  }
}
