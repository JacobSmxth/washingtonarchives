// George Washington Digital Museum - Interactive Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the museum
    initializeMuseum();
    
    // Set up navigation
    setupNavigation();
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Set up image lazy loading
    setupImageLoading();
    
    // Set up interactive elements
    setupInteractiveElements();
});

function initializeMuseum() {
    console.log('George Washington Digital Museum initialized');
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.exhibit-section');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Remove active class from all sections and links
                sections.forEach(section => section.classList.remove('active'));
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to current section and link
                targetSection.classList.add('active');
                this.classList.add('active');
                
                // Scroll to top of museum content
                document.querySelector('.museum-content').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetSection = document.getElementById(hash);
            if (targetSection) {
                sections.forEach(section => section.classList.remove('active'));
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                targetSection.classList.add('active');
                const correspondingLink = document.querySelector(`a[href="#${hash}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        }
    });
    
    // Set initial active section based on URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const initialSection = document.getElementById(initialHash);
        if (initialSection) {
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            initialSection.classList.add('active');
            const correspondingLink = document.querySelector(`a[href="#${initialHash}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }
}

function setupSmoothScrolling() {
    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupImageLoading() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        imageObserver.observe(img);
    });
}

function setupInteractiveElements() {
    // Add hover effects to highlight cards
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to gallery images
    const galleryImages = document.querySelectorAll('.gallery-image, .primary-portrait');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create modal for image viewing
            createImageModal(this.src, this.alt);
        });
        
        // Add cursor pointer
        img.style.cursor = 'pointer';
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const sections = document.querySelectorAll('.exhibit-section');
        const currentActive = document.querySelector('.exhibit-section.active');
        const currentIndex = Array.from(sections).indexOf(currentActive);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentIndex < sections.length - 1) {
                const nextSection = sections[currentIndex + 1];
                const nextLink = document.querySelector(`a[href="#${nextSection.id}"]`);
                if (nextLink) {
                    nextLink.click();
                }
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentIndex > 0) {
                const prevSection = sections[currentIndex - 1];
                const prevLink = document.querySelector(`a[href="#${prevSection.id}"]`);
                if (prevLink) {
                    prevLink.click();
                }
            }
        }
    });
}

function createImageModal(src, alt) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        position: relative;
    `;
    
    // Create image
    const modalImage = document.createElement('img');
    modalImage.src = src;
    modalImage.alt = alt;
    modalImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create caption
    const caption = document.createElement('p');
    caption.textContent = alt;
    caption.style.cssText = `
        color: white;
        text-align: center;
        margin-top: 1rem;
        font-style: italic;
    `;
    
    // Assemble modal
    modalContent.appendChild(modalImage);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(caption);
    modal.appendChild(modalContent);
    
    // Add to document
    document.body.appendChild(modal);
    
    // Close modal functions
    function closeModal() {
        document.body.removeChild(modal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    closeButton.addEventListener('click', closeModal);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Add museum-style animations
function addMuseumAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all exhibit sections
    const sections = document.querySelectorAll('.exhibit-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize animations when page loads
window.addEventListener('load', addMuseumAnimations);

// Add museum-style loading screen
function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        color: white;
        font-family: 'Playfair Display', serif;
    `;
    
    loadingScreen.innerHTML = `
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">George Washington</h1>
        <p style="font-size: 1.2rem; opacity: 0.8;">Digital Museum</p>
        <div style="margin-top: 2rem; width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (document.getElementById('loading-screen')) {
                document.body.removeChild(loadingScreen);
            }
        }, 1000);
    });
}

// Show loading screen
showLoadingScreen();