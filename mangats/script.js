kecepatan = 27;kecepatan2=30;ftganti=0;fungsi=0;ftfungsi=0;fungsiAwal=0;fungsitimer=0;deffotostiker=fotostiker.src;Content.style = "opacity:1;margin-top:30vh;";wallpaper.style="opacity:1";
  audio = new Audio('' + linkmp3.src);

  document.getElementById("loveIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;loveIn.style="transition:all .7s ease;opacity:0";ket.style="opacity:0";kot.style="opacity:0";setTimeout(mulainama,500)}}

  async function mulainama() {
           loveIn.style="display:none";ket.style="display:none";kot.style="display:none";
           Content.style = "opacity:1;margin-top:7vh";
           bodyblur.style="opacity:.6";
           
           fotostiker.style="display:inline-flex;";
           setTimeout(ftmuncul,200);
           setTimeout(bqmuncul,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker2.src;}
    if(ftganti==2){fotostiker.src = fotostiker3.src;}
    if(ftganti==3){fotostiker.src = fotostiker4.src;}
    if(ftganti==4){fotostiker.src = fotostiker5.src;}
    if(ftganti==5){fotostiker.src = fotostiker6.src;}
    if(ftganti==6){fotostiker.src = fotostiker7.src;}
    if(ftganti==7){fotostiker.src = fotostiker8.src;}
    if(ftganti==8){fotostiker.src = fotostiker9.src;}
    if(ftganti==9){fotostiker.src = fotostiker10.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";setInterval(berjatuhan,200);}
  
  function kethalo(){
  new TypeIt("#halo", {
  strings: ["" + vketikhalo], startDelay: 50, speed: 30, waitUntilVisible: true,
  afterComplete: function(){
    halo.innerHTML = vketikhalo;
    setTimeout(bqmuncul,200);
  },}).go();
  }
  
  function akhiran(){
  bqhilang();fthilang();ftganti=6;setTimeout(ftmuncul,400);
  //halo.style="display:none";
  setTimeout(akhiran2,300);
  }
  function akhiran2(){
  bq.style="border:0;background:none;box-shadow:none";kalimat.innerHTML="";
  setTimeout(bqmuncul2,200);
  }
  
  //vakhiran=akhiranteks.innerHTML;akhiranteks.innerHTML = "";
  function ketAkhir(){
  new TypeIt("#kalimat", {
  strings: ["" + vakhiran], startDelay: 50, speed: 55, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = vakhiran;
    setTimeout(munculbwh,400);
    setInterval(berjatuhan,400);
  },}).go();
  }
  
  //defkalbawah = kalbawah.innerHTML;
  function munculbwh(){kalbawah.innerHTML=defkalbawah;setTimeout(munculbwh2,1500);otomatis();}
  function munculbwh2(){kalbawah.innerHTML=kalbawah2.innerHTML;setTimeout(munculbwh3,1500);otomatis();}
  function munculbwh3(){kalbawah.innerHTML=kalbawah3.innerHTML;setTimeout(munculbwh,1500);otomatis();}
  
  function otomatis() {kalbawah.style="position:relative;opacity:0;transform:scale(.3);";setTimeout(anim,300);} 
  function anim() {kalbawah.style="position:relative;opacity:1;transform:scale(1);";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:15px";setTimeout(mulaiketik1,200);fungsi=1;}
  
  function bqhilang(){bodyblur.style="opacity:.3";bq.style = "position:relative;margin-top:15px;transition:all .7s ease;";kalimat.style="opacity:0;transform:scale(.3);";}
  function bqmuncul2(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0;border:0;background:none;box-shadow:none;padding:10px 27px;text-align:left";kalimat.style="opacity:1;transform:scale(1);font-size:13px;font-weight:300";setTimeout(ketAkhir,500);}
  function otokal() {kalimat.style="opacity:0;transform:scale(.3);";setTimeout(anikal,200);} 
  function anikal() {if (opsLcheck !== jumlahP) {setTimeout(otopsL,700);kalimat.style="opacity:1;transform:scale(1);";} else {setInterval(berjatuhan,400);kalimat.style="opacity:1;transform:scale(1.2);";}}
  
  const progressBar = document.getElementById('progress-bar');
  var totalTime = 2700;
  let currentTime = 0;
  function updateProgressBar() {
        currentTime += 100;
        const progress = ((totalTime - currentTime) / totalTime) * 100;
        progressBar.style.width = progress + '%';

        if (currentTime >= totalTime) {
          clearInterval(setInterval(updateProgressBar, 100));
          setTimeout(myCheck,100);
          
        }
      }
  
  function otopsL(){/*opsL.style.opacity=".8";*/opsLclick=1;}
  function wpcheck(){if(opsLcheck % 2 == 0){wallpaper.style="transform: scale(1.5);";} else {wallpaper.style="transform: scale(1);";}}
  function prbhn(){if (opsLcheck == jumlahP - 1) {kalimat.style = "font-size:13px";kecepatan=kecepatan2;var prg = document.getElementById("kalimat");prg.classList.add("kiri");}}
  
  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";fungsi=1}
  //document.getElementById("By").onclick = function() {if(fungsi==1){menuju();}}
  async function menuju(){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
  strings: [vketik1], startDelay: 50, speed: kecepatan, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = vketik1;
    if (opsLcheck !== jumlahP) {setInterval(updateProgressBar, 100);opsLclick=1;/*otopsL();*/} else {ftganti += 1;fthilang();setTimeout(ftmuncul, 300);setInterval(berjatuhan,200);}
  },}).go();
  }
  
  const jumlahP = document.querySelectorAll("#bq p").length - 1;
  var kalimatElements = document.querySelectorAll('[id^="kalimat"]');
  var kalimatList = {};

  kalimatElements.forEach(function(element, index) {
    if (element.id !== "kalimat") {
      kalimatList[index] = element.innerHTML;
    }
  });

  opsLclick=0;opsLcheck=1;ftganti=0;
  //document.getElementById("bq").addEventListener("click", myCheck);
  
  function myCheck() {

  if(opsLclick==1){
  if (opsLcheck !== jumlahP) {
    
    if(document.getElementById("kalimat" + opsLcheck + "ngetik")){
        vketik1 = kalimatList[opsLcheck];
        prbhn();mulaiketik1();
    } else {
        teksganti = kalimatList[opsLcheck];
        otokal();
        kalimat.innerHTML = teksganti;
    }
    
    ftganti += 1;fthilang();setTimeout(ftmuncul, 300);
    opsLcheck+=1;//wpcheck();
    
    if (opsLcheck !== jumlahP) {
    setTimeout(function(){
    	currentTime = 0;
        const progress = ((totalTime - currentTime) / totalTime) * 100;
        progressBar.style.width = progress + '%';  
    }, 400);
    }
  } else {
    //akhiran();
  }
  //opsL.style.opacity="0";
  opsLclick=0;
  }
  
  }
  
//////////////////////////////////////////////////

const body = document.querySelector("body");
function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(function () {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
      heartArr[0].remove();
    }
}, 100);

//////////////////////////////////////////////////
