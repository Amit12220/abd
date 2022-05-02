// write js code here corresponding to index.html
// You should add submit event on the form
masaiForm.addEventListener("submit",abc)
var arr= [];
function abc()
{
    event.preventDefault();
    var obj={
        matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    };
    console.log(obj);
    arr.push(obj);
    
    localStorage.setItem("schedule",JSON.stringify(arr));
    window.location.href="./matches.html";
}
