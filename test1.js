/**
 * Created by mrowinski on 05.12.2016.
 */
var data=[];
$.getJSON('http://jsonplaceholder.typicode.com/posts',function(data){
  // console.log(dane2)
    for(var i=0;i<data.length;i++)
    {
        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "TITLE: " + data[i].title;
        cell2.innerHTML = "BODY: " + data[i].body;
    }
});
function myFunction() {

}