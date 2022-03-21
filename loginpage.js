function validate()
{
    var username=document.getElementById("username").Value
    var password=document.getElementById("password").Value
    if(username=="admin" && password=="user")
    {
        alert("Login Successfully");
        return false;
    }
    else
    {
        alert("Login not Successfully");
    }
}