// scrollTop
// $(document).ready(function () {
//   $(window).scroll(function () {
//      if ($(this).scrollTop() > 200) {
//         $('#scrollTotop').addClass('showscroll');
//      } else {
//         $('#scrollTotop').removeClass('showscroll');
//      }
//   });

//   $('#scrollTotop').click(function () {
//      $(window).scrollTop(0);
//   });
// });

// Quiz

const questions = {
  men: [
    "Do you feel a lack of energy or fatigue despite adequate sleep?",
    "Have lost your stamina, sexual drive and performance?",
    "Have you lost strength, tone, and muscle mass?",
    "Have you gained weight, with increased body fat around your midsection?",
    "Do you feel old, grumpy, sad and frustrated?",
    "Have lost your confidence, assertiveness and initiative?",
    "Have you lost your focus, memory, concentration and mental sharpness?",
    "Are you experiencing any hair loss?",
    "Do you have difficulty losing weight and gaining lean muscle mass?",
    "Do you have muscle aches and joint pain?"
  ],
  women: [
    "Do you have mood swings, irritability, anxiety or depression?",
    "Have you gained weight and increased body fat around your midsection?",
    "Do you have difficulty losing weight and gaining lean muscle mass?",
    "Do you feel a lack of energy or fatigue?",
    "Do you have insomnia?",
    "Do you have low sex drive?",
    "Do you have moderate or severe emotional Stress?",
    "Do you have night sweats, hot flashes, and vaginal dryness?",
    "Do you have hair loss or thinning?",
    "Do you have excessive facial or body hair?"
  ]
};

let selectedGender = '';
let currentQuestion = 0;
const answers = [];

function startQuiz(gender) {
  selectedGender = gender;
  currentQuestion = 0;
  answers.length = 0;

  // Hide both gender sections
  document.getElementById('menSection').style.display = 'none';
  document.getElementById('womenSection').style.display = 'none';

  // Show quiz container
  document.getElementById('quizContainer').classList.remove('d-none');

  showQuestion();
}

function showQuestion() {
  const qList = questions[selectedGender];
  document.getElementById("question").textContent = qList[currentQuestion];
  document.getElementById("counter").textContent = `${currentQuestion + 1} / ${qList.length}`;

  // Show elements
  document.getElementById("question").style.display = "block";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("counter").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("bookBtn").style.display = "none";
}

function nextQuestion(answer) {
  answers[currentQuestion] = answer;
  currentQuestion++;

  if (currentQuestion < questions[selectedGender].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQuestion === 0) {
    // Return to gender selection
    document.getElementById('quizContainer').classList.add('d-none');
    document.getElementById('menSection').style.display = 'block';
    document.getElementById('womenSection').style.display = 'block';
  } else {
    currentQuestion--;
    showQuestion();
  }
}

function showResult() {
  document.getElementById("question").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("counter").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("bookBtn").style.display = "inline-flex";
  document.getElementById("result").innerHTML = `
  <p>You answered "yes" to 0 out of 10 questions</p>

  <div class="secHead">
   <h4>Enjoy Optimized Longevity by Dodging Common Wellness Pitfalls</h4>
   <p>There are some areas of improvement, but you're in pretty good shape. The experts at Serotonin Centers can help you maintain your sense of well-being and enjoy optimized longevity by dodging some of the more common wellness pitfalls that might lie in your path.</p>
  </div>
`;
}

//  Treatment swiper

document.querySelectorAll('.TreatmentSwiper').forEach((el, index) => {
 const nextClass = `swiper-next-${index}`;
 const prevClass = `swiper-prev-${index}`;

 // Find the closest .slider-arrows div (assumed just after swiper)
 const parent = el.parentElement;
 const arrows = parent.querySelector('.sliderArrows');

 if (arrows) {
   const nextBtn = arrows.querySelector('.swiper-button-next');
   const prevBtn = arrows.querySelector('.swiper-button-prev');

   if (nextBtn) nextBtn.classList.add(nextClass);
   if (prevBtn) prevBtn.classList.add(prevClass);

   new Swiper(el, {
     navigation: {
       nextEl: `.${nextClass}`,
       prevEl: `.${prevClass}`
     },
   });
 }
});

// Testimonial

var swiper = new Swiper(".TestimonialSwiper", {
 slidesPerView: 4,
 spaceBetween: 24,
 loop: true,
 pagination: {
   el: ".swiper-pagination",
   clickable: true,
   dynamicBullets: true,
 },
 // speed: 1000,
 // autoplay: {
 //   delay: 2500,
 //   disableOnInteraction: false,
 // },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
});