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

const Universities = [
    { name: 'Harvard University', pic: '/Images/Harvard4.jpg', logo: '/Images/HarvardLogo.jpeg', address: 'Cambridge, MA', link: 'Harvard-Uni.html' },
    { name: 'Stanford University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Stanford, CA', link: '#' },
    { name: 'Massachusetts Institute of Technology', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Cambridge, MA', link: '#' },
    { name: 'University of California, Berkeley', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Berkeley, CA', link: '#' },
    { name: 'California Institute of Technology', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Pasadena, CA', link: '#' },
    { name: 'Princeton University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Princeton, NJ', link: '#' },
    { name: 'Yale University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'New Haven, CT', link: '#' },
    { name: 'Columbia University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'New York, NY', link: '#' },
    { name: 'University of Chicago', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Chicago, IL', link: '#' },
    { name: 'University of Pennsylvania', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Philadelphia, PA', link: '#' },
    { name: 'Johns Hopkins University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Baltimore, MD', link: '#' },
    { name: 'Northwestern University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Evanston, IL', link: '#' },
    { name: 'Duke University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Durham, NC', link: '#' },
    { name: 'University of California, Los Angeles', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Los Angeles, CA', link: '#' },
    { name: 'New York University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'New York, NY', link: '#' },
    { name: 'Cornell University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Ithaca, NY', link: '#' },
    { name: 'University of Southern California', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Los Angeles, CA', link: '#' },
    { name: 'Carnegie Mellon University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Pittsburgh, PA', link: '#' },
    { name: 'University of Michigan', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Ann Arbor, MI', link: '#' },
    { name: 'Brown University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Providence, RI', link: '#' },
    { name: 'University of Texas at Austin', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Austin, TX', link: '#' },
    { name: 'Emory University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Atlanta, GA', link: '#' },
    { name: 'Vanderbilt University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Nashville, TN', link: '#' },
    { name: 'Georgetown University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Washington, DC', link: '#' },
    { name: 'University of Washington', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Seattle, WA', link: '#' },
    { name: 'Rice University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Houston, TX', link: '#' },
    { name: 'Boston University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Boston, MA', link: '#' },
    { name: 'University of Florida', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Gainesville, FL', link: '#' },
    { name: 'University of North Carolina at Chapel Hill',  pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Chapel Hill, NC', link: '#' },
    { name: 'University of Virginia', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Charlottesville, VA', link: '#' },
    { name: 'Ohio State University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Columbus, OH', link: '#' },
    { name: 'Pennsylvania State University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'University Park, PA', link: '#' },
    { name: 'Purdue University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'West Lafayette, IN', link: '#' },
    { name: 'University of Maryland', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'College Park, MD', link: '#' },
    { name: 'University of Minnesota', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Minneapolis, MN', link: '#' },
    { name: 'University of Wisconsin-Madison', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Madison, WI', link: '#' },
    { name: 'Michigan State University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'East Lansing, MI', link: '#' },
    { name: 'University of Miami', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Coral Gables, FL', link: '#' },
    { name: 'Rutgers University', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'New Brunswick, NJ', link: '#' },
    { name: 'Indiana University Bloomington', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Bloomington, IN', link: '#' },
    { name: 'University of Notre Dame', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Notre Dame, IN', link: '#' },
    { name: 'University of Colorado Boulder', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Boulder, CO', link: '#' },
    { name: 'University of Arizona', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Tucson, AZ', link: '#' },
    { name: 'University of Georgia', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Athens, GA', link: '#' },
    { name: 'University of Illinois Urbana-Champaign', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Champaign, IL', link: '#' },
    { name: 'University of Illinois Urbana-Champaign', pic: '/Images/Home_image1.jpg', logo: '/Images/Home_image1.jpg', address: 'Champaign, IL', link: '#' }
];

let currentPage = 1;
const totalPages = 6;
const maxVisiblePages = 5;
const universitiesPerPage = 9;

const universitySections = document.querySelectorAll(".universities");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function setActivePage(pageNumber) {
    currentPage = pageNumber;
    updatePagination();
    renderUniversities(currentPage);
}

function changePage(direction) {
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
    updatePagination();
    renderUniversities(currentPage);
}

function updatePagination() {
    const paginationList = document.querySelector(".pagination");
    paginationList.innerHTML = '';

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.classList.add('page-number');
        if (i === currentPage) {
            li.classList.add('active');
        }
        li.onclick = () => setActivePage(i);
        paginationList.appendChild(li);
    }

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = currentPage === totalPages;
}


function renderUniversities(index) {
    const universitiesContainer = document.getElementById('universitiesContainer');
    universitiesContainer.innerHTML = '';

    const start = (index - 1) * universitiesPerPage;
    const end = start + universitiesPerPage;
    const universitiesToDisplay = Universities.slice(start, end);

    universitiesToDisplay.forEach(uni => {
        const universitiesNames = document.createElement('div');
        universitiesNames.classList.add('universitiesNames');
    
        universitiesNames.innerHTML = `
            <div class="uniImage">
                <img src="${uni.pic}" alt="${uni.name} Logo" width="100">
            </div>
            <div class="uniTitle">
                <img src="${uni.logo}" alt="${uni.name} Logo" width="100">
                <div class="uniTitleText">
                    <h2>${uni.name}</h2>
                    <p>${uni.address}</p>
                    <a href="${uni.link}">Explore <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    
        universitiesContainer.appendChild(universitiesNames);
    });
}

setActivePage(1);

prevBtn.addEventListener('click', () => changePage('prev'));
nextBtn.addEventListener('click', () => changePage('next'));

window.onload = function () {
    updatePagination();
};