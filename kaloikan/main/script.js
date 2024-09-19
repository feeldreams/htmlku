var teksSekarang = 1; const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src);
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: false,
            },
            on: {
                slideChange: function () {
                    teksSekarang++;
                    teksScale = document.querySelector('#teks' + teksSekarang);
                    stikerScale = document.querySelector('#stiker' + teksSekarang);
                    Tombol = document.querySelector('#Tombol');
                    setTimeout(function () {
                        teksScale.classList.add("scale1");
                        stikerScale.classList.add("scale1");

                        if (teksSekarang == 4) {
                            setTimeout(function () {
                                teksScale.classList.remove("scale1");
                                stikerScale.classList.remove("scale1");
                                teksScale.classList.add("scale0");
                                stikerScale.classList.add("scale0");

                                setTimeout(function () { stikerAkhir1.src = stikerAkhir2.src; teks4.innerHTML = ""; }, 450);

                                setTimeout(function () {
                                    setTimeout(katanimasi, 300);
                                    teksScale.classList.remove("scale0");
                                    stikerScale.classList.remove("scale0");
                                    teksScale.classList.add("scale1");
                                    stikerScale.classList.add("scale1");
                                }, 550);
                            }, 2200);
                        }

                    }, 50);
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        initeks = teksJawaban.innerHTML;
        teksJawaban.innerHTML = "";
        function katanimasi() {
            teks4.innerHTML = "";
            new TypeIt("#teks4", {
                strings: ["" + initeks], startDelay: 10, speed: 30, cursor: true,
                afterComplete: function () {
                    //clearInterval(scrollInterval);
                    teks4.innerHTML = initeks;
                    animateteksnim();
                    //setInterval(berjatuhan, 200);
                },
            }).go();
        }

        /* Teks Animasi Akhir */
        function animateteksnim() {
            const loveEmojis = Array.from(document.querySelector('#teksRandomEmoji').textContent).map(emot => `${emot}`);
            let percent = 1;
            setTimeout(function () {
                const intervalId = setInterval(() => {
                    if (percent < 100) {
                        percent++;
                        const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                        teksLove.innerHTML = `Ilvyouuu ${percent}% ${randomEmoji}`;
                    } else {
                        clearInterval(intervalId);
                        const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                        teksLove.innerHTML = `Ilvyouuu <span style='color:yellow'>${percent}%</span> ${randomEmoji}`;
                        teksLove.style = "font-size:22px;transition:all .8s ease";
                        setInterval(berjatuhan, 250);

                        stiker4.classList.remove("scale1");
                        stiker4.classList.add("scale0");
                        setTimeout(function () { stikerAkhir1.src = stikerAkhir3.src; stiker4.classList.remove("scale0"); stiker4.classList.add("scale1"); }, 300);
                    }
                }, 40); // Speed 0-100%
            }, 10); // Delay
        }

        setTimeout(function () {
            var overlay = document.querySelector(".loading-message");
            overlay.style.display = "none";
            var tomlv = document.querySelector(".blocklove");
            tomlv.style.display = "flex";
        }, 2000);

        var sudahKlik = true;
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

        document.getElementById("loveIn").onclick = function () {
            if (sudahKlik) {
                audio.play();
                document.querySelector(".overlay").style.display = "none";

                stiker1.classList.add("scale1");
                teks1.classList.add("scale1");
                wallpaper.style = "transform:scale(1)";
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

    
