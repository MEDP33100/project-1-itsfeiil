// sound effects
const teaPouringSound = new Audio('pouring-tea.mp3');
const boilingWaterSound = new Audio('boiling-water.mp3');

// elements
document.getElementById('startBtn').addEventListener('click', () => {
    document.querySelector('header').style.display = 'none';
    document.getElementById('ceremonySteps').classList.remove('hidden');
});

function selectTea(teaType) {
    alert(`You selected ${teaType} tea! Learn about its benefits and brewing methods.`);
}

// boiling the tea
function boilWater() {
    document.getElementById('boilingAnimation').classList.remove('hidden');
    boilingWaterSound.play();
    setTimeout(() => {
        alert('Water is ready!');
    }, 5000); 
}

// pouring the tea
function pourTea() {
    document.getElementById('pouringAnimation').classList.remove('hidden');
    teaPouringSound.play();
    setTimeout(() => {
        alert('Tea is ready to be served!');
    }, 5000); 
}

function showTeaDetails(tea) {
    let learnMoreText = '';
    if (tea === 'green') {
        learnMoreText = 'Green tea is known for its refreshing taste and health benefits such as boosting metabolism.';
        document.getElementById('greenTeaLearnMore').innerHTML = learnMoreText;
    } else if (tea === 'oolong') {
        learnMoreText = 'Oolong tea has a unique, semi-fermented flavor that promotes relaxation and better digestion.';
        document.getElementById('oolongTeaLearnMore').innerHTML = learnMoreText;
    } else if (tea === 'pu-erh') {
        learnMoreText = 'Pu-Erh tea is a fermented tea with earthy, deep flavors and is known for its detoxifying properties.';
        document.getElementById('puErhTeaLearnMore').innerHTML = learnMoreText;
    }
}

// learn more buttons
function learnMore(teapotId) {
    let teaInfo = "";
    switch(teapotId) {
        case 'teapot1':
            teaInfo = "Teapot 1: Modern glass teapot, ideal for showcasing the beauty of tea leaves as they steep.";
            break;
        case 'teapot2':
            teaInfo = "Teapot 2: Traditional clay teapot, known for its heat retention and classic design.";
            break;
        case 'teapot3':
            teaInfo = "Teapot 3: Elegant porcelain teapot, best for light teas and perfect for display.";
            break;
        default:
            teaInfo = "Information about the selected teapot is not available.";
    }
    alert(teaInfo);
}

// the quote
function showQuote(quote) {
    if (quote === 'confucius') {
        alert('“Tea is the harmony of nature, the reflection of peace.” - Confucius');
    }
}

// to take the quiz
function startQuiz() {
    alert('Start the Tea Ceremony Quiz! Answer questions about tea types and culture.');
 }
 

 // gsap for animations
 document.getElementById('startBtn').addEventListener('click', () => {
    gsap.to('.intro', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
    });
    gsap.to('#ceremonySteps', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        delay: 0.5 
    });
 });
 
 function selectTea(teaType) {
    gsap.fromTo(`#${teaType} img`, {
        scale: 1,
        opacity: 0.5,
    }, {
        scale: 1.2,
        opacity: 1,
        duration: 0.5,
        ease: 'bounce.out'
    });
    alert(`You selected ${teaType} tea! Learn about its benefits and brewing methods.`);
 }
 
 // boiling water
 function boilWater() {
    boilingWaterSound.play();
    setTimeout(() => {
        gsap.to('#boilingAnimation img', {
            rotation: 0,
            ease: 'none',
            repeat: 0
        });
        alert('Water is ready!');
    }, 5000);
 }
 
 // pouring water
 function pourTea() {
    teaPouringSound.play();
    setTimeout(() => {
        gsap.to('#pouringAnimation img', {
            scaleX: 1,
            scaleY: 1,
            ease: 'elastic.out(1, 0.75)'
        });
        alert('Tea is ready to be served!');
    }, 2000);
 }
 
 // to take the quiz
 function startQuiz() {
    document.getElementById('quizSection').classList.remove('hidden');
    gsap.to('#quizSection', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });
 }

 // answers
 function checkQuiz() {
    let score = 0;
    const quizForm = document.getElementById('quizForm');
    // question 1
    if (quizForm.q1.value === 'green') {
        score++;
    }
    // question 2
    if (quizForm.q2.value === 'chaDao') {
        score++;
    }
    // comments
    const result = document.getElementById('quizResult');
    if (score === 2) {
        result.innerHTML = "<h3>Congratulations! You scored 2/2!</h3><p>You are a tea expert!</p>";
    } else if (score === 1) {
        result.innerHTML = "<h3>Well done! You scored 1/2.</h3><p>Keep learning about tea!</p>";
    } else {
        result.innerHTML = "<h3>Oops! You scored 0/2.</h3><p>Try again and learn more about the Chinese tea ceremony!</p>";
    }
    // the results
    gsap.to('#quizResult', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });
 }
 
 
 