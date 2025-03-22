// mcq-renderer.js
export function initializeMCQRenderer(mcqs) {
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
            const questionNumber = mcqs.length - i;
            
            // Create unique ID for the question
            const questionId = `question-${questionNumber}`;
            
            const mcqHTML = `
                <div class="question-box" id="${questionId}">
                    <div class="question">
                        <div id='question-header'><h3>Question: ${questionNumber}</h3><div class="report-btn" onclick="window.openContactForm()">⚠</div></div>
                        <p><b>${mcq.question}</b></p>
                    </div>
                    
                    <div class="option">
                        <ol type="A" class="interactive-options">
                            ${mcq.options.map((option, index) => {
                                const letter = String.fromCharCode(65 + index); // A, B, C, D...
                                return `<li data-option="${letter}" class="option-item">${option}</li>`;
                            }).join('')}
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
                    <div class="feedback-message" style="display: none; margin-top: 10px; padding: 8px; border-radius: 4px; text-align: center; font-weight: bold;"></div>
                </div>
            `;
            mcqContainer.innerHTML += mcqHTML;

            // Insert ad after every 4th question
            if (questionNumber % 4 === 0 && i !== end) {
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
        
        // Add event listeners to options after rendering
        addOptionClickHandlers();
        
        updatePagination();
        highlightSyllabus(page);
    }

    function addOptionClickHandlers() {
        const optionItems = document.querySelectorAll('.option-item');
        
        optionItems.forEach(option => {
            option.addEventListener('click', function() {
                // Get the question box container
                const questionBox = this.closest('.question-box');
                
                // If already answered, don't do anything
                if (questionBox.classList.contains('answered')) {
                    return;
                }
                
                // Get the correct answer from the details section
                const correctAnswerText = questionBox.querySelector('.answer p b').innerText;
                const correctAnswer = correctAnswerText.replace('Correct Answer: ', '');
                
                // Get the selected option
                const selectedOption = this.getAttribute('data-option');
                
                // Get the feedback message element
                const feedbackElement = questionBox.querySelector('.feedback-message');
                
                // Mark all options as normal first
                questionBox.querySelectorAll('.option-item').forEach(item => {
                    item.classList.remove('correct-option', 'incorrect-option');
                });
                
                // Check if the answer is correct
                if (selectedOption === correctAnswer) {
                    // Mark as correct
                    this.classList.add('correct-option');
                    feedbackElement.textContent = 'Correct!';
                    feedbackElement.style.backgroundColor = '#d4edda';
                    feedbackElement.style.color = '#155724';
                } else {
                    // Mark selected as incorrect
                    this.classList.add('incorrect-option');
                    
                    // Find and highlight the correct option - with error handling
                    const correctElement = questionBox.querySelector(`.option-item[data-option="${correctAnswer}"]`);
                    if (correctElement) {
                        correctElement.classList.add('correct-option');
                    }
                    
                    feedbackElement.textContent = 'Incorrect. The correct answer is ' + correctAnswer;
                    feedbackElement.style.backgroundColor = '#f8d7da';
                    feedbackElement.style.color = '#721c24';
                }
                
                // Show the feedback
                feedbackElement.style.display = 'block';
                
                // Mark question as answered
                questionBox.classList.add('answered');
                
                // Automatically open the explanation
                questionBox.querySelector('details').setAttribute('open', true);
            });
        });
    }

    function updatePagination() {
        const pageInfo = document.getElementById('page-info');
        pageInfo.innerText = `Page ${currentPage} of ${Math.ceil(mcqs.length / itemsPerPage)}`;

        document.getElementById('prev-btn').disabled = currentPage === 1;
        document.getElementById('next-btn').disabled = currentPage === Math.ceil(mcqs.length / itemsPerPage);
    }

    function highlightSyllabus(page) {
        // First remove active class from all spans
        document.querySelectorAll('.syllabus span').forEach(item => {
            item.classList.remove('active');
        });

        // Try to find the span element for the current page
        const spanItem = document.querySelector(`span[onclick="navigateToPage(${page})"]`) || 
                         document.querySelector(`span[onclick="window.navigateToPage(${page})"]`);
        
        if (spanItem) {
            spanItem.classList.add('active');
            // Make sure the parent details element is open
            const detailsParent = spanItem.closest('details');
            if (detailsParent) {
                detailsParent.setAttribute('open', true);
            }
        }
    }

    // Make functions available globally
    window.openContactForm = function() {        
        window.open("https://bcaexamprep.blogspot.com/p/support.html?section=report", "_blank");
    };

    window.navigateToPage = function(page) {
        sessionStorage.setItem('currentPage', page);
        location.reload();
    };

    // Event Listeners
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                sessionStorage.setItem('currentPage', currentPage);
                location.reload();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < Math.ceil(mcqs.length / itemsPerPage)) {
                currentPage++;
                sessionStorage.setItem('currentPage', currentPage);
                location.reload();
            }
        });
    }

    // Add a reset button functionality to attempt questions again
    window.resetQuestions = function() {
        const questionBoxes = document.querySelectorAll('.question-box');
        questionBoxes.forEach(box => {
            box.classList.remove('answered');
            box.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('correct-option', 'incorrect-option');
            });
            const feedbackElement = box.querySelector('.feedback-message');
            if (feedbackElement) {
                feedbackElement.style.display = 'none';
            }
            const details = box.querySelector('details');
            if (details) {
                details.removeAttribute('open');
            }
        });
    };

    // Scroll to the 'syllabus' div after page load
    window.addEventListener('load', () => {
        const syllabusElement = document.querySelector('.syllabus');
        if (syllabusElement) {
            syllabusElement.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Initial render
    renderMCQs(currentPage);
}
