function founder(founderdesp, iconimg) {
  var founderdesps = document.getElementById(founderdesp);
  var iconimgs = document.getElementById(iconimg);
  var icons = document.querySelectorAll(".icon img");
  var profile=document.querySelectorAll(".profile")
  if (founderdesps.style.display !== "block") {
    
    profile.forEach(function (profile) {
      if (profile.style.display !== "none") {
        profile.style.display = "none";
      }
      else{
        return;
      }
    })

    icons.forEach(function (icon) {
        if (icon.style.border) {
          // If border is set, remove it
          icon.style.border = "";
        } else {
          // If border is not set, add it
          return;
        }
      });
    founderdesps.style.display = "block";
    iconimgs.style.border = "2px solid #002b59";
   
  } else {
    founderdesps.style.display = "none";
    iconimgs.style.border = "0px";

    // Iterate over the NodeList
  }
}
