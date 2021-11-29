function Validate(){
    var username = document.getElementById("name1").value;
    var fathername = document.getElementById("Fathername").value;
    var reg = /^([a-z A-Z]{8,20})$/;
    // alert(username);
    if(reg.test(username) || reg.test(fathername))
    {
       if(reg.test(username) ){
        alert("Valid Username");
        document.getElementById("invalid").style.visibility = "hidden";
        document.getElementById("name1").style.border = "1px solid black";
       }
      else if(reg.test(fathername)){
        alert("Valid Fathername");
        document.getElementById("invalid1").style.visibility = "hidden";
        document.getElementById("Fathername").style.border = "1px solid black";
       }
       
       
    }

    if((reg.test(username) == false) || (reg.test(fathername) == false)){
        if((reg.test(username) == false)){
            document.getElementById("invalid").style.visibility = "Visible";
            document.getElementById("name1").style.border = "1px solid red";
        }

        if((reg.test(fathername) == false)){
            document.getElementById("invalid1").style.visibility = "Visible";
            document.getElementById("Fathername").style.border = "1px solid red";
        }
       
       
    }
    
   

  

 

    var emailid = document.getElementById("email").value;
    var reg1 = /^([a-z 0-9 \. -]+)@([a-z A-z -]+).([a-z]{2,8})(.[a-z]{2,8})?$/

    if(reg1.test(emailid)){
        alert("Valid emailid");
        document.getElementById("invalid2").style.visibility = "hidden";
        document.getElementById("email").style.border = "1px solid black";
         
    }
    else if(reg1.test(emailid)== false){
          alert("Invalid emailid");
          document.getElementById("invalid2").style.visibility = "Visible";
        document.getElementById("email").style.border = "1px solid red";
         

    }
   

    var dob = document.getElementById("date1").value;

    var reg2 = /^([0-9][1-9])-([0-9][1-9])-([1-9][0-9][0-9][0-9])$/

    if(reg2.test(dob)){
        alert("Valid Date Of Birth");
        document.getElementById("invalid3").style.visibility = "hidden";
        document.getElementById("date1").style.border = "1px solid black";
        
    }
    else if(reg2.test(dob)== false){
          alert("Invalid Date Of Birth");
          document.getElementById("invalid3").style.visibility = "Visible";
          document.getElementById("date1").style.border = "1px solid red";
         

    }

   var mobilenumber = document.getElementById("mobile").value;

   var reg3=/^([5-9]){1}([0-9]{9})$/

   if(reg3.test(mobilenumber)){
    alert("Valid Mobile number");
    document.getElementById("invalid4").style.visibility = "hidden";
    document.getElementById("mobile").style.border = "1px solid black";
    
}
else if(reg3.test(mobilenumber)== false){
      alert("Invalid Mobile Number");
      document.getElementById("invalid4").style.visibility = "Visible";
      document.getElementById("mobile").style.border = "1px solid red";
     

}

var Pincode1 = document.getElementById("code1").value;

var reg4 =/^[0-9]{6}$/

if(reg4.test(Pincode1)){
    alert("Valid Pincode");
    document.getElementById("invalid8").style.visibility = "hidden";
    document.getElementById("code1").style.border = "1px solid black";
    
}
else if(reg4.test(Pincode1)== false){
      alert("Invalid Mobile Number");
      document.getElementById("invalid8").style.visibility = "Visible";
      document.getElementById("code1").style.border = "1px solid red";
     

}

var sameaddress = document.getElementById("same").value;
var Address1 = document.getElementById("address1").value;
var Address2 =  document.getElementById("address2").value;
var City1 = document.getElementById("city1").value;
var Address3 = document.getElementById("address3").value;
var Address4 =  document.getElementById("address4").value;
var City2 = document.getElementById("city2").value;
var Pincode2 = document.getElementById("code2").value;

if(sameaddress.Checked == true){
    var Address3 = Address1 ;
   document.getElementById("address3").innerHTML = "Address3.value";
    var Address4 = Address2;
    document.getElementById("address4").innerHTML = "Address4.value";
    var City2 = City1;
    document.getElementById("city2").innerHTML =  "City2.value";
   // document.getElementById("state2").value = document.getElementById("state1").value;
    var Pincode2 = Pincode1;
    document.getElementById("code2").innerHTML =   "Pincode2.value";
  
}
else if(sameaddress.Checked == false){
    var Address3 = "" ;
    var Address4 = "";
    var City2 = "";
   // document.getElementById("state2").value = document.getElementById("state1").value;
    var Pincode2 = "";
}





var profile = document.getElementById("pic").value;






    if((username.trim()=="") || (fathername.trim()=="") || (emailid.trim()=="") || (dob.trim() == "" ) ||(mobilenumber.trim() == "" ) ||(Address3.trim() == "") || (Address4.trim() == "") || (City2.trim() == "") ||(Pincode2.trim()=="") || (profile == null)){

        if(username.trim()==""){
            alert("invalid username");
        document.getElementById("invalid").innerHTML = "Required";
        document.getElementById("invalid").style.visibility = "Visible";
        document.getElementById("name1").style.border = "1px solid red";
        }
        
       
       if(fathername.trim()==""){
        document.getElementById("invalid1").innerHTML = "Required";
        document.getElementById("invalid1").style.visibility = "Visible";
        document.getElementById("Fathername").style.border = "1px solid red";
       }
       
        
       if(emailid.trim()==""){
        document.getElementById("invalid2").innerHTML = "Required";
        document.getElementById("invalid2").style.visibility = "Visible";
        document.getElementById("email").style.border = "1px solid red";
       }
       
       
      if(dob.trim() == ""){
        document.getElementById("invalid3").innerHTML = "Required";
        document.getElementById("invalid3").style.visibility = "Visible";
        document.getElementById("date1").style.border = "1px solid red";
      }

      if(mobilenumber.trim() == "" ){
        document.getElementById("invalid4").innerHTML = "Required";
        document.getElementById("invalid4").style.visibility = "Visible";
        document.getElementById("mobile").style.border = "1px solid red";
      }
       

      if(Address3.trim()==""){
        alert("invalid current Address1");
        document.getElementById("invalid5").innerHTML = "Required";
    document.getElementById("invalid5").style.visibility = "Visible";
    document.getElementById("address3").style.border = "1px solid red";
    }

    if(Address4.trim()==""){
        alert("invalid current Address2");
        document.getElementById("invalid6").innerHTML = "Required";
    document.getElementById("invalid6").style.visibility = "Visible";
    document.getElementById("address4").style.border = "1px solid red";
    }

    if(City2.trim()==""){
        alert("invalid current City");
        document.getElementById("invalid7").innerHTML = "Required";
    document.getElementById("invalid7").style.visibility = "Visible";
    document.getElementById("city2").style.border = "1px solid red";
    }

    if(Pincode2.trim()==""){
        alert("invalid current pincode");
        document.getElementById("invalid8").innerHTML = "Required";
    document.getElementById("invalid8").style.visibility = "Visible";
    document.getElementById("code2").style.border = "1px solid red";
    }
        //return false;

        if(profile == null){
            alert("invalid Pic");
            document.getElementById("invalid9").innerHTML = "Required";
        document.getElementById("invalid9").style.visibility = "Visible";
        document.getElementById("pic").style.border = "1px solid red";
        }
    }

}