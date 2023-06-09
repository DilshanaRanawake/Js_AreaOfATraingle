function Calculate(){
    // alert("Button Test");
    let b= parseFloat(document.getElementById("txtB").value);
    let h= parseFloat(document.getElementById("txtH").value); 
    let area= (1/2)*b*h;
    document.getElementById("txtResult").value= area;
}