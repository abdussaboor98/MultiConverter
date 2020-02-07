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

function conArea()
{
    var from = document.getElementById("from_area").value;
    var to = document.getElementById("to_area").value;
    var value = document.getElementById("ain").value;
    var inm2;
    var result;
    var suffix;
    if(value != "" && to != "0" && from != "0")
    {
        vin=parseFloat(value);
        switch(from)
        {
            case "ac"   : inm2=(vin*(4046.85642));
                          break;
            case "ha"   : inm2=(vin*(10000));
                          break;
            case "cm2"  : inm2=(vin/(10000));
                          break;
            case "dam2" : inm2=(vin*(100));
                          break;
            case "dm2"  : inm2=(vin/(100));
                          break;
            case "ft2"  : inm2=(vin*(0.09290304));
                          break;
            case "hm2"  : inm2=(vin*(10000));
                          break;
            case "in2"  : inm2=(vin*(0.00064516));
                          break;
            case "km2"  : inm2=(vin*(1000000));
                          break;
            case "m2"   : inm2=vin;
                          break;
            case "mi2"  : inm2=(vin*(2589988.11));
                          break;
            case "mm2"  : inm2=(vin/(1000000));
                          break;
            case "yd2"  : inm2=(vin*(0.83612736));
                          break;
        }
        switch(to)
        {
            case "ac"   : result=(inm2/(4046.85642));
                          suffix="acre(s)";
                          break;
            case "ha"   : result=(inm2/(10000));
                          suffix="hectares";
                          break;
            case "cm2"  : result=(inm2*(10000));
                          suffix="cm<sup>2</sup>";
                          break;
            case "dam2" : result=(inm2/(100));
                          suffix="dam<sup>2</sup>";
                          break;
            case "dm2"  : result=(inm2*(100));
                          suffix="dm<sup>2</sup>";
                          break;
            case "ft2"  : result=(inm2/(0.09290304));
                          suffix="ft<sup>2</sup>";
                          break;
            case "hm2"  : result=(inm2/(10000));
                          suffix="hm<sup>2</sup>";
                          break;
            case "in2"  : result=(inm2/(0.00064516));
                          suffix="in<sup>2</sup>";
                          break;
            case "km2"  : result=(inm2/(1000000));
                          suffix="km<sup>2</sup>";
                          break;
            case "m2"   : result=vin;
                          suffix="m<sup>2</sup>";
                          break;
            case "mi2"  : result=(inm2/(2589988.11));
                          suffix="mi<sup>2</sup>";
                          break;
            case "mm2"  : result=(inm2*(1000000));
                          suffix="mm<sup>2</sup>";
                          break;
            case "yd2"  : result=(inm2/(0.83612736));
                          suffix="yd<sup>2</sup>";
                          break;
        }
        if(from == to)
        {
                result=vin;
        }
        document.getElementById("area_result").innerHTML = result+" "+suffix;
    }
    if(value == "")
        document.getElementById("area_result").innerHTML = "";//alert(from+to+value);
}

function conLength()
{
    var from = document.getElementById("from_length").value;
    var to = document.getElementById("to_length").value;
    var value = document.getElementById("lin").value;
    var inm;
    var result;
    var suffix;
    if(value != "" && to != "0" && from != "0")
    {
        vin=parseFloat(value);
        switch(from)
        {
            case "A"    :   inm=(vin/(10000000000));
                            break;
            case "cm"   :   inm=(vin/(100));
                            break;
            case "dam"  :   inm=(vin*(10));
                            break;
            case "dm"   :   inm=(vin/(10));
                            break;
            case "ft"   :   inm=(vin*(0.3048));
                            break;
            case "Gm"   :   inm=(vin*(1000000000));
                            break;
            case "hm"   :   inm=(vin*(100));
                            break;
            case "in"   :   inm=(vin*(0.0254));
                            break;
            case "km"   :   inm=(vin*(1000));
                            break;
            case "Mm"   :   inm=(vin*(1000000));
                            break;
            case "m"    :   inm=vin;
                            break;
            case "um"   :   inm=(vin/(1000000));
                            break;
            case "mi"   :   inm=(vin*(1609.344));
                            break;
            case "mm"   :   inm=(vin/(1000));
                            break;
            case "nm"   :   inm=(vin/(1000000000));
                            break;
            case "nmi"  :   inm=(vin*(1852));
                            break;
            case "pm"   :   inm=(vin/(1000000000000));
                            break;
            case "yd"   :   inm=(vin*(0.9144));
                            break;
            case "ly"   :   inm=(vin/(0.00000000000000010570));
                            break;
            
        }
        switch(to)
        {
            case "A"    :   result=(inm*(10000000000));
                            suffix="&Aring;";
                            break;
            case "cm"   :   result=(inm*(100));
                            suffix="cm";
                            break;
            case "dam"  :   result=(inm/(10));  
                            suffix="dam";                          
                            break;
            case "dm"   :   result=(inm*(10));
                            suffix="dm";
                            break;
            case "ft"   :   result=(inm/(0.3048));
                            suffix="ft";
                            break;
            case "Gm"   :   result=(inm/(1000000000));
                            suffix="Gm";
                            break;
            case "hm"   :   result=(inm/(100));
                            suffix="hm";
                            break;
            case "in"   :   result=(inm/(0.0254));
                            suffix="in";
                            break;
            case "km"   :   result=(inm/(1000));
                            suffix="km";
                            break;
            case "Mm"   :   result=(inm/(1000000));
                            suffix="Mm";
                            break;
            case "m"    :   result=inm;
                            suffix="m";
                            break;
            case "um"   :   result=(inm*(1000000));
                            suffix="&mu;m";
                            break;
            case "mi"   :   result=(inm/(1609.344));
                            suffix="mi";
                            break;
            case "mm"   :   result=(inm*(1000));
                            suffix="mm";
                            break;
            case "nm"   :   result=(inm*(1000000000));
                            suffix="nm";
                            break;
            case "nmi"  :   result=(inm/(1852));
                            suffix="nmi";
                            break;
            case "pm"   :   result=(inm*(1000000000000));
                            suffix="pm";
                            break;
            case "yd"   :   result=(inmn/(0.9144));
                            suffix="yd";
                            break;
            case "ly"   :   result=(inm*(0.00000000000000010570));
                            suffix="ly";
                            break;
        }
        if(from == to)
        {
                result=vin;
        }
        document.getElementById("length_result").innerHTML = result+" "+suffix;
    }
    if(value == "")
        document.getElementById("length_result").innerHTML = " ";//alert(from+to+value);
}