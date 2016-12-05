/**
 * Created by mrowinski on 05.12.2016.
 */
var data=[];
$.getJSON('dane2.json', function(dane){//funkcja pobiera obiekty"dane" z pliku funkcja z biblioteki jquery
    console.log(dane)//wypisuje w konsoli dane
    for(var i=0;i<dane.users.length;i++)
    {
    console.log(dane.users[i])
    }
});