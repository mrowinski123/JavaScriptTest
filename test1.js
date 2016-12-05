/**
 * Created by mrowinski on 05.12.2016.
 */
var data=[];
$.getJSON('http://jsonplaceholder.typicode.com/posts',function(data){
    for(var i=0;i<data.length+1;i++)
    {
        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        if(i==0) {
            cell1.innerHTML = "TITLE";
            cell2.innerHTML = "BODY";

        }
        else{
            cell1.innerHTML =data[i].title;
            cell2.innerHTML =data[i].body;
        }
    }
});
