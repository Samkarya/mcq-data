export function initializeMCQRenderer(mcqs) {
    const itemsPerPage = 10;
    let currentPage = parseInt(sessionStorage.getItem('currentPage')) || 1;

    // Render MCQs in normal order (from start)
    function renderMCQs(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const mcqContainer = document.getElementById('mcq-container');
        mcqContainer.innerHTML = '';

        for (let i = start; i < end && i < mcqs.length; i++) {
            const mcq = mcqs[i];
            const questionNumber = i + 1;
            
            // Create unique ID for the question
            const questionId = `question-${questionNumber}`;
            
            const mcqHTML = `
                <div class="question-box" id="${questionId}">
                    <div class="question">
                        <div id='question-header'><h3>Question: ${questionNumber}</h3><div class="report-btn" onclick="openContactForm()">⚠</div></div>
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

            // Insert a static Google ad container after every 4th question
            if (questionNumber % 4 === 0 && i < mcqs.length - 1) {
                const adHTML = `
                    <div class="adunit">
                        <div id="ad-container-${questionNumber}">
                            
                        </div>
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
                    
                    // Highlight the correct option
                    questionBox.querySelector(`.option-item[data-option="${correctAnswer}"]`)
                        .classList.add('correct-option');
                    
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

    // Make functions available globally so they can be called from HTML
    window.openContactForm = function() {
  window.open("https://bcaexamprep.blogspot.com/p/support.html?section=report", "_blank");
    };

    window.navigateToPage = function(page) {
        sessionStorage.setItem('currentPage', page);
        location.reload();
    };

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
            box.querySelector('details').removeAttribute('open');
        });
    };

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
}
