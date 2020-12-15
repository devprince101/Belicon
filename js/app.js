$(document).ready(function(){
    $('#myButton').click(()=>{
      document.body.classList.toggle('nav_open');
    });
    $('.nav_link').click(()=>{
        document.body.classList.remove('nav_open'); 
    })
  });
  