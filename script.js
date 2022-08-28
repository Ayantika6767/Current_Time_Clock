function displayTime()
{
  var dateTime= new Date();
  var hrs= dateTime.getHours();
  var minutes= dateTime.getMinutes();
  var seconds= dateTime.getSeconds();
  var session= document.getElementById('session');

  if(hrs>=12){
    session.innerHTML='PM';
  }

else{
  session.innerHTML='AM';
}
if(hrs>12)
{
  hrs=hrs-12;
}
document.getElementById('hours').innerHTML=hrs;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;

}

setInterval(displayTime,1000);





