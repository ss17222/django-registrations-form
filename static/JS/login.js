function validation_check(){
  submit_status = false;
  var Email = document.getElementById("e_mail").value;
  var Password = document.getElementById("pass").value;

  if(email_status==1&&pass_status==1){
    document.getElementById("e_mail_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    submit_status = true;
    return submit_status;
  }
  else if(Email==""){
    document.getElementById("e_mail_error").innerHTML = "**Required";
  }
  else if(Password==""){
    document.getElementById("pass_error").innerHTML = "**Required";
  }
  return submit_status;
}

var email_status, pass_status;
var submit_status;

function email(){
  var Email = document.getElementById("e_mail").value;
  var i, val, f_val, len = Email.length;
  var res, patt = /[¬`!"£$%^&*()-+={}:;'~#<,>/?|]/i;
  email_status = 0;
  f_val = Email[0];
  for(i=0;i<len;i++)
  {
    email_status = 0;
    res = Email[i].match(patt);
    val = f_val.charCodeAt(0);
    if(res!=null)
    {
      document.getElementById("e_mail_error").innerHTML = res+" not allowed!";
      break;
    }
    else if(f_val>=0 && f_val<=9)
    {
      document.getElementById("e_mail_error").innerHTML = "number not allowed at beg!";
      break;
    }
    else if(val>=32&&val<=47 || val>=58&&val<=64 || val>=91&&val<=96 || val>=123&&val<=126)
    {
      document.getElementById("e_mail_error").innerHTML = "cannot start with spl chars!";
      break;
    }
    else if(Email.charAt(len-4)!='.' && Email.charAt(len-3)!='.')
    {
      document.getElementById("e_mail_error").innerHTML = "invalid email!";
      break;
    }
    else {
      document.getElementById("e_mail_error").innerHTML = "";
      email_status = 1;
    }
  }
  // document.getElementById("e_mail_error").innerHTML = email_status;
}

function pass_check(){
  var Password = document.getElementById("pass").value;
  var len = Password.length;
  pass_status = 0;
  if(len<5)
  {
    document.getElementById("pass_error").innerHTML = "min length is 5";
  }
  else if(len>12)
  {
    document.getElementById("pass_error").innerHTML = "max limit is 12!";
  }
  else
  {
    document.getElementById("pass_error").innerHTML = "";
    pass_status = 1;
  }
  // document.getElementById("pass_error").innerHTML = pass_status;
}
