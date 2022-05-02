// write js code here corresponding to matches.html
var arr=JSON.parse(localStorage.getItem("schedule"));
var arr1= JSON.parse(localStorage.getItem("favourites"))||[];
Dog(arr);

function Dog(a)
{
    document.querySelector("tbody").innerHTML = "";
    a.forEach(function(elem) {
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=elem.matchnum;
        var td2=document.createElement("td");
        td2.innerText=elem.teamA;
        var td3=document.createElement("td");
        td3.innerText=elem.teamB;
        var td4=document.createElement("td");
        td4.innerText=elem.date;
        var td5=document.createElement("td");
        td5.innerText=elem.venue;
        var td6=document.createElement("td");
        td6.innerText="favourites";
        td6.style.color="green";
        td6.addEventListener("click",function(){
         Fom(elem)
        });
       tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);
    });
   
    }
    function Fom(elem)
    {
        arr1.push(elem)
        localStorage.setItem("favourites",JSON.stringify(arr1));
      
    }