const hideAds = () => {
const ads = document.querySelectorAll("shreddit-ad-post");

ads.forEach((ad) => {
    ad.style.display = "none";
    ad.style.visibility = "hidden";
});
};

const resizeObserver = new ResizeObserver(() => {
hideAds();
});

resizeObserver.observe(document.body);