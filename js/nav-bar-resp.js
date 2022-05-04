/* Responsive Top Navigation Menu adapted from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("my-nav-bar");
    if (x.className === "nav-bar-resp") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar-resp";
    }
}
