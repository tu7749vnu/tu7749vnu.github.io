document.addEventListener('DOMContentLoaded', () => {
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const banners = document.querySelectorAll('.banner');
    let currentIndex = 0;

    // Function to update the banner position
    function updateBannerPosition() {
        bannerWrapper.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }

    // Next button click
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % banners.length; // Loop back to first banner
        updateBannerPosition();
    });

    // Previous button click
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + banners.length) % banners.length; // Loop to last banner
        updateBannerPosition();
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % banners.length;
        updateBannerPosition();
    }, 5000);

    // Join Now button click
    const joinNowButtons = document.querySelectorAll('.join-now');
    joinNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Chào mừng bạn tham gia!');
        });
    });
});