var fname_status, lname_status, email_status, dob_status, hobby_status, phone_status, pass_status, cpass_status;
var submit_status;

function validation_check(){
  submit_status = false;
  var Firstname = document.getElementById("firstname").value;
  var Lastname = document.getElementById("lastname").value;
  var Email = document.getElementById("e_mail").value;
  var DOB = document.getElementById("dob").value;
  var Hobby = document.getElementById("hoby").value;
  var Phone = document.getElementById("phone").value;
  var Password = document.getElementById("pass").value;
  var CPassword = document.getElementById("cpass").value;

  if(fname_status==1&&lname_status==1&&email_status==1&&dob_status==1&&hobby_status==1&&phone_status==1&&pass_status==1&&cpass_status==1){
    document.getElementById("fname_error").innerHTML = "";
    document.getElementById("lname_error").innerHTML = "";
    document.getElementById("e_mail_error").innerHTML = "";
    document.getElementById("dob_error").innerHTML = "";
    document.getElementById("hobby_error").innerHTML = "";
    document.getElementById("phone_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    document.getElementById("cpass_error").innerHTML = "";
    submit_status = true;
    return submit_status;
  }
  else if(Firstname==""){
    document.getElementById("fname_error").innerHTML = "**Required";
  }
  else if(Lastname==""){
    document.getElementById("lname_error").innerHTML = "**Required";
  }
  else if(Email==""){
    document.getElementById("e_mail_error").innerHTML = "**Required";
  }
  else if(DOB==""){
    document.getElementById("dob_error").innerHTML = "**Required";
  }
  else if(Hobby==""){
    document.getElementById("hobby_error").innerHTML = "**Required";
  }
  else if(Phone==""){
    document.getElementById("phone_error").innerHTML = "**Required";
  }
  else if(Password==""){
    document.getElementById("pass_error").innerHTML = "**Required";
  }
  else if(CPassword==""){
    document.getElementById("cpass_error").innerHTML = "**Required";
  }
  return submit_status;
}

function fname(){
  var Firstname = document.getElementById("firstname").value;
  var i, val, len = Firstname.length;
  fname_status = 0;
  for(i=0;i<len;i++)
  {
    fname_status = 0;
    val = Firstname.charCodeAt(i);
    if(!isNaN(Firstname[i]))
    {
      document.getElementById("fname_error").innerHTML = "Numbers not allowed !";
      break;
    }
    else if(val>=32&&val<=47 || val>=58&&val<=64 || val>=91&&val<=96 || val>=123&&val<=126)
    {
      document.getElementById("fname_error").innerHTML = "Special chars not allowed!";
      break;
    }
    else if((len<3)||(len>15))
    {
      document.getElementById("fname_error").innerHTML = "The length must be between 3 to 15!";
      break;
    }
    else
    {
      document.getElementById("fname_error").innerHTML = "";
      fname_status = 1;
    }
  }
  // document.getElementById("fname_error").innerHTML = fname_status;
}

function lname(){
  var Lastname = document.getElementById("lastname").value;
  var i, val, len = Lastname.length;
  lname_status = 0;
  for(i=0;i<len;i++)
  {
    lname_status = 0;
    val = Lastname.charCodeAt(i);
    if(!isNaN(Lastname[i]))
    {
      document.getElementById("lname_error").innerHTML = "Numbers not allowed !";
      break;
    }
    else if(val>=32&&val<=47 || val>=58&&val<=64 || val>=91&&val<=96 || val>=123&&val<=126)
    {
      document.getElementById("lname_error").innerHTML = "Special chars not allowed!";
      break;
    }
    else if((len<3)||(len>15))
    {
      document.getElementById("lname_error").innerHTML = "The length must be between 3 to 15!";
      break;
    }
    else
    {
      document.getElementById("lname_error").innerHTML = "";
      lname_status = 1;
    }
  }
  // document.getElementById("lname_error").innerHTML = lname_status;
}

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

function birthdate(){
  var DOB = document.getElementById("dob").value;
  dob_status = 0;
  var n = new Date();
  var d = n.getDate();
  var m = n.getMonth();
  var y = n.getFullYear();
  m += 1;

  var dt = d/10;
  var mn = m/10;
  if(dt<1 && mn<1)
  {
    today_date = y+"-0"+m+"-0"+d;
  }
  else if(dt>=1 && mn<1)
  {
    today_date = y+"-0"+m+"-"+d;
  }
  else if(dt<1 && mn>=1)
  {
    today_date = y+"-"+m+"-0"+d;
  }
  else{
    today_date = y+"-"+m+"-"+d;
  }
  document.getElementById("dob").max = today_date;
  dob_status = 1;
  // document.getElementById("dob_error").innerHTML = today_date;
}

function m_gender(){
  document.getElementById("f").checked = false;
  document.getElementById("o").checked = false;
}

function f_gender(){
  document.getElementById("m").checked = false;
  document.getElementById("o").checked = false;
}

function o_gender(){
  document.getElementById("m").checked = false;
  document.getElementById("f").checked = false;
}

// function hobbies(){
//   var Hobby = document.getElementById("hoby").value;
//   var val, len = Hobby.length;
//   hobby_status = 0;
//   for(i=0;i<len;i++)
//   {
//     hobby_status = 0;
//     val = Hobby.charCodeAt(i);;
//     if(!isNaN(Hobby[i]))
//     {
//       document.getElementById("hobby_error").innerHTML = "**Numbers not allowed!";
//       break;
//     }
//     else if(val>=32&&val<=47 || val>=58&&val<=64 || val>=91&&val<=96 || val>=123&&val<=126)
//     {
//       document.getElementById("hobby_error").innerHTML = "Special chars not allowed!";
//       break;
//     }
//     else if((len<3)||(len>15))
//     {
//       document.getElementById("hobby_error").innerHTML = "The length must be between 3 to 15!";
//       break;
//     }
//     else{
//       document.getElementById("hobby_error").innerHTML = "";
//       hobby_status = 1;
//     }
//   }
//   document.getElementById("hobby_error").innerHTML = hobby_status;
// }

function hobbies(){
  var Hobby = document.getElementById("hoby").value;
  var len = Hobby.length;
  var res1, patt1 = /[0-9]/g;
  var res2, patt2 = /[¬`!"£$%^&*()+={}:;@'~#<>?/|]/g;
  hobby_status = 0;
  res1 = Hobby.match(patt1);
  res2 = Hobby.match(patt2);
  if(res2!=null){
    document.getElementById("hobby_error").innerHTML = "Special chars not allowed!";
    hobby_status = 0;
  }
  if(res1!=null)
  {
    document.getElementById("hobby_error").innerHTML = "Numbers not allowed!";
    hobby_status = 0;
  }
  if(res1==null&&res2==null){
    document.getElementById("hobby_error").innerHTML = "";
    hobby_status = 1;
  }
  // document.getElementById("hobby_error").innerHTML = hobby_status;
}

function p_number(){
  var Phone = document.getElementById("phone").value;
  var i, len = Phone.length;
  phone_status = 0;
  for(i=0;i<len;i++)
  {
    phone_status = 0;
    if(len<12 || len>12)
    {
      document.getElementById("phone_error").innerHTML = "12 digit Number with countrycode reqd!";
      break;
    }
    else
    {
      document.getElementById("phone_error").innerHTML = "";
      phone_status = 1;
    }
  }
  // document.getElementById("phone_error").innerHTML = phone_status;
}

function pass_check(){
  var Password = document.getElementById("pass").value;
  var len = Password.length;
  pass_status = 0;
  document.getElementById("cpass").disabled = true;
  if(len<8)
  {
    document.getElementById("pass_error").innerHTML = "min length is 8";
  }
  else if(len>12)
  {
    document.getElementById("pass_error").innerHTML = "max limit is 12";
  }
  else
  {
    document.getElementById("pass_error").innerHTML = "";
    document.getElementById("cpass").disabled = false;
    document.getElementById("cpass").blur();
    pass_status = 1;
  }
  // document.getElementById("pass_error").innerHTML = pass_status;
}

function cpass_check(){
  var CPassword = document.getElementById("cpass").value;
  var Password = document.getElementById("pass").value;
  cpass_status = 0;
  if(Password == CPassword)
  {
    document.getElementById("cpass_error").innerHTML = "";
    cpass_status = 1;
  }
  else
  {
    document.getElementById("cpass_error").innerHTML = "password doesnot match!";
    cpass_status = 0;
  }
  // document.getElementById("cpass_error").innerHTML = cpass_status;
}
