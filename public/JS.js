<script>
var a;
var b;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("BRANDED");
var id;
var canvasPosition=$('canvas').position();
var X=canvasPosition.left;
var Y=canvasPosition.top;
var x;
var y;
var v=0;
var background = new Image();
var count=0;
function addstamp(){
    var img1 = document.createElement("img");
    img1.crossOrigin = 'Anonymous';//改變權限
    img1.src = document.getElementsByName("stamp")[0].value;
    img1.id = count;
    document.body.appendChild(img1);
    document.body.appendChild(img1).onclick = function(){chose(this);};
    count++;
}
function submit(){
    background.src = document.getElementsByName("fname")[0].value;
    background.crossOrigin = 'Anonymous';//改變權限
    document.getElementById('myCanvas').height = background.height;
    document.getElementById('myCanvas').width = background.width;
    ctx.drawImage(background, 0, 0);
}
function chose(elmnt){
id = elmnt.id
img = document.getElementById(id);
h=img.clientHeight;
w=img.clientWidth;
}
function getcoords(event){
var h=img.clientHeight;
var w=img.clientWidth;
if(id=="ANT"){w=10;h=10;}
var x=(event.clientX-X+$(document).scrollLeft())-w/2;
var y=(event.clientY-Y+$(document).scrollTop())-h/2;
ctx.drawImage(img,x,y,w,h);
if(id=="ANT"){
setInterval(function(){
var img = document.getElementById("ANT");
var imgData = ctx.getImageData(x, y, w, h);
var t = Math.random();
t=t*839;
t=t%8;
t*13;
t=t%8;
t = parseInt(t);
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 0;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
ctx.putImageData(imgData, x, y);
        switch(t){
        case 0:
        if(v==0){break;}
        v=1;
	x=x+1;
	y=y+1;
            ctx.drawImage(img,x,y,w,h);
            break;
        case 1:
        if(v==1){break;}v=0;
	x=x-1;
	y=y-1;
            ctx.drawImage(img,x,y,w,h);            
            break;
        case 2:
        if(v==2){break;}v=3;
	x=x-1;
	y=y+1;
            ctx.drawImage(img,x,y,w,h);            
            break;
        case 3:
        if(v==3){break;}v=2;
	x=x+1;
	y=y-1;
            ctx.drawImage(img,x,y,w,h);            
            break;
            
        case 4:
        if(v==4){break;}v=5;
	x=x-1.4;
	y=y;
            ctx.drawImage(img,x,y,w,h);            
            break;
        case 5:
        if(v==5){break;}v=4;
	x=x+1.4;
	y=y;
            ctx.drawImage(img,x,y,w,h);            
            break;
        case 6:
        if(v==6){break;}v=7;
	x=x;
	y=y+1.4;
            ctx.drawImage(img,x,y,w,h);            
            break;
        case 7:
        if(v==7){break;}
        	v=6;
	x=x;
	y=y-1.4;
            ctx.drawImage(img,x,y,w,h);            
            break;
            
            }
        
        
    },10);}
}
function ant(element){
    $('canvas').css({
    'cursor': 'url(/pic/rectangle-stamp-heavy_grande.gif), default'});
    chose(element);
}
//用js宣告一個超連結
var link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
link.href = canvas.toDataURL();
link.download = "mypainting.png";
}, false);
document.body.appendChild(link);
</script>
