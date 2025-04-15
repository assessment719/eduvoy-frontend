const images = document.querySelectorAll(".homeImg");
let currentIndex1 = 0;

function showItem(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}

function updateItem() {
    currentIndex1 = (currentIndex1 < images.length - 1) ? currentIndex1 + 1 : 0;
    showItem(currentIndex1);
}

showItem(currentIndex1);

setInterval(updateItem, 8000);

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

const observer = new IntersectionObserver(toggleButtonVisibility, {
    threshold: 0.1
});

observer.observe(heroSection);

const courses = [
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Philosophy", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "48000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Political Science", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "50000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Economics", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "51000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Biology", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "46000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Chemistry", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "48000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Psychology", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "49000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Environmental Science", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "47000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MA Economics", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "60000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MA Political Science", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "62000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MBA Business Administration", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "64000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Computer Science", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "52000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Data Science", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "53000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MA International Relations", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "61000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MA English Literature", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "58000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Mechanical Engineering", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "55000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Electrical Engineering", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "54000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) History", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "48000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Mathematics", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "51000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MSc Computer Science", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "63000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MSc Data Science", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "64000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Sociology", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "49000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BSc (HONS) Neuroscience", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "52000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MBA Finance", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "67000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MSc Biotechnology", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "62000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Anthropology", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "49000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "BA (HONS) Linguistics", uniName: "Harvard University", duration: "4 Years", courseType: "Undergraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "48000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MSc Physics", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "September/October 2024", campus: "Cambridge, MA", fees: "62000" },
    { img: "/Images/HarvardLogo.jpeg", courseName: "MA History of Art", uniName: "Harvard University", duration: "1 Year", courseType: "Postgraduate", intake: "January/February 2025", campus: "Cambridge, MA", fees: "60000" }
];

// Function to filter courses based on user input
function filterCourses(index) {
    const searchTerm = $('#courseName').val().toLowerCase();
    const courseTypeFilter = $('#courseTypeFilter').val();
    const intakeFilter = $('#intakeFilter').val();

    const filteredCourses = courses.filter(course => {
        const matchSearchTerm = course.courseName.toLowerCase().includes(searchTerm);
        const matchCourseType = courseTypeFilter === '' || course.courseType === courseTypeFilter;
        const matchIntake = intakeFilter === '' || course.intake === intakeFilter;
        return matchSearchTerm && matchCourseType && matchIntake;
    });

    displayResults(filteredCourses, index);
}

// Number of courses to show initially
let coursesToShow = 10;

// Function to display the courses incrementally
function displayResults(courses, count) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    // Display only the specified number of courses (count)
    for (let i = 0; i < count && i < courses.length; i++) {
        const course = courses[i];
        const Courses = document.createElement('div');
        Courses.classList.add('Courses');

        Courses.innerHTML = `
    <div class="ggg1">
        <img src="${course.img}" alt="University Logo" id="uniLogo">
        <div class="Course-Details">
            <div id="courseName">${course.courseName}</div>
            <div id="uniName">${course.uniName}</div>
            <div id="campusName">${course.campus}</div>
        </div>
    </div>
    <div class="ggg2">
        <div class="Extra-Details">
            <div class="Parts">
                <div><b>Duration:</b> ${course.duration}</div>
                <div><b>Course Level:</b> ${course.courseType}</div>
            </div>
            <div class="Parts">
                <div><b>Intake:</b> ${course.intake}</div>
                <div><b>Fees:</b> $${course.fees}</div>
            </div>
        </div>
        <button id="applyBtn">Apply</button>
    </div>
`;

        resultsContainer.appendChild(Courses);
    }
}

// Function to handle the 'View More' button click
function viewMoreCourses() {
    const searchTerm = $('#courseName').val().toLowerCase();
    const courseTypeFilter = $('#courseTypeFilter').val();
    const intakeFilter = $('#intakeFilter').val();

    const filteredCourses = courses.filter(course => {
        const matchSearchTerm = course.courseName.toLowerCase().includes(searchTerm);
        const matchCourseType = courseTypeFilter === '' || course.courseType === courseTypeFilter;
        const matchIntake = intakeFilter === '' || course.intake === intakeFilter;
        return matchSearchTerm && matchCourseType && matchIntake;
    });
    // Increase the number of courses to show by 5
    coursesToShow += 10;

    // Display the updated number of courses
    displayResults(filteredCourses, coursesToShow);
}

// Initial display of the first 5 courses
displayResults(courses, coursesToShow);

// Event listener for the 'View More' button
document.getElementById('viewMore').addEventListener('click', viewMoreCourses);

// Event listener for submit button click
$('#submitButton').on('click', function () {
    filterCourses(10);
});

// Set default selection to "All Universities"
$(document).ready(function () {
    $('#universityFilter').val('').trigger('change');
});

const entry1Button = document.getElementById('entry1Button');
const entry2Button = document.getElementById('entry2Button');
const entry3Button = document.getElementById('entry3Button');
const requirement1 = document.getElementById('requirement1');
const requirement2 = document.getElementById('requirement2');
const requirement3 = document.getElementById('requirement3');

entry1Button.addEventListener('click', function () {
    requirement1.style.display = 'block';
    requirement2.style.display = 'none';
    requirement3.style.display = 'none';
    entry1Button.classList.add('active');
    entry2Button.classList.remove('active');
    entry3Button.classList.remove('active');
});

entry2Button.addEventListener('click', function () {
    requirement1.style.display = 'none';
    requirement2.style.display = 'block';
    requirement3.style.display = 'none';
    entry1Button.classList.remove('active');
    entry2Button.classList.add('active');
    entry3Button.classList.remove('active');
});

entry3Button.addEventListener('click', function () {
    requirement1.style.display = 'none';
    requirement2.style.display = 'none';
    requirement3.style.display = 'block';
    entry1Button.classList.remove('active');
    entry2Button.classList.remove('active');
    entry3Button.classList.add('active');
});

window.onload = function () {
    entry1Button.classList.add('active');
};