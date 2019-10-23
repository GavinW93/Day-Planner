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
//debugger
  //  var currentName = localStorage.getItem('server');
   // var currentDescription = localStorage.getItem(“description”);
   //document.getElementById("cacn") = currentName;
  alert(localStorage.getItem('server'));
  //window.onload(saveData);
 // document.getElementById("cacn").value = localStorage.getItem('server');
  var x = localStorage.getItem('server');
    document.getElementById("block1").innerHTML = x;
  var x1 = localStorage.getItem('server1');
    document.getElementById("block2").innerHTML = x1;
  var x2 = localStorage.getItem('server2');
    document.getElementById("block3").innerHTML = x2;

    var x3 = localStorage.getItem('server3');
    document.getElementById("block4").innerHTML = x3;

    var x4 = localStorage.getItem('server4');
    document.getElementById("block5").innerHTML = x4;

    var x5 = localStorage.getItem('server5');
    document.getElementById("block6").innerHTML = x5;

    var x6 = localStorage.getItem('server6');
    document.getElementById("block7").innerHTML = x6;

    var x7 = localStorage.getItem('server7');
    document.getElementById("block8").innerHTML = x7;

    var x8 = localStorage.getItem('server8');
    document.getElementById("block9").innerHTML = x8;
    //document.getElementById("result").innerHTML = moment();
  //const m = moment();
 // console.log(m.toString());
 // document.getElementById("cacn") = localStorage.getItem('server');
  
 //   document.getElementById("description").value = currentDescription;
    
 //console.log(moment());
 //document.getElementById("saveServer").innerHTML = x;

function saveData(){
    alert("Saved data plan");
   
      var input = document.getElementById('saveServer').value;
      localStorage.setItem('server', input);
      document.getElementById('saveServer').value = localStorage.getItem('server');
      var x = localStorage["server"];
      document.getElementById("block1").innerHTML = x;
      }
function saveData1(){
   alert("Saved data plan1");
     
      var input1 = document.getElementById('saveServer1').value;
      localStorage.setItem('server1', input1);
      document.getElementById('saveServer1').value = localStorage.getItem('server1');
      var x1 = localStorage["server1"];
      document.getElementById("block2").innerHTML = x1;
      }
function saveData2(){
     alert("Saved data plan2");
       
        var input2 = document.getElementById('saveServer2').value;
        localStorage.setItem('server2', input2);
        document.getElementById('saveServer2').value = localStorage.getItem('server2');
        var x2 = localStorage["server2"];
        document.getElementById("block3").innerHTML = x2;
        }
function saveData3(){
     alert("Saved data plan3");
         
          var input3 = document.getElementById('saveServer3').value;
          localStorage.setItem('server3', input3);
          document.getElementById('saveServer3').value = localStorage.getItem('server3');
          var x3 = localStorage["server3"];
          document.getElementById("block4").innerHTML = x3;
          }
 
  function saveData4(){
      alert("Saved data plan4");
                
                 var input4 = document.getElementById('saveServer4').value;
                 localStorage.setItem('server4', input4);
                 document.getElementById('saveServer4').value = localStorage.getItem('server4');
                 var x4 = localStorage["server4"];
                 document.getElementById("block5").innerHTML = x4;
                 }


  function saveData5(){
        alert("Saved data plan5");
                            
                             var input5 = document.getElementById('saveServer5').value;
                             localStorage.setItem('server5', input5);
                             document.getElementById('saveServer5').value = localStorage.getItem('server5');
                             var x5 = localStorage["server5"];
                             document.getElementById("block6").innerHTML = x5;
                             }

    function saveData6(){
        alert("Saved data plan6");
                                                  
                                    var input6 = document.getElementById('saveServer6').value;
                                  localStorage.setItem('server6', input6);
                                  document.getElementById('saveServer6').value = localStorage.getItem('server6');
                                  var x6 = localStorage["server6"];
                                document.getElementById("block7").innerHTML = x6;
                                }




  function saveData7(){
        alert("Saved data plan7");
                                                      
               var input7 = document.getElementById('saveServer7').value;
                localStorage.setItem('server7', input7);
                document.getElementById('saveServer7').value = localStorage.getItem('server7');
                 var x7 = localStorage["server7"];
                 document.getElementById("block8").innerHTML = x7;
                }





function saveData8(){
alert("Saved data plan8");
var input8 = document.getElementById('saveServer8').value;
 localStorage.setItem('server8', input8);
  document.getElementById('saveServer8').value = localStorage.getItem('server8');
  var x8 = localStorage["server8"];
  document.getElementById("block9").innerHTML = x8;
  }