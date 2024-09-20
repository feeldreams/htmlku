var teksSekarang = 1;const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
      },
      on: {
      slideChange: function () {
        //var currentIndex = swiper.activeIndex;
        //var colors = [wallpaper2.src, wallpaper3.src, wallpaper4.src];
        //wallpaper.src = colors[currentIndex % colors.length];

        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');
        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          
          if(teksSekarang == 3){setTimeout(function(){teksScale.classList.remove("scale1");stikerScale.classList.remove("scale1");teksScale.classList.add("scale0");stikerScale.classList.add("scale0");setTimeout(function(){calculator.style="display:flex";setTimeout(function(){calculator.classList.add("scale1");teksScale.style="display:none";stikerScale.style="display:none"},50);},550);}, 1400);}
        }, 50);
      },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    initeks = teksLoveU.innerText;
    teksLoveU.innerHTML = "";
    function katanimasi(){
	  new TypeIt("#screen", {
      strings: ["" + initeks], startDelay: 10, speed: 30, cursor: true,
      afterComplete: function(){
      	//clearInterval(scrollInterval);
      	screen.value = initeks;
          animateteksnim();
      	//setInterval(berjatuhan, 200);
      },}).go();
}

initeksAkhir = teksAkhir.innerHTML;
teksAkhir.innerHTML = "";
    function animteksakhir(){
      contentAkhir.classList.remove("sembunyi");
      teksAkhir.classList.remove("sembunyi");
	  new TypeIt("#teksAkhir", {
      strings: ["" + initeksAkhir], startDelay: 10, speed: 33, cursor: true,
      afterComplete: function(){
      	teksAkhir.innerHTML = initeksAkhir;
          setInterval(berjatuhan, 200);
      },}).go();
}

/* Teks Animasi Akhir */
function animateteksnim() {
	//const teksnim = document.getElementById('teksnim');
    // const loveEmojis = ['❤️', '💙', '💚', '💛', '💜'];
    const loveEmojis = Array.from(document.querySelector('#teksRandomEmoji').textContent).map(emot => `${emot}`);
    let percent = 1;
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 100) {
                percent++;
                const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                screen.value = `I Love U ${percent}% ${randomEmoji}`;
            } else {
                clearInterval(intervalId);
                //setInterval(berjatuhan, 250);
                ///
                const keys = document.querySelector('.calculator-keys');
			    keys.classList.add('hide');
			    
			    const screen = document.querySelector('.calculator-screen');
			    screen.style.backgroundColor = "unset";
                screen.style.transform = "scale(1.1)";
                screen.style.transition = "all .5s ease";
			    
			    setTimeout(() => {
			        keys.style.display = 'none';
                    stikerScale.style="";
                    calculator.style="display:flex;margin-top:0px;background-color:unset;box-shadow:unset;border:none;backdrop-filter: blur(0);-webkit-backdrop-filter: blur(0);";
                    setTimeout(animteksakhir, 300);
			    }, 200);
			
			    setTimeout(() => {
			        //keys.style.display = 'none';
                    //stikerScale.style="";
                    
                    //calculator.style="display:flex;margin-top:0px;background-color:unset;box-shadow:none;border:none;backdrop-filter: blur(0);-webkit-backdrop-filter: blur(0);";
                    
                    setTimeout(() => {
                        stiker3.classList.remove("scale0");
                        stiker3.classList.add("scale1");
                        //calculator.style="display:flex;margin-top:0px;background-color:unset;box-shadow:unset;border:none";
			        }, 200);
                    
			    }, 500);
                ///
                stiker3.classList.remove("scale1");
                stiker3.classList.add("scale0");
                setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src; stiker3.classList.remove("scale0");stiker3.classList.add("scale1");},300);
            }
        }, 40); // Speed 0-100%
    }, 10); // Delay
}

// Awalan
setTimeout(function(){
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
}, 100);

var sudahKlik = true;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
    audio.play();
    document.querySelector(".overlay").style.display = "none";
    
    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
    wallpaper.style="transform:scale(1)";
    
    screen.value = '';
} else {
    sudahKlik = true; // Tandai bahwa tombol sudah diklik
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
}
}

function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
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

const scrollContainer = document.getElementById("scroll-container");
  const textContainer = document.getElementById("textsec2");

function autoScroll() {
    scrollContainer.scrollTop += 10;
}

//const scrollInterval = setInterval(autoScroll, 50); 

        const screen = document.getElementById('screen');
        const buttons = document.querySelectorAll('.calculator-keys button');
        var aktif = true;
        buttons.forEach(button => {
            button.addEventListener('click', () => {
            	if(aktif==true){
                const value = button.textContent;

                if (value === '=') {
                	aktif=false;
                	setTimeout(katanimasi, 50);
                    screen.value = '';
                    screen.style="padding:0;text-align:center";
                } else if (value === 'C' || value === '( )') {
                    screen.value = '';
                } else {
                    screen.value += value + ' ';
                }

                button.classList.add('clicked');
                setTimeout(() => {
                    button.classList.remove('clicked');
                }, 150);
                }
            });
        });
