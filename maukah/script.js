tekspalingakhir = "Jangan lupa balas pesan<br>ke WhatsApp aku ya!";
  
pesanwhatsapp = "Aku mau kok jadi pacar kamu ><";

const body = document.querySelector("body"); initom.style="opacity:0;bottom:0;transition:none"; audio = new Audio('' + linkmp3.src); 

initeksnimasi = teksnimasi.innerHTML;teksnimasi.innerHTML="";
function katateksnimasi(){
  	new TypeIt("#teksnimasi", {
      strings: ["" + initeksnimasi], startDelay: 50, speed: 37, cursor: true,
      afterComplete: function(){
      	teksnimasi.innerHTML = initeksnimasi;
          setTimeout(smn,200);
      },}).go();
}

fungsi=0;fungsiklik=0;skrg=1;
function tes(){
  if(fungsi==0){
    //playaud();
    initom.style="opacity:0;bottom:0;";
    window.scrollBy({top: tinggi,behavior: 'smooth'});
    fungsi = 1;
    skrg++;
    wallpaper.style="transform:scale(2);opacity:0";
    setTimeout(function(){wallpaper.style=""},600);
    
    
    document.querySelectorAll('.scale1').forEach(function(element) {
        element.classList.remove("scale1");
        element.classList.add("scale0");
        setTimeout(function(){element.classList.remove("scale0");
        element.classList.add("scale1");},500);
    });

    
    if(skrg<=2){setTimeout(smn,700);}
    if(skrg==3){setTimeout(katateksnimasi,500);}
    if(skrg==4){setTimeout(muncultombol,1200);}
  }
}
  function smn(){fungsi=0;initom.style="";}
  initom.style="opacity:0;bottom:0;transition:none";

  function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  
function aksiakhir() {
  if(fungsiklik==0){
    //wpakhir.style="opacity:.75;transition:all 1s ease;";
    fungsiklik=1;
    setTimeout(katajudul,100)
  }
}

function katajudul(){
  	new TypeIt("#judulakhir", {
      strings: ["" + teksjudulakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	judulakhir.innerHTML = teksjudulakhir;
          setTimeout(function(){
          	judulakhir.style="opacity:0;transform:scale(0);";
              stikerakhir.style="opacity:0;transform:scale(0)";
              setTimeout(teksmuncul,400);
          },700);
         
      },}).go();
}
function katakata(){
	  new TypeIt("#kalimatakhir", {
      strings: ["" + tekskalimatakhir], startDelay: 50, speed: 37, cursor: true,
      afterComplete: function(){
      	kalimatakhir.innerHTML = tekskalimatakhir;
      },}).go();
}
function teksmuncul(){
	judulakhir.innerHTML=teksjudulakhir2;
	judulakhir.style="font-family:var(--gaya-font3);font-size:33px";
	setTimeout(katakata,300);
	
	gantifotoakhir();
	setInterval(berjatuhan,200);
}
function jjteksnim(){judulakhir.style.animation="rto .8s infinite alternate";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
function kataakhir(){
	  new TypeIt("#palingakhir", {
      strings: ["" + tekspalingakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	palingakhir.innerHTML = tekspalingakhir;
          setTimeout(muncultombol2,500);
      },}).go();
}
function muncultombol2(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function menuju(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}}

tinggi = iniakhir.offsetHeight;
function tentukantinggi(){tinggi = iniakhir.offsetHeight;}
setInterval(tentukantinggi,200);
console.log(tinggi);

fungsiAud=0;function playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}

const swals = Swal.mixin({allowOutsideClick: false});
function keatas(){window.scrollTo(0, 0);}

async function mulaip(){
    await swals.fire({title: 'Aloo Kamuu! 💐'});
    playaud();
    setTimeout(function(){
    window.scrollTo(0, 0);
    setTimeout(keatas,500);
    
    document.querySelectorAll('.scale0').forEach(function(element) {
    element.classList.add("scale1");
});

    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    initom.style="";
    }, 500);
} mulaip();

document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            initom.style="opacity:0;bottom:0";
            setTimeout(aksiakhir,10);
        } else {
            //initom.style="";
        }
    })
    
//////////////////////////////////////////////////

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
