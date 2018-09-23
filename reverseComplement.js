const canvas = document.getElementById('bgd-anime');
const body = document.querySelector('body')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.setAttribute('style', 'background-color: silver;')
const ctx = canvas.getContext('2d');
const colorArr = ['#020F6E', '#1261B2', '#B6D6F2', '#E5E5E5', '#BA292D'];


function Nucleotide() {
    this.x = Math.random() * (innerWidth - 30) + 15;
    this.y = Math.random() * (innerHeight - 30) + 15;
    this.fontSize = Math.random() * (15 - 10) + 10;
    this.textColor = colorArr[Math.floor(Math.random() * colorArr.length)]

    this.draw = function(){
        ctx.font = this.fontSize + 'px Lato, sans-serif';
        ctx.fillStyle = this.textColor;
        // ctx.fillText('A', 200, 200);
        ctx.translate(this.x, this.y);
        ctx.rotate(2 * Math.PI / -4);
        ctx.fillText('A', 0, 0);
        ctx.restore();
    }


}

const n = new Nucleotide();
n.draw();
