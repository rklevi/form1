let a,b,c,d,e,f,g,h,i,j;
function save(){
    a=document.querySelector("#name").value;
    b=document.querySelector("#phone").value;
    c=document.querySelector("#regno").value;
    d=document.querySelector("#dob").value;
    e=document.querySelector("#email").value;
    f=document.querySelector("#branch").value;
    g=document.querySelector("#domain").value;
    h=document.querySelector("#github").value;
    i=document.querySelector("#ccp").value;
    j=document.querySelector("#insta").value;
    validation();
}
function validation(){
    if(a=='' || b==''|| c=='' || d=='' || e=='' || f=='' || g=='' || h=='' || i=='' || j=='')
    {
        alert("Incomplete Fields found");
    }
    else if(b.length!=10){
        alert("Kindly enter a 10 digit mobile number!")
    }
    else{
    localStorage.setItem("Name",a);
    localStorage.setItem("phone",b);
    localStorage.setItem("regno",c);
    localStorage.setItem("dob",d);
    localStorage.setItem("email",e);
    localStorage.setItem("branch",f);
    localStorage.setItem("domain",g);
    localStorage.setItem("github",h);
    localStorage.setItem("ccp",i);
    localStorage.setItem("insta",j);
    }
}
    document.querySelector("#name").value=localStorage.getItem("Name");
    document.querySelector("#phone").value=localStorage.getItem("phone");
    document.querySelector("#regno").value=localStorage.getItem("regno");
    document.querySelector("#dob").value=localStorage.getItem("dob");
    document.querySelector("#email").value=localStorage.getItem("email");
    document.querySelector("#branch").value=localStorage.getItem("branch");
    document.querySelector("#domain").value=localStorage.getItem("domain");
    document.querySelector("#github").value=localStorage.getItem("github");
    document.querySelector("#ccp").value=localStorage.getItem("ccp");
    document.querySelector("#insta").value=localStorage.getItem("insta");