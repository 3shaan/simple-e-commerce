import Script from "next/script";

const ExternalScript = () => {
  return (
    <div>
      <Script src="/assets/js/vendor/jquery-3.6.4.min.js" />
      <Script src="/assets/js/vendor/owl.carousel.min.js" />
      <Script src="/assets/js/vendor/swiper-bundle.min.js" />
      <Script src="/assets/js/vendor/aos.min.js" />
      {/* <Script src="/assets/js/vendor/countdownTimer.js" /> */}
      <Script src="/assets/js/vendor/jquery.zoom.min.js" />

      <Script src="/assets/js/vendor/mixitup.min.js" />
      <Script src="/assets/js/vendor/range-slider.js" />
      <Script src="/assets/js/vendor/slick.min.js" />
      <Script src="/assets/js/main.js" />
    </div>
  );
};

export default ExternalScript;
