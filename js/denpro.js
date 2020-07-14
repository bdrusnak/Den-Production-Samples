function getTodaysDate() {
    now = new Date();
    theMonth = now.getMonth() + 1;
    theDate = now.getDate();
    theYear = now.getFullYear();
    theDay = now.getDay();
    var text = '';

    if (theMonth == 1)   theMonth = "Janurary";
    if (theMonth == 2)   theMonth = "Febuary";
    if (theMonth == 3)   theMonth = "March";
    if (theMonth == 4)   theMonth = "April";
    if (theMonth == 5)   theMonth = "May";
    if (theMonth == 6)   theMonth = "June";
    if (theMonth == 7)   theMonth = "July";
    if (theMonth == 8)   theMonth = "August";
    if (theMonth == 9)   theMonth = "September";
    if (theMonth == 10)   theMonth = "October";
    if (theMonth == 11)   theMonth = "November";
    if (theMonth == 12)   theMonth = "December";

    text += theMonth + " ";
    text += theDate + ", ";
    text += theYear;

    return (text);
}
function copyright() {
  var copyrightYear = now.getFullYear();
  var text = '';
  //text += "<center>\n <br>\n";
  text += "<font face='Arial' color='#ffffff' size='1'>Copyright &copy 2000-" + copyrightYear + " Den Productions. All rights reserved.</font><br>\n";
  //text += "</center>\n";

  return(text);
}
