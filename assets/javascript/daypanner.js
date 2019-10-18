// this is the day panner script
// declare variable
/*var hour
var day
var month declare the nessary fvariables turn into an object variable like
each hour has local storage?
var (the object)hour{
    has todo which is string input text field
    competeion which is bool
}
function(list of hours)
if player clicks on the check box then save to local storage 



*/
// Check if the localStorage object exists
//var header = document.getElementsByTagName("h2")[0],siteName;
/*var newester = document.getElementsByName(LastName);
localStorage.setItem("today ", newester);
newester = localStorage.getItem(newester);
console.log(localStorage.getItem("today"));*/
//document.getElementsByTagName("h2").innerHTML = sitename;
//localStorage.clear;
//var siteName = document.getElementById('LastName');
//localStorage.setItem('siteName',siteName);
debugger
  //  var currentName = localStorage.getItem('server');
   // var currentDescription = localStorage.getItem(“description”);
   //document.getElementById("cacn") = currentName;
  alert(localStorage.getItem('server'));
  //window.onload(saveData);
 // document.getElementById("cacn").value = localStorage.getItem('server');
  var x = localStorage.getItem('server');
    document.getElementById("block1").innerHTML = x;
  //document.getElementById("result").innerHTML = moment();
  //const m = moment();
 // console.log(m.toString());
 // document.getElementById("cacn") = localStorage.getItem('server');
  
 //   document.getElementById("description").value = currentDescription;
    
 //console.log(moment());

function saveData(){
    alert("Saved data plan");
   
    var input = document.getElementById('saveServer').value;
    localStorage.setItem('server', input);
    document.getElementById('saveServer').value = localStorage.getItem('server');
    var x = localStorage["server"];
    document.getElementById("cacn").innerHTML = x;
    }
