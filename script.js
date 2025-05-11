// Menu items data
const menuItems = [
    {
        name: "Bruschetta",
        category: "starters",
        price: "$8.99",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3"
    },
    {
        name: "Caesar Salad",
        category: "starters",
        price: "$10.99",
        description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3"
    },
    {
        name: "Grilled Salmon",
        category: "main",
        price: "$24.99",
        description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3"
    },
    {
        name: "Beef Tenderloin",
        category: "main",
        price: "$29.99",
        description: "Premium cut beef with red wine reduction and mashed potatoes",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3"
    },
    {
        name: "Tiramisu",
        category: "desserts",
        price: "$8.99",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3"
    },
    {
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: "$9.99",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3"
    }
];

// DOM Elements
const menuItemsContainer = document.querySelector('.menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Mobile Navigation
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Menu Filtering
function filterMenu(category) {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    displayMenuItems(filteredItems);
}

function displayMenuItems(items) {
    menuItemsContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="description">${item.description}</p>
        </div>
    `).join('');
}

// Initialize menu with all items
displayMenuItems(menuItems);

// Category button click handlers
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter menu items
        filterMenu(button.dataset.category);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const secretTrigger = document.getElementById('secret-trigger');
    const secretMenu = document.getElementById('secret-menu');
    let clickTimeout;

    secretTrigger.addEventListener('click', () => {
        clickCount++;
        
        // Reset click count after 2 seconds of inactivity
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
            clickCount = 0;
        }, 2000);

        if (clickCount === 3) {
            secretMenu.style.display = 'block';
            secretMenu.style.animation = 'fadeIn 0.5s ease-in';
            clickCount = 0;
            
            // Add a fun effect
            document.body.style.backgroundColor = '#f0f0f0';
            setTimeout(() => {
                document.body.style.backgroundColor = '';
            }, 500);
        }
    });
});

// Add some fun animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .secret-menu-section {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        padding: 2rem;
        margin: 2rem 0;
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }

    .secret-menu-section h2 {
        text-align: center;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .menu-item {
        background: rgba(255,255,255,0.9);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    .menu-item:hover {
        transform: scale(1.02);
    }
`;
document.head.appendChild(style); 