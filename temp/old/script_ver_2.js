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
function validateTemp(e)
{
var unicode = e.charCode? e.charCode : e.keyCode;
    //alert(unicode);
    if (unicode!=8 && unicode!=45 && unicode!=46)
    {
        if (unicode<48 || unicode>57)
            return false;
    }
}
function selectedUnit()
{
    var opt = document.getElementById("dd").value;
    //var opt = m1.options[m1.selectedIndex].value;
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
    var suffix;
    if(value != "" && to != "0" && from != "0")
    {
        if(from==to)
            {
                result=value;
                if(to!="K")
                    suffix="&deg"+to;
                else
                    suffix=to;
            }
            
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
                        suffix="&deg;C";
                        break;
            case "K"  : result=(inC+273.15);
                        suffix="K";
                        break;
            case "F"  : result=((inC*(9/5))+32);
                        suffix="&deg;F";
                        break;
        }
        }
        document.getElementById("temp_result").innerHTML = result+" "+suffix;
    }
    if(value == "")
        document.getElementById("temp_result").innerHTML = "";
}
function conTime()
{
    var from = document.getElementById("from_time").value;
    var to = document.getElementById("to_time").value;
    var value = document.getElementById("tiin").value;
    var inMin;
    var result;
    var suffix;
    if(value != "" && to != "0" && from != "0")
    {
        vin=parseFloat(value);
        switch(from)
        {
            case "ns"   : inMin=(vin/(60000000000));
                          break;
            case "us"   : inMin=(vin/(60000000));
                          break;
            case "ms"   : inMin=(vin/(60000));
                          break;
            case "s"    : inMin=(vin/(60));
                          break;
            case "min"  : inMin=vin;
                          break;
            case "hr"   : inMin=(vin*(60));
                          break;
            case "day"  : inMin=(vin*(1440));
                          break;
            case "wk"   : inMin=(vin*(10080));
                          break;
            case "4nite": inMin=(vin*(20160));
                          break;
            case "yr"   : inMin=(vin*(525600));
                          break;
        }
        switch(to)
        {
            case "ns"   : result=(inMin*(60000000000));
                          suffix="ns"
                          break;
            case "us"   : result=(inMin*(60000000));
                          suffix="&mu;s"
                          break;
            case "ms"   : result=(inMin*(60000));
                          suffix="ms"
                          break;
            case "s"    : result=(inMin*(60));
                          suffix="s"
                          break;
            case "min"  : result=inMin;
                          suffix="min(s)"
                          break;
            case "hr"   : result=(inMin/(60));
                          suffix="hr(s)"
                          break;
            case "day"  : result=(inMin/(1440));
                          suffix="day(s)"
                          break;
            case "wk"   : result=(inMin/(10080));
                          suffix="week(s)"
                          break;
            case "4nite": result=(inMin/(20160));
                          suffix="Fortnight(s)"
                          break;
            case "yr"   : result=(inMin/(525600));
                          suffix="Year(s)"
                          break;
        }
        if(from == to)
        {
                result=vin;
        }
        document.getElementById("time_result").innerHTML = result+" "+suffix;
    }
    if(value == "")
        document.getElementById("time_result").innerHTML = "";//alert(from+to+value);
}