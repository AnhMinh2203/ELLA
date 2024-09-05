$(document).ready(function() {
    $(".product-thumb").mouseenter(function() {
        var $this = $(this);
        $this.addClass('hover');
        var imgHeight = $this.find('img').height();
        $this.parent().animate({scrollTop: imgHeight}, 500); // Cuộn đến cuối hình ảnh
    }).mouseleave(function() {
        $(this).removeClass('hover');
    });
});



let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    showReview(currentReview);
}

function previousReview() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    showReview(currentReview);
}

document.querySelector('.arrow.left').addEventListener('click', previousReview);
document.querySelector('.arrow.right').addEventListener('click', nextReview);

showReview(currentReview);

setInterval(nextReview, 3000);

let currentIndex = 0;
const images = document.querySelectorAll('.images-container img');
const totalImages = images.length;

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.themevale_unique_features .item');

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            items.forEach(i => i.classList.add('inactive'));
            item.classList.remove('inactive');
        });

        item.addEventListener('mouseout', function() {
            items.forEach(i => i.classList.remove('inactive'));
        });

        item.addEventListener('click', function() {
            items.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('banner');
    var closeButton = document.getElementById('close-btn');

    // Kiểm tra nếu banner đã bị đóng trước đó
    if (localStorage.getItem('bannerClosed') === 'true') {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
        // Lưu trạng thái vào localStorage
        localStorage.setItem('bannerClosed', 'true');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.purchase-home, .purchase-icons');

    function updateTransform(e, element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const xRotation = ((y / rect.height) - 0.5) * 30; // -15 to 15 degrees
        const yRotation = ((x / rect.width) - 0.5) * -30; // -15 to 15 degrees

        element.style.setProperty('--x-rotation', xRotation.toFixed(2));
        element.style.setProperty('--y-rotation', yRotation.toFixed(2));
    }

    function resetTransform(element) {
        element.style.setProperty('--x-rotation', 0);
        element.style.setProperty('--y-rotation', 0);
    }

    elements.forEach(element => {
        element.addEventListener('mousemove', (e) => updateTransform(e, element));
        element.addEventListener('mouseleave', () => resetTransform(element));
    });
});




























    


