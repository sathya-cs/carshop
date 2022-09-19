 /***** dropdown ****** */
  $(".dropdown-menu a.dropdown-toggle").on('click',function(){
    if(!$(this).next().hasClass('show'))
    {
      $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
    }
    
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass("show");
    
    
    $(this).parents("li.nav-item.dropdown.show").on('hidden.bs.dropdown',function(e){
      $(".dropdown-submenu .show").removeClass("show");
    });
    
    return false;
  });
  /****** login *****/
    document.querySelector('.login-button').onclick = () =>{
      document.querySelector('.login-form-container').classList.toggle('active');
    }

    document.querySelector('#close-login-form').onclick = () =>{
      document.querySelector('.login-form-container').classList.remove('active');
    }
  /*******customer details page******/
  let btn = document.querySelector('.buy-btn');
  btn.addEventListener("click",()=>{
    window.open("customerform.html");
  });
  /****our service page***** */
  let btn1 = document.querySelector('.read1');
  btn1.addEventListener("click",()=>{
    window.open("ourservice.html");
  });
  let btn2 = document.querySelector('.read2');
  btn2.addEventListener("click",()=>{
    window.open("ourservice.html");
  });
  let btn3 = document.querySelector('.read3');
  btn3.addEventListener("click",()=>{
    window.open("ourservice.html");
  });

  /******customer details warning msg ****/
  function warningMsg(){
    var cb=document.getElementById("termsAgreement");
    var p=document.getElementById("msg");
    if(cb.checked==true){
      p.style.display="block";
    }
    else{
      p.style.display="none";
    }
  }