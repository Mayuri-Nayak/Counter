var val=document.querySelector("#num");
n=0;
val.innerHTML=n;
function inc(){ 
  n++;
  val.innerHTML=n;
  if(n>0){
  document.getElementById('num').style.color="green";
}
if(n==0){
  document.getElementById('num').style.color="white";
}

}
function res(){
  n=0;
  val.innerHTML=n;
  if(n==0){
    document.getElementById('num').style.color="white";
  }
}
function rev(){
  n--;
  val.innerHTML=n;
  if(n<0){
    document.getElementById('num').style.color="red";
  }  
  if(n==0){
    document.getElementById('num').style.color="white";
  }
}