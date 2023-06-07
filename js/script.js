let button=document.querySelectorAll(".main-menu ul li button");

    for (let i=0; (i < button.length); i++)
    button[i].onclick = function() {
        for (let j=0; (j < button.length); j++) {
            if (button[j].classList.contains("active")) 
            button[j].classList.remove('active');
        }    
            if (!button[i].classList.contains("active")) 
            button[i].classList.add('active');
        
  };

  let lang_button=document.querySelectorAll(".lang-select button");

    for (let i=0; (i < lang_button.length); i++)
    lang_button[i].onclick = function() {
        for (let j=0; (j < lang_button.length); j++) {
            if (lang_button[j].classList.contains("active")) 
            lang_button[j].classList.remove('active');
        }    
            if (!lang_button[i].classList.contains("active")) 
            lang_button[i].classList.add('active');
        
  };