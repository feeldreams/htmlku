var teksSekarang = 1; var ftom = 0; var pesanwhatsapp = "Aku pilih nomor: "; const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src);
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
      },
      on: {
        slideChange: function () {
          var currentIndex = swiper.activeIndex;
          //var colors = [wallpaper2.src, wallpaper3.src, wallpaper4.src];
          //wallpaper.src = colors[currentIndex % colors.length];

          teksSekarang++;
          teksScale = document.querySelector('#teks' + teksSekarang);
          stikerScale = document.querySelector('#stiker' + teksSekarang);
          Tombol = document.querySelector('#Tombol');
          setTimeout(function () {
            teksScale.classList.add("scale1");
            stikerScale.classList.add("scale1");

            if (teksSekarang == 4) { katanimasi() }
          }, 50);
        },
      },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },
    });

    varteks = teks4.innerHTML; teks4.innerHTML = "";
    function katanimasi() {
      new TypeIt("#teks4", {
        strings: ["" + varteks], startDelay: 250, speed: 40, cursor: true,
        afterComplete: function () {
          clearInterval(scrollInterval);
          teks4.innerHTML = varteks;
          setInterval(berjatuhan, 200);
          stiker4.style = "transform:scale(0);opacity:0;transition:all .8s ease;margin-top:180px";
          setTimeout(function () {
            stiker4a.src = stiker4b.src;
            stiker4.style = "transition:all .8s ease;margin-top:180px";
            Tombol.style = "opacity:1;transform: scale(1);"; ftom = 1;
          }, 300);
        },
      }).go();
    }

    window.addEventListener("load", (event) => {
      window.scrollTo(0, 0);
      var overlay = document.querySelector(".loading-message");
      overlay.style.display = "none";
      var tomlv = document.querySelector(".blocklove");
      tomlv.style.display = "flex";
    });

    var sudahKlik = true;
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

    document.getElementById("loveIn").onclick = async function () {
      if (sudahKlik) {
        audio.play();

        document.querySelector(".overlay").style.display = "none";

        stiker1.classList.add("scale1");
        teks1.classList.add("scale1");
      } else {
        sudahKlik = true; // Tandai bahwa tombol sudah diklik
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
      }
    }

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

    const scrollContainer = document.getElementById("scroll-container");
    const textContainer = document.getElementById("textsec2");

    function autoScroll() {
      scrollContainer.scrollTop += 10;
    }
    const swals = Swal.mixin({ allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 90, imageHeight: 100, });
    const scrollInterval = setInterval(autoScroll, 50);
    async function jawab() { await swals.fire('Kirim jawabannya<br>ke WhatsApp aku, ya! 😆'); window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp; }
