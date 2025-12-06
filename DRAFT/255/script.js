const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); function falling() {const heart = document.createElement("div");heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";heart.className = "heart-icon";heart.style.left = (Math.random() * 95) + "vw";heart.style.animationDuration = (Math.random() * 3) + 2 + "s";document.body.appendChild(heart);} setInterval(function() {var heartArr = document.querySelectorAll(".heart-icon");if (heartArr.length > 100) {heartArr[0].remove();}}, 100);

initeksnimasi = teksnimasi.innerHTML;teksnimasi.innerHTML="";
function katateksnimasi(){
  	new TypeIt("#teksnimasi", {
      strings: ["" + initeksnimasi], startDelay: 50, speed: 35, cursor: true,
      afterComplete: function(){
      	//teksnimasi.innerHTML = initeksnimasi;
		document.querySelector("#teksnimasi .ti-cursor").style.display = "none";
          setTimeout(smn,200);
      },}).go();
}

fungsi=0;fungsiklik=0;skrg=1;
function tes(){
  if(fungsi==0){
    playaud();
    initom.style="opacity:0;bottom:0;";
    window.scrollBy({top: tinggi,behavior: 'smooth'});
    fungsi = 1;
    skrg++;
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
    fungsiklik=1;
    stikerakhir.style="opacity:1;transform:scale(1)";
    setTimeout(katajudul,100)
  }
}

function katajudul(){
  	new TypeIt("#judulakhir", {
      strings: ["" + teksjudulakhir], startDelay: 10, speed: 50, cursor: true,
      afterComplete: function(){
      	//judulakhir.innerHTML = teksjudulakhir;
		  document.querySelector("#judulakhir .ti-cursor").style.display = "none";
          setTimeout(katakata,300);
      },}).go();
}
function katakata(){
	  new TypeIt("#kalimatakhir", {
      strings: ["" + tekskalimatakhir], startDelay: 50, speed: 48, cursor: true,
      afterComplete: function(){
      	//kalimatakhir.innerHTML = tekskalimatakhir;
		  document.querySelector("#kalimatakhir .ti-cursor").style.display = "none";
          judulakhir.style="opacity:0;transform:scale(0);";
          setTimeout(teksmuncul,350);
          setInterval(falling,200);
          setTimeout(kataakhir,1000);
      },}).go();
}
function teksmuncul(){
	judulakhir.innerHTML=teksjudulakhir2;
	judulakhir.style="font-family:var(--gaya-font3);font-size:27px";
	stikerakhir.style="opacity:0;transform:scale(0)";
	setTimeout(gantifotoakhir,400);
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
function pesanWA(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=" + nomorWa.innerHTML + "&text=" + pesanwhatsapp;}}
pesanwhatsapp = pesanWa.innerHTML;

let tinggi = iniakhir.offsetHeight;
console.log(tinggi);

fungsiAud=0;function playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}
var iniakhirya = 0;
function inimulai(){
    window.scrollTo(0, 0);
    
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    initom.style="";
    first_stiker.style="opacity:1;transition:all 2s ease";
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".show-once", { reset: false});
    ScrollReveal().reveal(".title", {duration: 2500,origin: "top",distance: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", rotate: { x: 20, z: -10 }});
    ScrollReveal().reveal(".fade-in", {delay: 200, duration: 2500,move: 0});
    ScrollReveal().reveal(".scaleUp", {duration: 2500, scale: 0.85});
    ScrollReveal().reveal(".flip", {delay: 200, duration: 2000, rotate: { x: 20, z: 20}});
    ScrollReveal().reveal(".slide-right", {duration: 1000,origin: "left",distance: "300px",easing: "ease-in-out"});
    ScrollReveal().reveal(".slide-up", {duration: 1500, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0, scale: 0.5});
    
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            console.log('Sudah sampai bawah!');
            initom.style="opacity:0;bottom:0";
            if(iniakhirya==0){
              iniakhirya=1;
              stikerakhir.style="opacity:0;transform:scale(0)";
              wpakhir.style="opacity:.3;transition:all .7s ease";
              setTimeout(() => {
                const cincin = document.createElement('img');
                cincin.src = nimasicincin.src;
                cincin.className = 'romance-img';
                document.body.appendChild(cincin);
                // Optional: Hilangkan cincin setelah 4 detik untuk transisi ke scroll berikutnya
                setTimeout(() => {
                  if (cincin) {
                    cincin.style.opacity = '0';
                    setTimeout(() => { if (cincin) cincin.remove();wpakhir.style="opacity:1;transition:all .7s ease";setTimeout(aksiakhir,10); }, 1000);
                  }
                }, 1500);
              }, 100);
            }
        }
    })
}

setTimeout(inimulai,1500)
