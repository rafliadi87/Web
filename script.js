document.addEventListener( "DOMcontentLoaded",function (){
const downloadButton = document.getElementById
("downloadButton");

downloadButton.addEventListener ("click", function (){
    const cvPath = "Beige dan Coklat Minimalis Sederhana Lulusan Baru Resume.pdf";

    const link = document.createElement ("a");
    link.herf = cvPath;

link.download = "Beige dan Coklat Minimalis Sederhana Lulusan Baru Resume.pdf";

document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});
})