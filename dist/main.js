!function(){"use strict";!function(){var t=class{constructor(t,e){let{x:s,y:i}=t;this.ctx=e,this.plateformImage=new Image,this.position={x:s,y:i},this.width=250,this.height=150,this.plateformImage.src="https://raw.githubusercontent.com/nvega23/gravity-guy/main/images/Pads/pad1.png"}draw(){this.ctx.drawImage(this.plateformImage,this.position.x,this.position.y,this.width,this.height)}update(){this.ctx.draw(),this.ctx.update()}},e=class{constructor(t,e,s,i){this.ctx=i,this.gameSpeed=s,this.x=0,this.y=0,this.width=600,this.height=600,this.x2=this.width,this.image=t,this.speedModifier=e,this.speed=this.gameSpeed*this.speedModifier}update(){this.speed=this.gameSpeed*this.speedModifier,this.x<=-this.width&&(this.x=this.width+this.x2-this.speed),this.x2<=-this.width&&(this.x2=this.width+this.x-this.speed),this.x=Math.floor(this.x-this.speed),this.x2=Math.floor(this.x2-this.speed)}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height),this.ctx.drawImage(this.image,this.x2,this.y,this.width,this.height)}};class s{constructor(t,e,s){this.gameframe=0,this.ctx=t,this.CANVAS_WIDTH=e,this.CANVAS_HEIGHT=s,this.spriteWidth=150,this.spriteHeight=150,this.width=525,this.height=725,this.position={x:-500,y:-150},this.velocity={x:0,y:0},this.gravity=2,this.speed=0,this.maxSpeed=10}update(t){this.draw(),this.position.x+=5}draw(t){const e=[];[{name:"idle",frames:4},{name:"run",frames:2},{name:"jump",frames:7},{name:"fall",frames:7},{name:"standup",frames:7},{name:"sword",frames:7},{name:"slash",frames:7},{name:"slashMoveRight",frames:7},{name:"prepareAttack",frames:7},{name:"hit",frames:7},{name:"dash",frames:2}].forEach(((t,s)=>{let i={loc:[]};for(let e=0;e<t.frames;e++){let t=e*this.spriteWidth,h=s*this.spriteHeight;i.loc.push({x:t,y:h})}e[t.name]=i}));const s=new Image;s.src="./images/blackHole.png";let i=Math.floor(this.gameframe/4)%e.run.loc.length,h=this.spriteWidth*i,a=e.run.loc[i].y;this.ctx.drawImage(s,h,a,this.spriteWidth,this.spriteHeight,this.position.x,this.position.y,this.width,this.height),this.gameframe++}onGround(){return this.y>=this.game.height-this.height}}var i=s;new s;document.addEventListener("DOMContentLoaded",(()=>{const s=document.querySelector("canvas"),h=s.getContext("2d"),a=s.width=600,r=s.width=600,n=document.getElementById("hud"),o=document.getElementById("start"),c=document.getElementById("endGame"),d=document.getElementById("gravity"),l=document.getElementById("output"),y=document.getElementById("play"),p=document.getElementById("pause");let x=new Audio;x.src="./src/audio/2.mp3",x.volume=.08,y.addEventListener("click",(()=>{x.play()})),p.addEventListener("click",(()=>{x.pause()})),o.addEventListener("click",(()=>{s.classList.remove("hidden"),new class{constructor(e,s,h){this.CANVAS_WIDTH=s,this.CANVAS_HEIGHT=h,this.scrollOffset=0,this.ctx=e,this.player=new class{constructor(t,e,s,i){this.gameframe=0,this.ctx=e,this.CANVAS_WIDTH=s,this.CANVAS_HEIGHT=i,this.spriteWidth=50,this.spriteHeight=38,this.game=t,this.width=125,this.height=125,this.position={x:100,y:370},this.velocity={x:0,y:0},this.gravity=2,this.image=document.getElementById("player"),this.speed=0,this.maxSpeed=10}update(t){this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=this.CANVAS_HEIGHT&&(this.velocity.y+=this.gravity)}draw(t){const e=[];[{name:"idle",frames:7},{name:"run",frames:7},{name:"jump",frames:7},{name:"fall",frames:7},{name:"standup",frames:7},{name:"sword",frames:7},{name:"slash",frames:7},{name:"slashMoveRight",frames:7},{name:"prepareAttack",frames:7},{name:"hit",frames:7},{name:"dash",frames:2}].forEach(((t,s)=>{let i={loc:[]};for(let e=0;e<t.frames;e++){let t=e*this.spriteWidth,h=s*this.spriteHeight;i.loc.push({x:t,y:h})}e[t.name]=i}));const s=new Image;s.src="./images/adventurer-Sheet.png",(new Image).src="./images/blackHole.png";let i=Math.floor(this.gameframe/7)%e.run.loc.length,h=this.spriteWidth*i,a=e.run.loc[i].y;this.ctx.drawImage(s,h,a,this.spriteWidth,this.spriteHeight,this.position.x,this.position.y,this.width,this.height),this.gameframe++}onGround(){return this.y>=this.game.height-this.height}}(this,e,s,h),this.blackHole=new i(e,s,h),this.score=0,this.gameSpeed=5,this.backgroundlayer1=new Image,this.backgroundlayer1.src="./images/nature.jpg",this.backgroundlayer2=new Image,this.backgroundlayer2.src="./images/nature.jpg",this.backgroundlayer3=new Image,this.backgroundlayer3.src="./images/nature.jpg",this.backgroundlayer4=new Image,this.backgroundlayer4.src="./images/nature.jpg",this.platforms=[new t({x:0,y:500},this.ctx),new t({x:0,y:-31},this.ctx),new t({x:200,y:500},this.ctx),new t({x:500,y:350},this.ctx),new t({x:800,y:-31},this.ctx),new t({x:1e3,y:-31},this.ctx),new t({x:1500,y:-31},this.ctx),new t({x:1500,y:500},this.ctx),new t({x:1300,y:500},this.ctx),new t({x:1800,y:350},this.ctx),new t({x:2150,y:500},this.ctx),new t({x:2150,y:-31},this.ctx),new t({x:2400,y:-31},this.ctx),new t({x:2500,y:350},this.ctx),new t({x:2500,y:-31},this.ctx),new t({x:2600,y:-31},this.ctx),new t({x:2800,y:500},this.ctx),new t({x:3e3,y:500},this.ctx),new t({x:2500,y:-31},this.ctx),new t({x:2500,y:500},this.ctx),new t({x:2300,y:500},this.ctx),new t({x:2500,y:350},this.ctx)],this.keys={right:{pressed:!1},left:{pressed:!1},space:{pressed:!1}},this.animate=this.animate.bind(this),this.animate(),this.bindKeys()}bindKeys(){window.addEventListener("keydown",(t=>{let{keyCode:e}=t;switch(e){case 68:this.player.velocity.x=1,this.keys.right.pressed=!0;break;case 65:this.keys.left.pressed=!0,this.player.velocity.x=-1;break;case 87:this.player.velocity.y-=20;break;case 83:this.player.velocity.y+=20;break;case 32:this.keys.space.pressed=!0,this.player.velocity.y=-20}})),window.addEventListener("keyup",(t=>{let{keyCode:e}=t;switch(e){case 68:this.keys.right.pressed=!1,this.player.velocity.x=0;break;case 65:this.keys.left.pressed=!1,this.player.velocity.x=0;break;case 87:this.player.velocity.y-=20;break;case 83:this.player.velocity.y+=20;break;case 32:this.keys.space.pressed=!1,this.player.gravity=0}}))}reset(){[this.player.position.x,this.player.position.y]=[100,320],this.platforms=[new t({x:0,y:500},this.ctx),new t({x:0,y:-31},this.ctx),new t({x:200,y:500},this.ctx),new t({x:500,y:350},this.ctx),new t({x:800,y:-31},this.ctx),new t({x:1e3,y:-31},this.ctx),new t({x:1500,y:-31},this.ctx),new t({x:1500,y:500},this.ctx),new t({x:1300,y:500},this.ctx),new t({x:1800,y:350},this.ctx),new t({x:2150,y:500},this.ctx),new t({x:2150,y:-31},this.ctx),new t({x:2400,y:-31},this.ctx),new t({x:2500,y:350},this.ctx),new t({x:2500,y:-31},this.ctx),new t({x:2600,y:-31},this.ctx),new t({x:2800,y:500},this.ctx),new t({x:3e3,y:500},this.ctx),new t({x:2500,y:-31},this.ctx),new t({x:2500,y:500},this.ctx),new t({x:2300,y:500},this.ctx),new t({x:2500,y:350},this.ctx)],this.blackHole.position.x=-500,this.scrollOffset=0}animate(){this.ctx.clearRect(0,0,this.CANVAS_HEIGHT,this.CANVAS_WIDTH);const t=new e(this.backgroundlayer1,1,this.gameSpeed,this.ctx),s=new e(this.backgroundlayer2,1,this.gameSpeed,this.ctx),i=new e(this.backgroundlayer3,1,this.gameSpeed,this.ctx),h=new e(this.backgroundlayer4,1,this.gameSpeed,this.ctx);t.update(),t.draw(),s.update(),s.draw(),i.update(),i.draw(),h.update(),h.draw(),this.platforms.forEach((t=>{t.draw()})),this.player.position.y>=600&&this.reset(),this.blackHole.update(),this.player.update();const a=requestAnimationFrame(this.animate);this.keys.right.pressed&&this.player.position.x<100?this.player.velocity.x=5:this.keys.left.pressed&&this.player.position.x>100?this.player.velocity.x=-5:this.keys.space.pressed&&this.player.position.x>100?this.player.velocity.y+=10:(this.player.velocity.x=0,this.keys.right.pressed?(this.scrollOffset+=5,this.platforms.forEach((t=>{t.position.x-=5})),this.blackHole.position.x-=5):this.keys.left.pressed?(this.scrollOffset-=5,this.platforms.forEach((t=>{t.position.x+=5})),this.blackHole.position.x+=5):this.keys.right.pressed&&(this.scrollOffset+=5,this.platforms.forEach((t=>{t.position.x-=5})),this.blackHole.position.x-=5));const r=this.blackHole.width/2+this.blackHole.position.x;this.player.position.x<=r&&this.reset(),this.platforms.forEach((t=>{this.player.position.x<=t.position.x+(t.width-45)&&this.player.position.x+this.player.width>=t.position.x&&this.player.position.y<t.position.y+(t.height-10)&&this.player.position.y+this.player.height>=t.position.y&&(this.player.velocity.y=0,this.player.velocity.x=0)})),this.scrollOffset>=3100&&(this.score=this.scrollOffset,document.getElementById("win").style.display="block",cancelAnimationFrame(a)),this.scrollOffset>=0?(this.score=this.scrollOffset,document.getElementById("output").innerHTML=this.score):this.score=0}}(h,a,r),o.classList.add("hidden"),console.log("play working"),n.classList.add("hidden"),d.classList.remove("hidden"),l.classList.remove("hidden"),c.classList.remove("hidden")})),c.addEventListener("click",(()=>{console.log("end game working"),s.classList.add("hidden"),o.classList.add("hidden"),n.classList.remove("hidden"),l.classList.remove("hidden"),d.classList.add("hidden")}))}))}()}();
//# sourceMappingURL=main.js.map