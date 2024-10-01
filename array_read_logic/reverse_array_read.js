
const itemsPerPage = 10;
let currentPage = parseInt(sessionStorage.getItem('currentPage')) || 1;

// Render MCQs in reverse order
function renderMCQs(page) {
    const start = (mcqs.length - 1) - (page - 1) * itemsPerPage;
    const end = start - itemsPerPage + 1;
    const mcqContainer = document.getElementById('mcq-container');
    mcqContainer.innerHTML = '';

    for (let i = start; i >= end && i >= 0; i--) {
        const mcq = mcqs[i];
        const mcqHTML = `
            <div class="question-box">
            
                <div class="question">
                    <div id= 'question-header'><h3>Question: ${mcqs.length - i}</h3><div class="report-btn" onclick="openContactForm(${mcqs.length - i}, ${currentPage})">⚠</div></div>
                    <p><b>${mcq.question}</b></p>
                </div>
                
                <div class="option">
                    <ol type="A">
                        ${mcq.options.map(option => `<li>${option}</li>`).join('')}
                    </ol>
                </div>
                <div class="answer">
                    <details>
                        <summary>Click to see the answer</summary>
                        <p><i><b>Correct Answer: ${mcq.answer}</b></i></p>
                        <div class="explanation">
                            <p><i>Explanation: ${mcq.explanation}</i></p>
                        </div>
                    </details>
                </div>
            </div>
        `;
        mcqContainer.innerHTML += mcqHTML;

        // Insert ad after every 4th question
        if ((mcqs.length - i) % 4 === 0 && i !== end) {
            const adHTML = `
                <div class="adunit">
                 
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-5592818349543606"
     data-ad-slot="4015144232"></ins>

                </div>
            `;
            mcqContainer.innerHTML += adHTML;
        }
    }
    updatePagination();
    highlightSyllabus(page);
}

function updatePagination() {
    const pageInfo = document.getElementById('page-info');
    pageInfo.innerText = `Page ${currentPage} of ${Math.ceil(mcqs.length / itemsPerPage)}`;

    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === Math.ceil(mcqs.length / itemsPerPage);
}

function highlightSyllabus(page) {
    // Remove the 'active' class from all span elements
    document.querySelectorAll('.syllabus span').forEach(item => {
        item.classList.remove('active');
    });

    // Find the specific span element that matches the page number
    const spanItem = document.querySelector(`span[onclick="navigateToPage(${page})"]`);
    
    if (spanItem) {
        // Add the 'active' class to the matched span element
        spanItem.classList.add('active');
        spanItem.closest('details').setAttribute('open', true);
    }
}


  function openContactForm(mcqNumber, pageNumber) {
    const contactFormMessage = document.querySelector('.contact-form-email-message');
    contactFormMessage.value = `Describe issue with MCQ Question No: ${mcqNumber}, Page No: ${pageNumber}, URL: ${window.location.href}`;

    document.getElementById('contact-popup-overlay').style.display = 'flex';
      document.getElementById('contact-popup-overlay').style.opacity = '1';
}


function navigateToPage(page) {
    sessionStorage.setItem('currentPage', page);
    location.reload();
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        sessionStorage.setItem('currentPage', currentPage);
        location.reload();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < Math.ceil(mcqs.length / itemsPerPage)) {
        currentPage++;
        sessionStorage.setItem('currentPage', currentPage);
        location.reload();
    }
});
// Scroll to the 'syllabus' div after page reload
window.addEventListener('load', () => {
    const syllabusElement = document.querySelector('.syllabus');
    if (syllabusElement) {
        syllabusElement.scrollIntoView({ behavior: 'smooth' });
    }
});
// Initial render
renderMCQs(currentPage);
