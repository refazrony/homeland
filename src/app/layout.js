// import "../../public/assets/css/bootstrap.min.css";
// // import "../../public/assets/css/fontawesome-all.css";
// import "../../public/assets/css/flaticon.css";
// import "../../public/assets/css/animate.css";
// // import "../../public/assets/css/video.min.css";
// import "../../public/assets/css/slick-theme.css";
// import "../../public/assets/css/slick.css";
// // import "../../public/assets/css/jquery-ui.css";
// import "../../public/assets/css/nice-select.css";
// // import "../../public/assets/css/rs6.css";
// import "../../public/assets/css/roundslider.css";
// import "../../public/assets/css/global.css";
// import "../../public/assets/css/style.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <>
          <meta charSet="UTF-8" />
          <title>Home 7 - Insurin </title>
          <meta
            name="description"
            content="Insurin - Insurance Company HTML Template"
          />
          <meta
            name="keywords"
            content="	accounting, advising, advisory, business, company, consulting, corporate, finance, financial, investments, law, multi-purpose, services, tax help, visual composer"
          />
          <meta name="author" content="Themexriver" />
          <link
            rel="shortcut icon"
            href="/assets/img/logo/ficon.png"
            type="image/x-icon"
          />
          {/* Mobile Specific Meta */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/fontawesome-all.css" />
          <link rel="stylesheet" href="assets/css/flaticon.css" />
          <link rel="stylesheet" href="assets/css/animate.css" />
          <link rel="stylesheet" href="assets/css/video.min.css" />
          <link rel="stylesheet" href="assets/css/slick-theme.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
          <link rel="stylesheet" href="assets/css/jquery-ui.css" />
          <link rel="stylesheet" href="assets/css/nice-select.css" />
          <link rel="stylesheet" href="assets/css/rs6.css" />
          <link rel="stylesheet" href="assets/css/roundslider.css" />
          <link rel="stylesheet" href="assets/css/global.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </>
      </head>
      <body className="insurin-sv-main">
        {children}

        <Script src="assets/js/jquery.min.js"></Script>
        <Script src="assets/js/jquery-ui.min.js"></Script>
        <Script src="assets/js/bootstrap.min.js"></Script>
        <Script src="assets/js/popper.min.js"></Script>
        <Script src="assets/js/appear.js"></Script>
        <Script src="assets/js/slick.js"></Script>
        <Script src="assets/js/wow.min.js"></Script>
        <Script src="assets/js/knob.js"></Script>
        <Script src="assets/js/jquery.filterizr.js"></Script>
        <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="assets/js/rbtools.min.js"></Script>
        <Script src="assets/js/rs6.min.js"></Script>
        <Script src="assets/js/jarallax.js"></Script>
        <Script src="assets/js/jquery.counterup.min.js"></Script>
        <Script src="assets/js/waypoints.min.js"></Script>
        <Script src="assets/js/tilt.jquery.min.js"></Script>
        <Script src="assets/js/isotope.pkgd.min.js"></Script>
        <Script src="assets/js/jquery.marquee.min.js"></Script>
        <Script src="assets/js/roundslider.js"></Script>
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="assets/js/jquery.nice-select.min.js"></Script>
        {/* <Script src="assets/js/Script.js"></Script> */}
        <Script src="assets/script.js"></Script>
      </body>
    </html>
  );
}
