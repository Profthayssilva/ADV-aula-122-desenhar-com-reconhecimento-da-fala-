// declarar as variáveis x e y
x = 0;
y = 0;
// a definir o status
drawCircle = "";
drawRect = "";

//  API de fala para texto
var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();


// para iniciar o reconhecimento de fala, vamos definir uma função como start
function start()
{
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale."; 
    recognition.start();
} 
 
// exibir o resultado na página HTML
recognition.onresult = function(event) {

 console.log(event); 

//  buscar o texto da transcrição que está dentro de 0, o código
// será event.results[0][0].transcript
var content = event.results[0][0].transcript;

// atualizar esse texto com o status 
   document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content; 
    
// desenhar circulo
   if(content =="círculo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        // atualizar o status
        document.getElementById("status").innerHTML = "Desenhando um círculo."; 
        // atualizar o valor da variável drawCircle
        drawCircle = "set";
      }

// desenhar retângulo
      if(content =="retângulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo."; 
        drawRect = "set";
      }
}

// criar uma tela
function setup() {
  canvas = createCanvas(900, 600);
}

// escrever o código para realmente desenhar a forma na tela
function draw() {
  if(drawCircle == "set")
  {
    // obter o raio do círculo
    radius = Math.floor(Math.random() * 100);
    // usar a função circle()
    circle(x, y, radius);
    // atualizar o ID de status da tag span para texto como “Círculo desenhado” 
    document.getElementById("status").innerHTML = "UCírculo desenhado. ";
    drawCircle = "";
  }
// da mesma forma fazer o retângulo
  if(drawRect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Retângulo desenhado. ";
    drawRect = "";
  }

}








