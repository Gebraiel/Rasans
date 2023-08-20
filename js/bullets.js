const indicators = document.querySelectorAll('a.circle');
const resetCurrentActiveIndicator = () => {
    const activeIndicator = document.querySelector(".active");
    activeIndicator.classList.remove("active");
};
indicators.forEach((indicator) => {
indicator.addEventListener('click', function () {
        resetCurrentActiveIndicator();
        this.classList.add('active');
    });
});