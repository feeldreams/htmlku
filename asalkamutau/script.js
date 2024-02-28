const body = document.querySelector("body");const swalst = Swal.mixin({timer: 2500, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;function berjatuhan() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100);Content.style = "opacity:1;margin-top:14vh"; const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 80,}); 
iden = 1; //const iniwp = []; iniwp[1] = wallpaper1.src; wallpaper.src = iniwp[1]; iniwp[2] = wallpaper2.src; iniwp[3] = wallpaper3.src; iniwp[4] = wallpaper4.src; iniwp[5] = wallpaper5.src; iniwp[6] = wallpaper6.src; iniwp[7] = wallpaper7.src; iniwp[8] = wallpaper8.src;

inip[1] = "haiii,";
inip[2] = "aku cuma mau bilang";
inip[3] = "jika aku orang terburuk<br>yang kamu temui,";
inip[4] = "aku minta maaf,";
inip[5] = "asal kamu tau";
inip[6] = "kamu orang terbaik<br>dalam hidupku";
inip[7] = "jadi aku ingin kamu<br>selalu bahagia";
inip[8] = "walau itu tidak denganku :)";

pesanAkhir1 = inip[iden];
pesanAkhir3 = "<br>thank you, and i love uuu";

totalPesan = 8; //Input total pesan (slide) di sini ya!

document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,300);
        setTimeout(bqmuncul,500)
      }
    }

aktigeser=0;thisgeser=1;
document.getElementById("bq").onclick = function() {
  if(aktigeser==1){
    setTimeout(kalimatakhir,400);hsementara();
  }
}

  function hsementara(){
    ketlanjut.style="position:relative;";
    thisgeser+=1;aktigeser=0;
  }
  
  function munculkembali(){
    if(thisgeser<totalPesan){
      ketlanjut.style="position:relative;opacity:.8";
      aktigeser=1;
      iden += 1;
      pesanAkhir1 = inip[iden];
    }
    if(thisgeser==totalPesan){setTimeout(mulaiketikA,500);}
  }
  
  function aksiakhir(){
    setTimeout(bqmuncul,400);
  }
  
  function initengahan(){
    ftAwal.style="opacity:0;transform: scale(0);position:absolute;";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
  }
  
  function bqmuncul(){
      bq.style = "position:relative;opacity:1;visibility:visible;margin-top:20vh;transform: scale(1);";
      audio.play();
      setTimeout(kalimatakhir,7200);
      setTimeout(kalimatakhir,8100);
      setTimeout(kalimatakhir,9800);
      setTimeout(kalimatakhir,12300);
      setTimeout(kalimatakhir,13600);
      setTimeout(kalimatakhir,15000);
      setTimeout(kalimatakhir,17200);
      setTimeout(kalimatakhir,19600);
  }
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);";fungsi=1;}
  document.getElementById("By").onclick = function() {
    if(fungsi==1){Tombol.style="";menuju();fungsi=0;} 
  }
 
  var i = 1;function defwp(){wallpaper.style="transform: scale(1)";}
  function kalimatakhir(){
  	if(iden>=1){
          if(iden%2==0){wallpaper.style="transform: scale(1)";} else {wallpaper.style="transform: scale(1.5)";}
          //wallpaper.src = iniwp[iden];
      }
      kalimat.innerHTML="";
  	new TypeIt("#kalimat", {
      strings: ["" + pesanAkhir1], startDelay: 10, speed: 40, cursor: true,
      afterComplete: function(){
         kalimat.innerHTML = pesanAkhir1;
         iden += 1;
         pesanAkhir1 = inip[iden];
         if(pesanAkhir1==inip[totalPesan+1]){ftoAwal.src=ftoAkhir.src;ftAwal.style="margin-top:80px;transform: scale(.8);transition: all .8s ease";setTimeout(jjfoto,400);bq.style = "transition:none;position:relative;opacity:1;visibility:visible;margin-top:0;transform: scale(1);";}
         //munculkembali();
      },}).go();
  }
  
  function jjfoto(){ftoAwal.style.animation="jj 1s infinite alternate";}

  function mulaiketikA(){
  bodyblur.style.opacity=".15";
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhir3], startDelay: 100, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	 pesanAkhir.style.animation="rto .8s infinite alternate";
      //setTimeout(tombol,700);
  },}).go();
  }
  
  async function menuju(){
  var { value: jawaban } = await swals.fire({
    title: 'Isi Pesan Untukku &#128073;&#128072;', input: 'text', allowOutsideClick: false, showCancelButton: false,
  });
  if(jawaban && jawaban.length < 19){
    window.jawaban = jawaban;
    pesanwhatsapp = jawaban;
    await swals.fire('OK!', 'Kirim jawabannya ke WhatsApp aku, ya!', 'success');
    window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
    tombol();
  } else {
    await swals.fire('Ups!', 'Jawaban tidak boleh kosong atau lebih dari 18 karakter, ya!');jawab();
  }
}