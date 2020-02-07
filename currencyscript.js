function getRate(from, to) 
{
    var script = document.createElement('script');
    script.setAttribute('src', "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22"+from+to+"%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=returnedData");
    document.body.appendChild(script);
}
function returnedData(data) 
{
    var rate = parseFloat(data.query.results.rate.Rate);
    var x=document.getElementById("r");
    var amount = parseFloat((document.getElementById("t1")).value);
    var result = (rate)*(amount);
    var t1=document.getElementById("s2");
    var t2=t1.options[t1.selectedIndex].value;
    var load=document.getElementById("load");
    load.style.display = "none";
    x.innerHTML = result+" "+t2;
    if(x.innerHTML.match("NaN"))
        x.innerHTML="Please enter the amount first.";
}
function convert() 
{
    var f1=document.getElementById("s1");
    var t1=document.getElementById("s2");
    var f2=f1.options[f1.selectedIndex].value;
    var t2=t1.options[t1.selectedIndex].value;
    var amount = (document.getElementById("t1")).value;
    var load=document.getElementById("load");
    document.getElementById("r").innerHTML = "";
    if(amount == "")
        document.getElementById("r").innerHTML = "Please enter the amount first.";
    else if(f2 == "0" || t2 == "0")
        document.getElementById("r").innerHTML = "Choose the correct options.";
    else
    {
        getRate(f2, t2);
        load.style.display = "inline";
    }
        
}

function empty()
{
    document.getElementById("r").innerHTML = "";
    document.getElementById("t1").value = "";
    var f1=document.getElementById("s1");
    var t1=document.getElementById("s2");
    f1.options[f1.selectedIndex].value=0;
    t1.options[t1.selectedIndex].value=0;
}

function enter(e)
{
var unicode = e.charCode? e.charCode : e.keyCode;
    //alert(unicode);
    if(unicode==13)
    {
        //alert(unicode);
        convert();
    }
}