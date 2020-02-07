function validate(e)
{
var unicode = e.charCode? e.charCode : e.keyCode;
    //alert(unicode);
    if (unicode!=8)
        if(unicode!=46)
        {
            if (unicode<48 || unicode>57)
                return false;
        }
}
function selectedUnit()
{
    var m1 = document.getElementById("dd");
    var opt = m1.options[m1.selectedIndex].value;
    var i;
    var a=["length","area","vol","temp","weight","time"]
    for(i=0;i<6;i++)
    {
        if(opt == a[i])
        {
            document.getElementById(a[i]).style.display = "block";
        }
        else
        {
            document.getElementById(a[i]).style.display = "none";
        }
    }
}
function conTemp()
{
    var from = document.getElementById("from_temp").value;
    var to = document.getElementById("to_temp").value;
    var value = document.getElementById("tein").value;
    var inC;
    var result;
    var prefix;
    if(from == "0")
        alert("Please select the From value.");
    else if(to == "0")
        alert("Please select the To value.");
    else if(value=="")
        alert("Please enter the input value.");
    else
    {
        vin=parseFloat(value);
        switch(from)
        {
            case "C"  : inC=vin;
                        break;
            case "K"  : inC=(vin-273.15);
                        break;
            case "F"  : inC=((vin-32)*(5/9));
                        break;
        }
        switch(to)
        {
            case "C"  : result=inC;
                        prefix="&deg;C"
                        break;
            case "K"  : result=(inC+273.15);
                        prefix="K"
                        break;
            case "F"  : result=((vin*(9/5))+32)
                        prefix="&deg;F"
                        break;
        }
        document.getElementById("temp_result").innerHTML = (parseFloat(result).toFixed(2))+" "+prefix;
    }
}