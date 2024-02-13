let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('pregunta').style.display = 'none';
  document.getElementById('respuesta').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡YA ESTAMOS CASADOS!';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 2000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 3000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 4000);
    
  
});



document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        
        case 0:
        
     document.getElementById('question').style.display = 'none';
     document.getElementById('pregunta').style.display = 'none';
     document.getElementById('respuesta').style.display = 'none';
        
        document.getElementById('noBtn').innerHTML = 'Estas seguro??';
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('sadGifContainer').style.display = 'block';
        

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 50px';
        
 

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
  
            document.getElementById('noBtn').innerHTML = 'Estare muy triste si sigues diciendo que no';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
      case 2:
           
            document.getElementById('noBtn').innerHTML = 'MMMM YA DI QUE SI ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '130px';
            document.getElementById('siBtn').style.padding = '150px 200px';
          
            noButtonState++;
            break;
        case 3:
            // Primera vez haciendo clic en "No"
            document.getElementById('noBtn').innerHTML = 'YA NO TIENES OPCION ';
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '150px';
            document.getElementById('siBtn').style.padding = '200px 250px';
          
            
           break;


        
    }
});