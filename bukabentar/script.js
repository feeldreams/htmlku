  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {befanimkata2();setTimeout(animkata2,400);} 
  function befanimkata2(){kalimat.style.opacity="0";kalimatb.style.opacity="0";kalimatc.style.opacity="0";} 
  function animkata2() {kalimat.innerHTML = kalimat2.innerHTML;kalimatb.innerHTML = kalimatb2.innerHTML;kalimatc.innerHTML="";kalimat.style.opacity="1";kalimatb.style.opacity="1";setTimeout(function(){kalimat.style.opacity="0";},2100);setTimeout(otomatis2b,2300);}
  function otomatis2b(){kalimat.innerHTML = kalimat2b.innerHTML;kalimat.style.opacity="1";kalimatb.innerHTML = "";kalimatc.innerHTML = kalimatc2.innerHTML;kalimatc.style.opacity="1";fthilang();ftganti=2;setTimeout(ftmuncul,300);setTimeout(mulaict,400);}
  
  function otomatis3() {
    kalimat.style.opacity="0";
    kalimatb.style.opacity="0";
    kalimatc.style.opacity="0";

    setTimeout(function(){
        kalimat.innerHTML = "";
        kalimatb.innerHTML = "";
        kalimatc.innerHTML = "";

        var kal3 = kalimat3.innerHTML;
        var kal4 = kalimatb3.innerHTML;
        var kal5 = kalimatc3.innerHTML;
            
        kalimat.style.opacity="1";
        kalimatb.style.opacity="1";
        kalimatc.style.opacity="1";

        new TypeIt("#kalimat", {
          strings: ["" + kal3], startDelay: 1, speed: 30, cursor: true,
          afterComplete: function(){
            kalimat.innerHTML = kal3;
            setTimeout(function(){
              new TypeIt("#kalimatb", {
                strings: ["" + kal4], startDelay: 50, speed: 30, cursor: true,
                afterComplete: function(){
                  kalimatb.innerHTML = kal4;
                  setTimeout(function(){
                    fthilang();ftganti=4;setTimeout(ftmuncul,300);
                    new TypeIt("#kalimatc", {
                      strings: ["" + kal5], startDelay: 50, speed: 30, cursor: true,
                      afterComplete: function(){
                        kalimatc.innerHTML = kal5;
                        setTimeout(function(){
                            setInterval(berjatuhan,200);  
                            kalimatc.style.animation = "jj 1.1s infinite alternate";
                            setTimeout(sbakhir,300);
                        },200);
                    },}).go();
                  },200);
              },}).go();
            },200);
        },}).go();
    },200);
  } 
  
  function sbakhir(){Bn.style.display="none";tmbl.innerHTML="💌 Balas";Tombol.style="margin-top:10px;opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function diterima(){
    pesanTolak.style.display="none";
    fthilang();ftganti=1;
    setTimeout(ftmuncul,300);
    Bn2.style.display="none";
    wallpaper.style="transform: scale(1)";
    bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;border-radius:var(--bingkai);margin-top:0;";
    Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
    otomatis2();
   }

  flag=1;flagg=1;
  function ditolak(){
  	if(fungsi==1){
        pesanTolak.style.opacity="1";
        pesanTolak.style.transform="scale(1)";
        pesanTolak.style.position="relative";
        pesanTolak.style.marginTop="10px";
  	    if(flagg==1){
            Bn.style="margin:12px 0 12px 12px;cursor:default;opacity:0;transition:all 0s ease;";
            flagg=2;
            Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 0 12px 140px;"
        }
  	}
   }
  function ditolak2(){
  	if(fungsi==1){
  	if(flagg==2){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:190px 0 12px 12px;";flagg=3}
  	    else if(flagg==3){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 160px 12px 12px;";flagg=4}
  		else if(flagg==4){Bn2.style="transition:all .3s ease;margin:12px 0 12px 12px;";Bn.style="margin:12px 0 12px 12px";flagg=1}
  	    }
   }

  function mulaict(){
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
      fthilang();ftganti=3;
      setTimeout(ftmuncul,300);otomatis3();
      }
    },1000);
  }

  /* Hati Berjatuhan */
  function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
  }
  
  setInterval(function() {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
      heartArr[0].remove();
    }
  }, 100);