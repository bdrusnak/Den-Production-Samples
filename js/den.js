// JavaScript Document for updated 03-03-05
/////////////////////
// Get and display todays date
/////////////////////
var email = "<a href='mailto:Bryan@DenProductions.com'>Bryan@DenProductions.com</a>";
function getTodaysDate()
{
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
/////////////////////
// Close window
/////////////////////
function CloseMe()
{
  if (self.parent.frames.length != 0)
  {
	self.parent.close();
  }
  else
  {
	close();
  }
}
/////////////////////
// Get browser information
/////////////////////
function BrowserInfo()
{
	this.name = navigator.appName;
	this.codename = navigator.appCodeName;
	this.version = navigator.appVersion;
	this.version2 = navigator.appVersion.substring(22,26);
	this.platform = navigator.platform;
	this.javaEnabled = navigator.javaEnabled();
	this.screenWidth = screen.width;
	this.screenHeight = screen.height;
}
/////////////////////
// array with browser information
/////////////////////
var b = new BrowserInfo();
/////////////////////
// Show browser information
/////////////////////
function ShowThis()
{
  var welcome;

  if(navigator.appVersion.indexOf("Win") != -1)
    welcome = "You are using a Windows PC";
  else if(navigator.appVersion.indexOf("Mac") != -1)
    welcome = "You are using a Mac PC";
  else
    welcome = "You are not using a Windows or Mac PC";


  alert( welcome +
		"\nBrowser = " + b.name /* + "; " */
		+ "\nCodename = " + b.codename /* + "; " */
		+ "\nVersion = " + b.version /* + "; " */
		+ "\nVersion 2 = " + b.version2 /* + "; " */
		+ "\nPlatform = " + b.platform + "; "
		+ " Java Enabled = " + b.javaEnabled + "; "
		+ "\nScreen Width = " + b.screenWidth /* + "; " */
		+ " \nScreen Height = " + b.screenHeight);
}
/////////////////////
// Go back 1 page in history
/////////////////////
function GoBack1() { history.back(); }
/////////////////////
// testing functions
function KillStatus()
{
//  var where = self.location.href;
  window.open(self.location.href,'testwin','scrollbars=1,menubar=1,toolbar=1,directories=1,location=1,statusbar=0');
}
/////////////////////
function OpenWindowPrompt(action)
{
  var where = self.location.href;
  var nw = prompt("Enter a new width:","");
  var nh = prompt("Enter a new height:","");
  var nr = prompt("Enter yes or no for resizeable:","");
  var nsb = prompt("Enter yes or no for scrollbars:","");
  var nm = prompt("Enter yes or no for menubar:","");
  var nt = prompt("Enter yes or no for toolbar:","");
  var nd = prompt("Enter yes or no for directories:","");
  var nl = prompt("Enter yes or no for location:","");
  var ns = prompt("Enter yes or no for status:","");
  var wf = "";

  if (nr != 'yes')    nr = "no";
  if (nsb != 'yes')   nsb = "no";
  if (nm != 'yes')    nm = "no";
  if (nt != 'yes')    nt = "no";
  if (nd != 'yes')    nd = "no";
  if (nl != 'yes')    nl = "no";
  if (ns != 'yes')    ns = "no";

  wf = wf + "width=" + nw;
  wf = wf + ",height=" + nh;
  wf = wf + ",resizable=" + nr;
  wf = wf + ",scrollbars=" + ns;
  wf = wf + ",menubar=" + nm;
  wf = wf + ",toolbar=" + nt;
  wf = wf + ",directories=" + nd;
  wf = wf + ",location=" + nl;
  wf = wf + ",status=" + ns;


  if (nw == null || nh == null)
  {
	return null;
  }
  else
  {
	window.open(where,'testwin',wf);
  }
}
/////////////////////
// open & close functions for mouse over
function OpenMouseWindow(config)
{
  NewWindow=config;
}
function CloseMouseWindow()
{
  NewWindow.close();
}
/////////////////////
////////////////////
// copyright information
/////////////////////
// copyright in white
function copyright() {
	var coptrightYear = now.getFullYear();
	var text = '';
	text += "<center>\n <br>\n";
	text += "<font face='Arial' color='#ffffff' size='1'>Copyright &copy; 2000-" + coptrightYear + " Den Productions. All rights reserved.</font><br>\n";
	text += "</center>\n";

  return(text);
}
