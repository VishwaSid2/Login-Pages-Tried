function submit(){
    const Data={
        email:document.querySelector('input[type="email"]'),
        password:document.querySelector('input[type="password"]'),
        userName:document.querySelector('.username'),
        firstName:document.querySelector('.first'),
        lastName:document.querySelector('.lastname'),
        country:document.querySelector('select'),
        phone:document.querySelector('input[type="tel"]'),
        agree:document.querySelector('input[type="checkbox"]'),
        sbutton:document.querySelector('button').value
    }
    //email validation
    Data.email.value !=="" && Data.email.value.includes("@") && Data.email.value.includes(".com") ?  Data.email.style.boxShadow= "0px 0px 0px 0px red" :Data.email.style.boxShadow= "0px 0px 5px 3px red";
    //password validation
    Data.password.value !== ""  ?  Data.password.style.boxShadow= "0px 0px 0px 0px red" : Data.password.style.boxShadow= "0px 0px 5px 3px red";
    //username
    Data.userName.value !== ""  ?  Data.userName.style.boxShadow= "0px 0px 0px 0px red" : Data.userName.style.boxShadow= "0px 0px 5px 3px red";
    //firstname
    Data.firstName.value !== ""  ?  Data.firstName.style.boxShadow= "0px 0px 0px 0px red" : Data.firstName.style.boxShadow= "0px 0px 5px 3px red";
    //last name
    Data.lastName.value !== ""  ?  Data.lastName.style.boxShadow= "0px 0px 0px 0px red" : Data.lastName.style.boxShadow= "0px 0px 5px 3px red";
    //country 
    Data.country.value !== "default"  ?  Data.country.style.boxShadow= "0px 0px 0px 0px red" : Data.country.style.boxShadow= "0px 0px 5px 3px red";
    //phone
    Data.phone.value !== "" && Data.phone.value.includes('A,a')  ?  Data.phone.style.boxShadow= "0px 0px 0px 0px red" : Data.phone.style.boxShadow= "0px 0px 5px 3px red";
    //agree
    // Data.agree.value == "on"  ? 
    Data.agree.value == "on"   ? Data.sbutton.removeAttribute('disabled')    : Data.sbutton.setAttribute('disabled', true);
   
}
