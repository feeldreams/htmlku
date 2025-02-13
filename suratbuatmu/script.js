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

    const overlay = document.querySelector('.overlay');
    const cover = document.querySelector('.cover');
    const reset = document.querySelector('.reset');
    const title = document.querySelector('.title');
    const container = document.getElementById('container');
    const titleC = document.querySelector('.titleC');
    const messageC = document.querySelector('.messageC');
    const stiker = document.querySelector('.stiker');
    const mainStiker = document.querySelector('#main-stiker');
    envwrap.style="transform:scale(0);opacity:0;transition:all .6s ease";
    audio = new Audio('' + linkmp3.src);
    
        const envelope = document.getElementById('envelope');
        const btnOpen = document.getElementById('open');
        //const btnReset = document.getElementById('reset');
        reset.style="transform:scale(0);opacity:0;transition:all .6s ease";
        
        envelope.addEventListener('click', open);
        btnOpen.addEventListener('click', open);
        //btnReset.addEventListener('click', close);

        function open() {
            envelope.classList.remove("close");
            envelope.classList.add("open");
            reset.style="transform:scale(0);opacity:0;transition:all .6s ease";
            
            setTimeout(function(){
	        	envwrap.classList.add('opahidden');
		        wallpaper.style="transform: scale(1.5)";
		        setTimeout(function(){
			        container.classList.remove('hidden');
			        container.classList.add('opamuncul');
			        stiker.classList.add('opamuncul');
			        wallpaper.style="transform: scale(1)";
			        envwrap.classList.add('hidden');
			        katanimasi();
		        }, 800);
	        }, 1500);
        }

    document.querySelector(".awalan").onclick = async function() {
        audio.play();

    	overlay.style="opacity:0;transition:all .6s ease";
        cover.style="transform:scale(0);opacity:0;transition:all .6s ease";
        setTimeout(function(){
        	overlay.style.display="none";
            envwrap.style="transition:all .6s ease";
            reset.style="transition:all .6s ease";
            wallpaper.style="transform: scale(1)";
        }, 300);
    }
    
    vjudul = document.querySelector('.titleC').innerHTML;
    titleC.innerHTML = "";
    vmessage = document.querySelector('.messageC').innerHTML;
    messageC.innerHTML = "";
    function katanimasi(){
		new TypeIt(".titleC", {
	    strings: [vjudul],
	    startDelay: 250,
	    speed: 27,
	    cursor: true,
	    afterComplete: function(){      
	      	//clearInterval(scrollInterval);
	      	titleC.innerHTML = vjudul;
	          setTimeout(() => {katanimasiAlts()}, 300);
	    },}).go();
	}
	
	function katanimasiAlt(){
		new TypeIt(".messageC", {
	    strings: [vmessage],
	    startDelay: 1,
	    speed: 30,
	    cursor: true,
	    afterComplete: function(){      
	      	clearInterval(scrollInterval);
	      	messageC.innerHTML = vmessage;
	          setTimeout(() => {
			    stikerHidden();
			    setTimeout(() => {
				    mainStiker.src = stikerAlt1.src;
			    }, 300);
			  }, 100);
	    },}).go();
	}

    function katanimasiAlts(){
        new TypeIt(".messageC", {
        strings: [
                    "─",
				    "<br>" + pesanSurat1.innerHTML,
                    "<br>" + pesanSurat2.innerHTML,
                    "<br>" + pesanSurat3.innerHTML,
				 ],
        startDelay: 1,
        speed: 28,
        cursor: true,
        breakLines: true,
        waitUntilVisible: true,
        afterStep: function(instance) {
            if (instance.is('completed')) {
                setTimeout(function() {
                    instance.next();
                }, 700);
            }
        },
        afterComplete: function(){      
            document.querySelector(".ti-cursor").style.display = "none";
            setTimeout(function() {
                clearInterval(scrollInterval);
            }, 1000);
            setTimeout(() => {
                stikerHidden();
                setTimeout(() => {
                   mainStiker.src = stikerAlt1.src;
                   //setInterval(berjatuhan,300);
                 }, 300);
             }, 100);
             
        },}).go();
    }
    
    function stikerHidden(){
    	stiker.style="transform:scale(0);opacity:0;";
        setTimeout(function(){stiker.style="transform:scale(1.1);opacity:1;";}, 300);
    }
    
    function autoScroll() {container.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 50); 
