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

