var num=1;
var sum=0;
function insertItem() {
var table=document.querySelector("table");
var a=document.getElementById("item-name-input").value;
var b=document.getElementById("item-price-input").value;
if(a==null || a=="" || b==null || b==""){
    alert("data to bharo !!");
}
else{
    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);

    // adding data to the row elements
    cell1.innerHTML = num++;
    cell2.innerHTML = a;
    cell2.setAttribute('data-ns-test','item-name');
    cell3.innerHTML = b;
    cell3.setAttribute("data-ns-test","item-price");

    // calculating the grandTotal in sum variable
    sum=sum+parseInt(b);
    // clear the input fields 
    document.getElementById("item-name-input").value="";
    document.getElementById("item-price-input").value="";
    // changing grand total value
    document.getElementById("grand-total").innerHTML=sum;

}

}