document.addEventListener("click", function (e) {
        const circle = document.createElement("div");
        circle.classList.add("click-effect");
        circle.style.left = `${e.pageX}px`;
        circle.style.top = `${e.pageY}px`;

        document.body.appendChild(circle);

        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    });

    audio = new Audio('' + linkmp3.src);

    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    envwrap.style="display:none";
    /*audio.addEventListener('progress', function() {
        var loadedPercentage = this.buffered.end(0); 
        overlay.style.display = 'flex';
        envwrap.style="transform:scale(0);opacity:0;transition:all .6s ease";
    });*/
	    
    //linkmp3.onloadeddata = function() { 
    setTimeout(()=>{
	    document.querySelector('.overlay').style.display = 'flex'; 
	    envwrap.style="transform:scale(0);opacity:0;transition:all .6s ease";
    }, 2000);
    const cover = document.querySelector('.cover');
    const reset = document.querySelector('.reset');
    const title = document.querySelector('.title');
    const container = document.getElementById('container');
    const stiker = document.querySelector('.stiker');
    const mainStiker = document.querySelector('#main-stiker');
    
        const envelope = document.getElementById('envelope');
        const btnOpen = document.getElementById('open');
        //const btnReset = document.getElementById('reset');
        reset.style="transform:scale(0);opacity:0;transition:all .6s ease";
        
        envelope.addEventListener('click', open);
        btnOpen.addEventListener('click', open);
        //btnReset.addEventListener('click', close);

        function open() {
        	audio.play();
            envelope.classList.remove("close");
            envelope.classList.add("open");
            reset.style="transform:scale(0);opacity:0;transition:all .6s ease";
            
            setTimeout(function(){
	        	envwrap.classList.add('opahidden');
		        wallpaper.style="transform: scale(1.5)";
		        setTimeout(function(){
			        container.classList.remove('hidden');
			        container.classList.add('opamuncul');
			        //stiker.classList.add('opamuncul');
			        //wallpaper.style="transform: scale(1)";
			        envwrap.classList.add('hidden');
			        //katanimasi();
			        setTimeout(() => { txtnimasi(vtext_1, "#message_1", 55); }, vtext_1_startfrom);
					setTimeout(() => { txtnimasi(vtext_2, "#message_2", 65); }, vtext_2_startfrom);
					setTimeout(() => { txtnimasi(vtext_3, "#message_3", 60); }, vtext_3_startfrom);
					setTimeout(() => { txtnimasi(vtext_4, "#message_4", 60); }, vtext_4_startfrom);
					setTimeout(() => { txtnimasi(vtext_5, "#message_5", 50, true); }, vtext_5_startfrom);
					setTimeout(() => { txtnimasi(vtext_6, "#message_6", 50); }, vtext_6_startfrom);
					setTimeout(() => { txtnimasi(vtext_7, "#message_7", 50); }, vtext_7_startfrom);
					setTimeout(() => { txtnimasi(vtext_8, "#message_8", 55, false, true); }, vtext_8_startfrom);
		        }, 700);
	        }, 1300);
        }

    document.querySelector(".awalan").onclick = async function() {
        overlay.style="opacity:0;transition:all .6s ease";
        cover.style="transform:scale(0);opacity:0;transition:all .6s ease";
        setTimeout(function(){
        	overlay.style.display="none";
            envwrap.style="transition:all .6s ease";
            reset.style="transition:all .6s ease";
            wallpaper.style="transform: scale(1)";
        }, 300);
    }
    
	function txtnimasi(text, target, spd, ganstik = false, done = false){
		stiker.classList.add('opamuncul');
        wallpaper.style="transform: scale(1)";
		if (ganstik){
	        stikerHidden();
	        setTimeout(() => {
	            mainStiker.src = stikerAlt1.src;
	         }, 300);
        }
             
        new TypeIt("" + target, {
        strings: text,
        startDelay: 1,
        speed: spd,
        cursor: true,
        afterComplete: function(){      
            let cursor = document.querySelector(target + " .ti-cursor");
		    if (cursor) {cursor.style.display = "none"}
            
            if (done){
	            setTimeout(function() {
		            setInterval(berjatuhan,300);
	                clearInterval(scrollInterval);
	            }, 1);
            }     
        },}).go();
    }
    
    function stikerHidden(){
    	stiker.style="transform:scale(0);opacity:0;";
        setTimeout(function(){stiker.style="transform:scale(1.1);opacity:1;";}, 300);
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
    
    function autoScroll() {container.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 50); 
