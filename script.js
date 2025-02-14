/* Archivo: script.js */

// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las diapositivas y puntos del slider
    const slides = document.querySelectorAll('.slide'); // Obtiene todas las diapositivas
    const dots = document.querySelectorAll('.dot'); // Obtiene todos los indicadores (puntos)
  
    let currentSlide = 0; // Índice de la diapositiva actual
    const slideIntervalTime = 5000; // Tiempo de espera entre cambios (5000 ms = 5 segundos)
    let slideInterval; // Variable para almacenar el intervalo de cambio automático
  
    // Función para mostrar una diapositiva basada en el índice
    function showSlide(index) {
      // Ajusta el índice si se sale del rango de diapositivas
      if (index < 0) {
        currentSlide = slides.length - 1; // Si es menor que 0, muestra la última diapositiva
      } else if (index >= slides.length) {
        currentSlide = 0; // Si excede el número de diapositivas, vuelve a la primera
      } else {
        currentSlide = index; // Si el índice es válido, lo asigna
      }
  
      // Oculta todas las diapositivas y quita la clase 'active' de cada punto
      slides.forEach((slide) => slide.classList.remove('active')); // Quita la clase activa de todas las diapositivas
      dots.forEach((dot) => dot.classList.remove('active')); // Quita la clase activa de todos los indicadores
  
      // Muestra la diapositiva y activa el indicador correspondiente
      slides[currentSlide].classList.add('active'); // Agrega la clase 'active' a la diapositiva actual
      dots[currentSlide].classList.add('active'); // Agrega la clase 'active' al punto correspondiente
    }
  
    // Función para avanzar a la siguiente diapositiva
    function nextSlide() {
      showSlide(currentSlide + 1); // Incrementa el índice y muestra la siguiente diapositiva
    }
  
    // Función para retroceder a la diapositiva anterior
    function prevSlide() {
      showSlide(currentSlide - 1); // Decrementa el índice y muestra la diapositiva anterior
    }
  
    // Evento de clic para la flecha de siguiente
    document.querySelector('.next').addEventListener('click', () => {
      nextSlide(); // Muestra la siguiente diapositiva
      resetInterval(); // Reinicia el intervalo de cambio automático
    });
  
    // Evento de clic para la flecha de anterior
    document.querySelector('.prev').addEventListener('click', () => {
      prevSlide(); // Muestra la diapositiva anterior
      resetInterval(); // Reinicia el intervalo de cambio automático
    });
  
    // Evento de clic para cada punto indicador
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index); // Muestra la diapositiva correspondiente al punto clicado
        resetInterval(); // Reinicia el intervalo de cambio automático
      });
    });
  
    // Función para iniciar el intervalo de cambio automático de diapositivas
    function startInterval() {
      slideInterval = setInterval(nextSlide, slideIntervalTime); // Cambia a la siguiente diapositiva cada 5 segundos
    }
  
    // Función para reiniciar el intervalo cuando el usuario interactúa con el slider
    function resetInterval() {
      clearInterval(slideInterval); // Detiene el intervalo actual
      startInterval(); // Inicia un nuevo intervalo
    }
  
    // Inicializa el slider mostrando la primera diapositiva y comenzando el cambio automático
    showSlide(currentSlide); // Muestra la diapositiva inicial
    startInterval(); // Inicia el intervalo de cambio automático
  });
  