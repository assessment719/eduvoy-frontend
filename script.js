const images = document.querySelectorAll("#home img");
const events = document.querySelectorAll(".event");
let currentIndex1 = 0;

function showItem(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });

    events.forEach((event, i) => {
        if (i === index) {
            event.classList.add("active");
        } else {
            event.classList.remove("active");
        }
    });
}

function updateItem() {
    currentIndex1 = (currentIndex1 < images.length - 1) ? currentIndex1 + 1 : 0;
    showItem(currentIndex1);
}

showItem(currentIndex1);

setInterval(updateItem, 8000);

const aboutText = document.getElementById('aboutText');
const visionImg = document.getElementById('visionImg');
const serviceText = document.getElementById('serviceText');
const aboutImg = document.getElementById('aboutImg');
const visionText = document.getElementById('visionText');
const serviceImg = document.getElementById('serviceImg');

const toggleLeftVisibility = (entries) => {
    entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
            observer1.unobserve(element);
        }
    });
};

const toggleRightVisibility = (entries) => {
    entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
            observer2.unobserve(element);
        }
    });
};

const observer1 = new IntersectionObserver(toggleLeftVisibility, {
    threshold: 0.1
});

observer1.observe(aboutText);
observer1.observe(visionImg);
observer1.observe(serviceText);

const observer2 = new IntersectionObserver(toggleRightVisibility, {
    threshold: 0.1
});

observer2.observe(aboutImg);
observer2.observe(visionText);
observer2.observe(serviceImg);

const destImages = document.querySelectorAll(".destination-images img");
const countries = document.querySelectorAll(".countries");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showItem2(index) {
    destImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'flex';
            setTimeout(() => {
                img.classList.add('visible');
            }, 10);
        } else {
            img.classList.remove('visible');
            setTimeout(() => {
                img.style.display = 'none';
            }, 1500);
        }
    });

    countries.forEach((country, i) => {
        if (i === index) {
            country.style.display = 'flex';
            setTimeout(() => {
                country.classList.add('visible');
            }, 10);
        } else {
            country.classList.remove('visible');
            setTimeout(() => {
                country.style.display = 'none';
            }, 1500);
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : destImages.length - 1;
    showItem2(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < destImages.length - 1) ? currentIndex + 1 : 0;
    showItem2(currentIndex);
});

showItem2(currentIndex);

const count = document.getElementById('num1');

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0
});

observer3.observe(count);

let upto1 = 0;
let upto2 = 0;
let upto3 = 0;
let counts;

function startCounting() {
    counts = setInterval(() => {
        let count1 = document.getElementById("num1");
        let count2 = document.getElementById("num2");
        let count3 = document.getElementById("num3");

        if (upto1 < 100) count1.innerHTML = ++upto1 + "+";
        if (upto2 < 100) count2.innerHTML = ++upto2 + "+";
        if (upto3 < 100) count3.innerHTML = ++upto3 + "+";

        if (upto1 === 1000 && upto2 === 1000 && upto3 === 1000) {
            clearInterval(counts);
        }
    }, 50);
}

const reviewbut1 = document.getElementById('reviewbut1');
const reviewbut2 = document.getElementById('reviewbut2');
const reviewbut3 = document.getElementById('reviewbut3');

reviewbut1.addEventListener('click', function () {
    reviewbut1.classList.add('active');
    reviewbut2.classList.remove('active');
    reviewbut3.classList.remove('active');
    showIframe(1);
});

reviewbut2.addEventListener('click', function () {
    reviewbut1.classList.remove('active');
    reviewbut2.classList.add('active');
    reviewbut3.classList.remove('active');
    showIframe(2);
});

reviewbut3.addEventListener('click', function () {
    reviewbut1.classList.remove('active');
    reviewbut2.classList.remove('active');
    reviewbut3.classList.add('active');
    showIframe(3);
});

window.onload = function () {
    reviewbut1.classList.add('active');
};

function showIframe(activeIndex) {
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach((iframe, index) => {
        iframe.classList.remove('center', 'left', 'right');
        if (index + 1 === activeIndex) {
            iframe.classList.add('center');
        } else if (index + 1 < activeIndex) {
            iframe.classList.add('left');
        } else {
            iframe.classList.add('right');
        }
    });
}

showIframe(1);

function toggleChat() {
    var welcomechat = document.getElementById('welcome-chat');
    var welcomechatcloserbutton = document.getElementById('welcome-chat-closerbutton');
    var chatContainer = document.getElementById('chat-container');
    var image1 = document.getElementById('Image1');
    var image2 = document.getElementById('Image2');

    if (welcomechat.style.display === 'block' || chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        welcomechat.style.display = 'none';
        chatContainer.style.display = 'flex';
        welcomechatcloserbutton.style.display = 'none';
        image1.style.opacity = '0';
        image2.style.display = 'block';
        setTimeout(function () {
            image2.style.opacity = '1';
            image1.style.display = 'none';
        }, 0);
        reloadChatBox()
    } else {
        welcomechat.style.display = 'flex'
        chatContainer.style.display = 'none';
        welcomechatcloserbutton.style.display = 'block';
        image2.style.opacity = '0';
        image1.style.display = 'block';
        setTimeout(function () {
            image1.style.opacity = '1';
            image2.style.display = 'none';
        }, 0);
    }
}

function closewelcomeChat() {
    var welcomechat = document.getElementById('welcome-chat');
    var welcomechatcloserbutton = document.getElementById('welcome-chat-closerbutton');

    welcomechat.style.display = 'none';
    welcomechatcloserbutton.style.display = 'none';
}

function reloadChatBox() {
    chatBody.innerHTML = '';
    questionList.style.display = 'none';
    addMessage("Hello! How can I assist you today?<br>Please choose your query from the FAQ menu.", 'bot');
    loadInitialQuestions();
    nameInputContainer.style.display = 'none';
}

const chatBody = document.getElementById('chatBody');
const questionList = document.getElementById('questionList');
const nameInputContainer = document.getElementById('nameInputContainer');
const nameInput = document.getElementById('nameInput');

const preloadedQA = {
    "What is your name?": "I am a chatbot created to assist you with your overseas education queries.",
    "How can you help me?": "I can provide information about university admissions in the UK, USA, Canada, Ireland, Australia, New Zealand, Singapore and Dubai, including application processes, course selection, and visa requirements.",
    "Which countries do you assist with university admissions?": "We specialize in helping students with admissions to universities in the UK, USA, Canada, Ireland, Australia, New Zealand, Singapore and Dubai.",
    "How do I start the application process?": "You can start the application process by contacting our team for a consultation. We will guide you through the required steps, from choosing the right course to submitting your application.",
    "Do you help with visa applications?": "Yes, we provide complete guidance on visa applications, including documentation, interview preparation, and submitting the application to the relevant embassy.",
    "Can you assist me in choosing the right course and university?": "Absolutely! Our experts will assess your academic background, career goals, and preferences to recommend the best course and university options for you.",
    "What are your consultation fees?": "Our consultation fees vary depending on the services required. We offer different packages based on the level of support you need.",
    "Do you offer any scholarships?": "We provide information on available scholarships and financial aid options for the universities in our portfolio. We also assist with the scholarship application process.",
    "How long does the application process take?": "The timeline for the application process varies depending on the country and university. Generally, it can take anywhere from a few weeks to several months.",
    "What documents do I need to apply?": "You will typically need your academic transcripts, letters of recommendation, a statement of purpose, proof of English proficiency, and a valid passport. Our team will provide a detailed list based on your chosen university and course.",
    "Can you help with test preparation (IELTS, TOEFL, GRE, GMAT)?": "Yes, we partner with leading test preparation centers to help you prepare for exams like IELTS, TOEFL, GRE, and GMAT.",
    "What support do you offer after I receive my university offer letter?": "After you receive your offer letter, we assist with the visa application, accommodation arrangements, pre-departure briefing, and airport pickup in the destination country.",
    "Do you offer support for post-graduate work opportunities?": "Yes, we provide guidance on post-study work visas, job search strategies, and networking opportunities in your chosen country.",
    "Can you connect me with current students or alumni from the universities?": "Yes, we can connect you with current students or alumni who can share their experiences and provide insights about studying at your chosen university.",
    "What is the success rate of your students gaining admission?": "We have a high success rate, with over 90% of our students securing admissions to their preferred universities. Our experienced counselors ensure that your application is competitive and well-prepared.",
    "I want to speak with a human consultant": "Sure, please enter your name so that I can connect you with our human assistant."
};

function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const avatar = document.createElement('img');
    avatar.src = "EduVoy_Logo.png";
    avatar.classList.add('avatar');

    const messageContent = document.createElement('div');
    messageContent.classList.add('content');
    messageContent.innerHTML = content;

    if (sender === 'bot') {
        messageElement.appendChild(avatar);
    }

    messageElement.appendChild(messageContent);
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingAnimation() {
    const typingElement = document.createElement('div');
    typingElement.classList.add('message', 'bot', 'typing');

    const avatar = document.createElement('img');
    avatar.src = "EduVoy_Logo.png";
    avatar.classList.add('avatar');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    typingElement.appendChild(avatar);
    typingElement.appendChild(contentContainer);

    const typingAnimation = document.createElement('div');
    typingAnimation.classList.add('typing-animation');
    typingAnimation.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';

    contentContainer.appendChild(typingAnimation);

    chatBody.appendChild(typingElement);
    chatBody.scrollTop = chatBody.scrollHeight;

    return typingElement;
}

function toggleQuestionList() {
    questionList.style.display = questionList.style.display === 'none' ? 'block' : 'none';
    questionList.scrollTop = 0;
}

function selectQuestion(question) {
    addMessage(question, 'user');
    const typingElement = showTypingAnimation();
    setTimeout(() => {
        chatBody.removeChild(typingElement);
        const botResponse = preloadedQA[question] || "I'm sorry, I don't understand that.";
        addMessage(botResponse, 'bot');
        if (question === "I want to speak with a human consultant") {
            askName();
        }
    }, 3000);
    toggleQuestionList();
}

function askName() {
    nameInputContainer.style.display = 'flex';
}

function submitName() {
    const name = nameInput.value;
    addMessage(`My name is: ${name}`, 'user');
    const typingElement = showTypingAnimation();
    nameInputContainer.style.display = 'none';
    setTimeout(() => {
        chatBody.removeChild(typingElement);
        addMessage("Thank you for connecting, I am connecting you with Vishal Singh Chauhan (The owner of this gym) in 2 Seconds.", 'bot');
    }, 3000);
    setTimeout(() => {
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918084911306&text=Hello, my name is ${encodeURIComponent(name)}, and I have some queries regarding your Crizac Limited.`;
        window.open(whatsappUrl, '_blank');
    }, 5000);
    loadInitialQuestions();
    nameInput.value = '';
}

function clearMessages() {
    chatBody.innerHTML = '';
    addMessage("Hello! How can I assist you again?<br>Please choose your query from the FAQ menu.", 'bot');
    loadInitialQuestions();
    nameInputContainer.style.display = 'none';

    if (questionList.style.display === 'block') {
        questionList.style.display = 'none';
    }
}

function loadInitialQuestions() {
    questionList.innerHTML = '';
    for (let question in preloadedQA) {
        const questionElement = document.createElement('div');
        questionElement.textContent = question;
        questionElement.onclick = () => selectQuestion(question);
        questionList.appendChild(questionElement);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.getElementById('back-to-top');
const heroSection = document.getElementById('hero');

const toggleButtonVisibility = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        } else {
            backToTopButton.style.visibility = 'visible';
            backToTopButton.style.opacity = '1';
        }
    });
};

const observer4 = new IntersectionObserver(toggleButtonVisibility, {
    threshold: 0.1
});

observer4.observe(heroSection);