import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">



      {/* HEADER SECTION STARTS */}
      <header
        className="header d-flex flex-wrap align-items-center headroom headroom--not-bottom header--pinned headroom--top"
        data-page="home" data-overlay="true">
        <div className="container d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between"><a
          className="brand header_logo d-flex align-items-center" href="index.html"><span className="logo"><svg
            width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#logoHeader)">
              <circle cx="23.5" cy="23.4998" r="17.5" fill="#EFC368"></circle>
              <path
                d="M9.79512 42.7418V42.7418C9.34023 42.4033 9.31895 41.6825 9.74864 41.1504L20.897 27.3735L21.6772 27.954L11.3571 42.3414C10.9578 42.9017 10.25 43.0802 9.79512 42.7418Z"
                fill="#214842"></path>
              <path
                d="M26.6771 42.8479C24.3476 41.406 22.6473 39.3633 21.68 36.619C21.6593 36.5586 21.6359 36.5018 21.6151 36.4414C21.4922 39.036 20.3226 40.6907 20.2435 42.0699C19.132 40.0735 18.4588 38.1106 18.4647 36.206C18.1821 36.2953 17.9437 36.5019 17.8208 36.958C17.3874 35.131 17.6447 32.9512 18.3642 30.5317C18.3464 30.5407 18.3321 30.5524 18.317 30.5578C16.2065 31.901 14.1964 32.7376 12.3296 32.8201C12.7376 32.5789 12.8705 32.2927 12.875 31.9938C11.0458 32.5244 8.97337 32.4184 6.74791 31.9002C8.04923 31.4476 9.32012 29.8636 11.7803 29.0303C11.6909 29.0245 11.5988 29.0222 11.5182 29.0119C8.64916 28.8206 6.24349 27.758 4.23021 25.933C4.69937 26.0793 5.11342 26.0499 5.44359 25.7948C1.69403 23.2492 0.824471 20.6681 0.188852 18.0841C0.246001 18.1328 0.303978 18.1877 0.364647 18.239C2.42593 19.949 7.42129 20.651 12.0076 22.6794C11.9954 22.659 11.9796 22.6359 11.9709 22.6182C8.85487 17.65 8.34457 13.0834 9.54543 8.78741C9.58318 9.21335 9.74327 9.53553 10.0257 9.75395C11.6092 4.78897 13.794 2.1021 16.3564 0.847511C14.6956 3.40296 20.6028 11.3757 20.0354 18.9763C20.067 18.905 20.0933 18.8408 20.1285 18.7722C21.8813 14.7689 24.9437 11.1591 29.0134 7.86035C28.3949 8.82752 28.0996 9.53433 28.39 10.3354C31.404 6.98018 34.6553 4.90665 38.1701 4.24101C38.4991 7.80318 37.4021 11.5 35.0076 15.3221C35.8577 15.3804 36.4557 14.9017 37.2149 14.0407C35.1295 18.9466 32.4473 22.9381 29.0008 25.7322C29.1119 25.6872 29.2212 25.652 29.3359 25.6097C29.3421 25.6088 29.3448 25.6052 29.3537 25.6007C36.0383 23.3432 44.4319 26.1635 47.0271 24.609L47.0298 24.6054C47.1919 24.5148 47.3285 24.3994 47.444 24.2681C46.9443 27.0771 44.9637 29.9178 40.6276 32.8085C40.9181 33.0162 41.2754 33.084 41.6891 33.0038C37.8727 35.3512 33.3229 36.116 27.6566 34.4662C27.7021 34.5229 27.7477 34.5796 27.7924 34.6301C31.0172 38.5605 33.0746 43.2124 35.3315 44.5604C32.6759 44.6643 29.9551 44.5399 26.4711 41.6346C26.3186 42.0347 26.4036 42.4346 26.6771 42.8479Z"
                fill="#258F67"></path>
              <path
                d="M21.6964 27.3339C21.6964 27.3339 16.6815 25.0813 12.6419 22.5125C9.405 17.4567 8.82341 12.8418 9.98562 8.52346C10.0299 8.95377 10.1971 9.28105 10.4873 9.50533C12.0295 4.51719 14.2143 1.83603 16.8028 0.605255C16.8064 0.60798 7.27498 14.1519 21.6964 27.3339Z"
                fill="#214842"></path>
              <path
                d="M20.7347 26.7685C20.7347 26.7685 18.8112 24.2889 20.2761 18.3905C22.0786 14.3957 25.1468 10.758 29.1883 7.40349C28.563 8.37328 28.2585 9.07826 28.5221 9.86229C31.5371 6.47721 34.7524 4.352 38.1907 3.61065C30.819 11.8745 24.022 19.9355 20.7347 26.7685Z"
                fill="#214842"></path>
              <path
                d="M46.9734 24.4342C38.3251 31.4347 29.6485 31.3625 20.9666 27.3752C22.7954 28.1005 26.1505 27.0664 29.4339 25.6238C29.44 25.6229 29.4427 25.6193 29.4516 25.6147C36.1028 23.294 44.3824 26.0159 46.9734 24.4342Z"
                fill="#214842"></path>
              <path
                d="M35.7432 43.9906C28.1977 39.4093 22.5531 34.0408 20.9998 26.9998C20.9998 26.9998 24.4082 31.2641 28.0546 34.2607C31.3346 38.117 33.4955 42.6236 35.7432 43.9906Z"
                fill="#214842"></path>
              <path
                d="M20.3668 41.3979C19.9237 36.5216 20.2623 31.7313 21.1995 26.9998C21.389 30.1599 21.57 33.3522 21.8533 36.069C21.8345 36.0107 21.8131 35.9559 21.7944 35.8976C21.6233 38.4267 20.4668 40.0586 20.3668 41.3979Z"
                fill="#214842"></path>
              <path
                d="M18.8106 30.5696C16.6844 31.8631 14.6463 32.6483 12.7329 32.6764C13.1445 32.445 13.2725 32.1601 13.2683 31.8585C11.4067 32.3402 9.27681 32.172 6.97768 31.5834C12.1204 30.7173 16.9056 29.3275 21.2743 27.331C20.976 28.0954 19.9814 29.3077 18.8106 30.5696Z"
                fill="#214842"></path>
              <path
                d="M20.9696 27.2397C20.732 27.2913 15.5252 28.3696 11.6631 29.0039C8.78877 28.8184 6.38068 27.7577 4.3675 25.9313C4.83726 26.0771 5.25222 26.0465 5.58362 25.7899C1.83231 23.2444 0.966829 20.6567 0.335772 18.0657C0.392925 18.1144 0.450895 18.1693 0.51157 18.2206C6.50769 23.538 13.1637 27.0346 20.9696 27.2397Z"
                fill="#214842"></path>
              <path
                d="M22.2931 28.0032C21.7944 28.665 20.8543 28.7971 20.1924 28.2984C19.5306 27.7997 19.3985 26.8595 19.8972 26.1977C20.3959 25.5359 21.336 25.4038 21.9979 25.9025C22.6597 26.4012 22.7918 27.3413 22.2931 28.0032Z"
                fill="#214842"></path>
            </g>
            <defs>
              <clipPath id="logoHeader">
                <rect width="48" height="45" fill="white"></rect>
              </clipPath>
            </defs>
          </svg> </span><span className="accent">Herba</span> <span>list</span></a>
          <nav className="header_nav">
            <ul className="header_nav-list">
              <li className="header_nav-list_item dropdown"><a
                className="nav-link dropdown-toggle d-inline-flex align-items-center" href="#"
                data-bs-toggle="dropdown" data-bs-target="#homeMenu" aria-expanded="false"
                aria-controls="homeMenu">Home <i className="icon-caret_down icon"></i></a>
                <div className="dropdown-menu" id="homeMenu">
                  <ul className="dropdown-list">
                    <li className="list-item nav-item active" data-page="home"><a className="dropdown-item"
                      href="index.html">Home 01</a></li>
                    <li className="list-item nav-item" data-page="home2"><a className="dropdown-item"
                      href="index2.html">Home 02</a></li>
                  </ul>
                </div>
              </li>
              <li className="header_nav-list_item dropdown"><a
                className="nav-link dropdown-toggle d-inline-flex align-items-center" href="#"
                data-bs-toggle="dropdown" data-bs-target="#shopMenu" aria-expanded="false"
                aria-controls="shopMenu">Shop <i className="icon-caret_down icon"></i></a>
                <div className="dropdown-menu" id="shopMenu">
                  <ul className="dropdown-list">
                    <li className="list-item nav-item" data-page="shop"><a className="dropdown-item"
                      href="shop.html">Shop 01</a></li>
                    <li className="list-item nav-item" data-page="shop2"><a className="dropdown-item"
                      href="shop2.html">Shop 02</a></li>
                    <li className="list-item nav-item" data-page="product"><a className="dropdown-item"
                      href="product.html">Single Product 01</a></li>
                    <li className="list-item nav-item" data-page="product2"><a className="dropdown-item"
                      href="product2.html">Single Product 02</a></li>
                    <li className="list-item nav-item" data-page="compare"><a className="dropdown-item"
                      href="compare.html">Compare List</a></li>
                  </ul>
                </div>
              </li>
              <li className="header_nav-list_item dropdown"><a
                className="nav-link dropdown-toggle d-inline-flex align-items-center" href="#"
                data-bs-toggle="dropdown" data-bs-target="#newsMenu" aria-expanded="false"
                aria-controls="newsMenu">News <i className="icon-caret_down icon"></i></a>
                <div className="dropdown-menu" id="newsMenu">
                  <ul className="dropdown-list">
                    <li className="list-item nav-item" data-page="news"><a className="dropdown-item"
                      href="news.html">News 01</a></li>
                    <li className="list-item nav-item" data-page="news2"><a className="dropdown-item"
                      href="news2.html">News 02</a></li>
                    <li className="list-item nav-item" data-page="post"><a className="dropdown-item"
                      href="post.html">Single Post 01</a></li>
                    <li className="list-item nav-item" data-page="post2"><a className="dropdown-item"
                      href="post2.html">Single Post 02</a></li>
                  </ul>
                </div>
              </li>
              <li className="header_nav-list_item dropdown"><a
                className="nav-link dropdown-toggle d-inline-flex align-items-center" href="#"
                data-bs-toggle="dropdown" data-bs-target="#pagesMenu" aria-expanded="false"
                aria-controls="pagesMenu">Pages <i className="icon-caret_down icon"></i></a>
                <div className="dropdown-menu" id="pagesMenu">
                  <ul className="dropdown-list">
                    <li className="list-item nav-item" data-page="about"><a className="dropdown-item"
                      href="about.html">About</a></li>
                    <li className="list-item nav-item" data-page="team"><a className="dropdown-item"
                      href="team.html">Team</a></li>
                    <li className="list-item nav-item" data-page="faq"><a className="dropdown-item"
                      href="faq.html">FAQ</a></li>
                    <li className="list-item nav-item" data-page="contacts"><a className="dropdown-item"
                      href="contacts.html">Contacts 01</a></li>
                    <li className="list-item nav-item" data-page="contacts2"><a className="dropdown-item"
                      href="contacts2.html">Contacts 02</a></li>
                    <li className="list-item nav-item" data-page="404"><a className="dropdown-item"
                      href="404.html">Error Page</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav><span className="header_trigger d-inline-flex d-xl-none flex-column justify-content-between"><span
            className="line line--short"></span> <span className="line line"></span> <span
              className="line line--short"></span> <span className="line line"></span></span>
          <div className="header_user d-flex justify-content-end align-items-center">
            <form className="header_user-search" action="#" method="get" data-type="searchForm"><input
              className="header_user-search_field field required" type="text" placeholder="Search..." />
              <button
                className="header_user-search_btn header_user-action d-inline-flex align-items-center justify-content-center"
                type="submit" data-trigger="search"><i className="icon-search"></i></button></form><a
                  className="header_user-action d-inline-flex align-items-center justify-content-center"
                  href="wishlist.html"><i className="icon-heart"></i> </a><a
                    className="header_user-action d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas"><i
                      className="icon-basket"></i></a>
          </div>
        </div>
      </header>



      {/* HEADER SECTION ENDS */}






      {/* MAIN SECTION STARTS */}
      <div>
        <section className="hero">
          <div className="container d-xl-flex align-items-start">
            <div className="hero_about col-xl-6">
              <div className="hero_header">
                <h1 className="hero_header-title">Highest Quality Marijuana Seeds</h1>
                <p className="hero_header-text">Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit
                  amet venenatis. In est ante in nibh mauris cursus mattis. Euismod elementum nisi quis eleifend
                  quam adipiscing</p><a className="hero_header-btn btn" href="shop.html">Our Products</a>
              </div>
              <div className="hero_contacts">
                <p className="hero_contacts-text">Our support team is available 24/7 to resolve any product issues</p>
                <span className="hero_contacts-data d-flex flex-column flex-sm-row align-items-center"><span
                  className="icon d-flex align-items-center justify-content-center"><i className="icon-call"></i>
                </span><span className="d-flex flex-column"><span>Phone number</span> <a className="link"
                  href="tel:+1234567890">+1-202-555-0133</a></span></span>
              </div>
            </div>
            <div className="hero_promo col-xl-6">
              <div className="hero_promo-underlay"></div>
              <div className="hero_promo-underlay--highlight"></div>
              <div className="hero_slider swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper" >
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="2"
                  >
                    {/* <div className="hero_slider-slide_media">
                                <picture>
                                    <source data-srcset="img/index/hero03.webp" srcset="img/index/hero03.webp"
                                        type="image/webp"><img className="lazy" data-src="img/index/hero03.png"
                                        src="img/index/hero03.png" alt="media">
                                </picture>
                            </div> */}
                    <div className="hero_slider-slide_main">
                      <h2 className="title">Northern Lights</h2>
                      <p className="text">Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium
                        lectus quam id leo in vitae.</p>
                      <ul className="list">
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>Sativa-Dominant</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>THC 110.0-160.0mg/g</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>CBD 0.0-1.0mg/g</li>
                      </ul><a className="btn--underline" href="#">About Product</a>
                    </div>
                  </div>
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index="0"
                  >
                    {/* <div className="hero_slider-slide_media">
                                <picture>
                                    <source data-srcset="img/index/hero01.webp" srcset="img/index/hero01.webp"
                                        type="image/webp"><img className="lazy entered loaded"
                                        data-src="img/index/hero01.png" src="img/index/hero01.png" alt="media"
                                        data-ll-status="loaded">
                                </picture>
                            </div> */}
                    <div className="hero_slider-slide_main">
                      <h2 className="title">Purple Hawaiian Haze</h2>
                      <p className="text">Nisl vel pretium lectus quam id leo in vitae. Pellentesque adipiscing
                        commodo elit at imperdiet</p>
                      <ul className="list">
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>Sativa-Dominant</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>THC 110.0-160.0mg/g</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>CBD 0.0-1.0mg/g</li>
                      </ul><a className="btn--underline" href="#">About Product</a>
                    </div>
                  </div>
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide swiper-slide-next"
                    data-swiper-slide-index="1"
                  >
                    {/* <div className="hero_slider-slide_media">
                                <picture>
                                    <source data-srcset="img/index/hero02.webp" srcset="img/index/hero02.webp"
                                        type="image/webp"><img className="lazy entered loaded"
                                        data-src="img/index/hero02.png" src="img/index/hero02.png" alt="media"
                                        data-ll-status="loaded">
                                </picture>
                            </div> */}
                    <div className="hero_slider-slide_main">
                      <h2 className="title">Sour Diesel</h2>
                      <p className="text">Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium
                        lectus quam id leo in vitae.</p>
                      <ul className="list">
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>Sativa-Dominant</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>THC 110.0-160.0mg/g</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>CBD 0.0-1.0mg/g</li>
                      </ul><a className="btn--underline" href="#">About Product</a>
                    </div>
                  </div>
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide swiper-slide-duplicate-prev"
                    data-swiper-slide-index="2"
                  >
                    {/* <div className="hero_slider-slide_media">
                                <picture>
                                    <source data-srcset="img/index/hero03.webp" srcset="img/index/hero03.webp"
                                        type="image/webp"><img className="lazy entered loaded"
                                        data-src="img/index/hero03.png" src="img/index/hero03.png" alt="media"
                                        data-ll-status="loaded">
                                </picture>
                            </div> */}
                    <div className="hero_slider-slide_main">
                      <h2 className="title">Northern Lights</h2>
                      <p className="text">Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium
                        lectus quam id leo in vitae.</p>
                      <ul className="list">
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>Sativa-Dominant</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>THC 110.0-160.0mg/g</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>CBD 0.0-1.0mg/g</li>
                      </ul><a className="btn--underline" href="#">About Product</a>
                    </div>
                  </div>
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="0"
                  >
                    {/* <div className="hero_slider-slide_media">
                                <picture>
                                    <source data-srcset="img/index/hero01.webp" srcset="img/index/hero01.webp"
                                        type="image/webp"><img className="lazy" data-src="img/index/hero01.png"
                                        src="img/index/hero01.png" alt="media">
                                </picture>
                            </div> */}
                    <div className="hero_slider-slide_main">
                      <h2 className="title">Purple Hawaiian Haze</h2>
                      <p className="text">Nisl vel pretium lectus quam id leo in vitae. Pellentesque adipiscing
                        commodo elit at imperdiet</p>
                      <ul className="list">
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>Sativa-Dominant</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>THC 110.0-160.0mg/g</li>
                        <li
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center"><i
                            className="icon-check"></i> </span>CBD 0.0-1.0mg/g</li>
                      </ul><a className="btn--underline" href="#">About Product</a>
                    </div>
                  </div>
                </div>
                <div
                  className="hero-pagination swiper-pagination d-sm-flex flex-column swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active">01</span><span
                    className="swiper-pagination-bullet">02</span><span className="swiper-pagination-bullet">03</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured section--nopb">
          <div className="container">
            <div className="featured_header">
              <h2 className="featured_header-title">Featured Products</h2>
              <p className="featured_header-text">Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas
                maecenas pharetra convallis posuere</p>
            </div>
            <div className="products_list d-grid">
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/wishlist/04.webp" srcset="img/wishlist/04.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/wishlist/04.jpg" src="img/wishlist/04.jpg" alt="Tangerine Dream"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">Tangerine Dream</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">117.00-23.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price">$5.88</span></div><a className="btn btn--green"
                      href="#">Add to Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/wishlist/03.webp" srcset="img/wishlist/03.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/wishlist/03.jpg" src="img/wishlist/03.jpg" alt="Tangerine Dream"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">Tangerine Dream</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">117.00-23.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price">$7.97</span></div><a className="btn btn--green"
                      href="#">Add to Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/wishlist/01.webp" srcset="img/wishlist/01.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/wishlist/01.jpg" src="img/wishlist/01.jpg" alt="High CBD 50 Oil"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div><span className="label">Sale</span>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">High CBD 50 Oil</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">117.00-23.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price price--old">$7.97</span> <span
                      className="price price--new">$5.99</span></div><a className="btn btn--green" href="#">Add to
                        Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/index/04.webp" srcset="img/index/04.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/index/04.jpg" src="img/index/04.jpg" alt="CBD Plus Formula Oil"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div><span className="label">Sale</span>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">CBD Plus Formula Oil</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">117.00-23.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price price--old">$9.97</span> <span
                      className="price price--new">$7.99</span></div><a className="btn btn--green" href="#">Add to
                        Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/index/05.webp" srcset="img/index/05.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/index/05.jpg" src="img/index/05.jpg" alt="Tangerine Dream"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div><span className="label">Sale</span>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">Tangerine Dream</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">117.00-23.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price price--old">$12.15</span> <span
                      className="price price--new">$7.97</span></div><a className="btn btn--green" href="#">Add to
                        Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-item">
                <div className="products_list-item_wrapper d-flex flex-column">
                  <div className="media"><a href="product.html" target="_blank" rel="noopener norefferer">
                    {/* <picture>
                                    <source data-srcset="img/index/06.webp" srcset="img/index/06.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/index/06.jpg" src="img/index/06.jpg" alt="Limelight (Ultra Sour)"
                                        data-ll-status="loaded">
                                </picture> */}
                  </a>
                    <div className="overlay d-flex justify-content-between align-items-start">
                      <div className="action d-flex flex-column"><a
                        className="action_link d-flex align-items-center justify-content-center" href="#"
                        data-trigger="compare"><i className="icon-compare"></i> </a><a
                          className="action_link d-flex align-items-center justify-content-center" href="#"
                          data-role="wishlist"><i className="icon-heart"></i></a></div>
                    </div>
                  </div>
                  <div className="main d-flex flex-column align-items-center justify-content-between">
                    <div className="main_rating">
                      <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                        <li className="main_rating-stars_star"><i className="icon-star_fill"></i></li>
                      </ul>
                    </div><a className="main_title" href="product.html" target="_blank"
                      rel="noopener norefferer">Limelight (Ultra Sour)</a>
                    <ul className="main_table d-flex flex-column align-items-center">
                      <li className="list-item"><span className="property">THC</span> <span
                        className="value">18.00-25.00%</span></li>
                      <li className="list-item"><span className="property">CBD</span> <span
                        className="value">0.00-1.00%</span></li>
                    </ul>
                    <div className="main_price"><span className="price">$10.15</span></div><a className="btn btn--green"
                      href="#">Add to Cart</a>
                  </div>
                </div>
              </div>
              <div className="products_list-promo"><span className="overlay"></span>
                <div className="content">
                  <h3 className="products_list-promo_title">Best Offers for Customers</h3>
                  <p className="products_list-promo_text">Shop our selection of vape carts, available in a range of
                    strains, sizes, and formats, including true-to-flower and larger cartridges.</p>
                  <div
                    className="products_list-promo_timer timer d-flex justify-content-center justify-content-sm-start">
                    <div className="timer_block d-flex flex-column justify-content-center"><span
                      className="timer_block-number" id="days">00</span> days</div>
                    <div className="timer_block d-flex flex-column justify-content-center"><span
                      className="timer_block-number" id="hours">00</span> hours</div>
                    <div className="timer_block d-flex flex-column justify-content-center"><span
                      className="timer_block-number" id="minutes">00</span> mins</div>
                    <div className="timer_block d-flex flex-column justify-content-center"><span
                      className="timer_block-number" id="seconds">00</span> secs</div>
                  </div>
                </div>
              </div>
            </div><a className="featured_btn btn" href="shop.html">All Products</a>
          </div>
        </section>

        <section className="about section--nopb">
          <div className="container">
            <div className="about_main d-lg-flex justify-content-between">
              <div className="about_main-content col-lg-6 col-xl-auto">
                <h2 className="about_main-content_header">Our knowledgeable team can help you design experiences
                  tailored to your needs by accessing one of the flower selections</h2>
                <p className="about_main-content_text">Elementum eu facilisis sed odio morbi quis commodo odio. Mauris
                  rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit amet nulla facilisi morbi
                  tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra
                  convallis posuere</p>
              </div>
              <div className="about_main-media">
                {/* <picture>
                        <source data-srcset="img/index/about.webp" srcset="img/index/about.webp" type="image/webp"><img
                            className="lazy entered loaded" data-src="img/index/about.jpg" src="img/index/about.jpg"
                            alt="media" data-ll-status="loaded">
                    </picture> */}
              </div>
            </div>
            <ul className="about_numbers d-flex flex-wrap">
              <li className="about_numbers-group col-sm-6 col-lg-3" data-order="1">
                <div className="wrapper d-flex flex-column align-items-center align-items-sm-start"><span
                  className="countNum number d-flex align-items-center secondary" data-suffix="+"
                  data-value="180">180+</span>
                  <p className="number-label">New products to explore. Arcu vitae elementum curabitur vitae nunc sed
                  </p>
                </div>
              </li>
              <li className="about_numbers-group col-sm-6 col-lg-3" data-order="2">
                <div className="wrapper d-flex flex-column align-items-center align-items-sm-start"><span
                  className="countNum number d-flex align-items-center secondary" data-suffix="X"
                  data-value="3">3X</span>
                  <p className="number-label">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae
                    nunc</p>
                </div>
              </li>
              <li className="about_numbers-group col-sm-6 col-lg-3" data-order="3">
                <div className="wrapper d-flex flex-column align-items-center align-items-sm-start"><span
                  className="countNum number d-flex align-items-center secondary" data-suffix="%"
                  data-value="100">100%</span>
                  <p className="number-label">Mauris a diam maecenas sed enim ut sem curabitur vitae nunc sed</p>
                </div>
              </li>
              <li className="about_numbers-group col-sm-6 col-lg-3" data-order="4">
                <div className="wrapper d-flex flex-column align-items-center align-items-sm-start"><span
                  className="countNum number d-flex align-items-center secondary" data-suffix="K"
                  data-value="11">11K</span>
                  <p className="number-label">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae
                    nunc</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="product section">
          <div className="container d-flex flex-column flex-lg-row">
            <div className="product_media">
              {/* <picture>
                    <source data-srcset="img/index/product.webp" srcset="img/index/product.webp" type="image/webp"><img
                        className="lazy entered loaded" data-src="img/index/product.jpg" src="img/index/product.jpg"
                        alt="CBD Facial Serum: Anti-Aging + Daily Moisturizer" data-ll-status="loaded">
                </picture> */}
            </div>
            <div className="product_main col-lg-6"><a className="product_main-title" href="product.html" target="_blank"
              rel="noopener norefferer">CBD Facial Serum: Anti-Aging + Daily Moisturizer</a>
              <div className="product_main-rating d-flex align-items-center">
                <ul className="product_main-rating_stars d-flex align-items-center accent">
                  <li className="star"><i className="icon-star_fill"></i></li>
                  <li className="star"><i className="icon-star_fill"></i></li>
                  <li className="star"><i className="icon-star_fill"></i></li>
                  <li className="star"><i className="icon-star_fill"></i></li>
                  <li className="star"><i className="icon-star_fill"></i></li>
                </ul><a className="product_main-rating_amount" href="#">(12)</a>
              </div>
              <p className="product_main-text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc
                sed. Mauris a diam maecenas sed enim ut sem. Non enim praesent elementum facilisis. Sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum</p>
              <ul className="product_main-list">
                <li className="list-item d-flex align-items-center"><i
                  className="icon-check icon d-flex align-items-center justify-content-center"></i>
                  Sativa-Dominant</li>
                <li className="list-item d-flex align-items-center"><i
                  className="icon-check icon d-flex align-items-center justify-content-center"></i> THC
                  110.0-160.0mg/g</li>
                <li className="list-item d-flex align-items-center"><i
                  className="icon-check icon d-flex align-items-center justify-content-center"></i> Euismod
                  elementum</li>
                <li className="list-item d-flex align-items-center"><i
                  className="icon-check icon d-flex align-items-center justify-content-center"></i> CBD
                  0.0-1.0mg/g</li>
              </ul>
              <div className="product_main-action d-flex align-items-center"><span className="price">$7.97</span> <a
                className="btn" href="#">Add to Cart</a></div>
            </div>
          </div>
        </div>
        <section className="info section">
          <div className="info_deco">
            <div className="info_deco-wrapper">
              {/* <picture>
                    <source data-srcset="img/banners/leaf--left.webp" srcset="img/banners/leaf--left.webp"
                        type="image/webp"><img className="lazy leaf leaf--left entered loaded"
                        data-src="img/banners/leaf--left.png" src="img/banners/leaf--left.png" alt="deco"
                        data-ll-status="loaded">
                </picture> */}
            </div>
            <div className="info_deco-wrapper">
              {/* <picture>
                    <source data-srcset="img/banners/leaf--right.webp" srcset="img/banners/leaf--right.webp"
                        type="image/webp"><img className="lazy leaf leaf--right entered loaded"
                        data-src="img/banners/leaf--right.png" src="img/banners/leaf--right.png" alt="deco"
                        data-ll-status="loaded">
                </picture> */}
            </div>
          </div>
          <div className="info_highlight"><span className="underlay underlay--left"><span
            className="underlay_circle underlay_circle--accent"></span> </span><span
              className="underlay underlay--right"><span
                className="underlay_circle underlay_circle--small underlay_circle--green"></span> <span
                  className="underlay_circle underlay_circle--big underlay_circle--green"></span></span></div>
          <div className="container">
            <div className="info_content d-flex flex-column align-items-center"><span className="info_content-logo"><svg
              width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#infoLogo)">
                <circle cx="23.5" cy="23.4998" r="17.5" fill="#EFC368"></circle>
                <path
                  d="M9.79512 42.7418V42.7418C9.34023 42.4033 9.31895 41.6825 9.74864 41.1504L20.897 27.3735L21.6772 27.954L11.3571 42.3414C10.9578 42.9017 10.25 43.0802 9.79512 42.7418Z"
                  fill="#214842"></path>
                <path
                  d="M26.6771 42.8479C24.3476 41.406 22.6473 39.3633 21.68 36.619C21.6593 36.5586 21.6359 36.5018 21.6151 36.4414C21.4922 39.036 20.3226 40.6907 20.2435 42.0699C19.132 40.0735 18.4588 38.1106 18.4647 36.206C18.1821 36.2953 17.9437 36.5019 17.8208 36.958C17.3874 35.131 17.6447 32.9512 18.3642 30.5317C18.3464 30.5407 18.3321 30.5524 18.317 30.5578C16.2065 31.901 14.1964 32.7376 12.3296 32.8201C12.7376 32.5789 12.8705 32.2927 12.875 31.9938C11.0458 32.5244 8.97337 32.4184 6.74791 31.9002C8.04923 31.4476 9.32012 29.8636 11.7803 29.0303C11.6909 29.0245 11.5988 29.0222 11.5182 29.0119C8.64916 28.8206 6.24349 27.758 4.23021 25.933C4.69937 26.0793 5.11342 26.0499 5.44359 25.7948C1.69403 23.2492 0.824471 20.6681 0.188852 18.0841C0.246001 18.1328 0.303978 18.1877 0.364647 18.239C2.42593 19.949 7.42129 20.651 12.0076 22.6794C11.9954 22.659 11.9796 22.6359 11.9709 22.6182C8.85487 17.65 8.34457 13.0834 9.54543 8.78741C9.58318 9.21335 9.74327 9.53553 10.0257 9.75395C11.6092 4.78897 13.794 2.1021 16.3564 0.847511C14.6956 3.40296 20.6028 11.3757 20.0354 18.9763C20.067 18.905 20.0933 18.8408 20.1285 18.7722C21.8813 14.7689 24.9437 11.1591 29.0134 7.86035C28.3949 8.82752 28.0996 9.53433 28.39 10.3354C31.404 6.98018 34.6553 4.90665 38.1701 4.24101C38.4991 7.80318 37.4021 11.5 35.0076 15.3221C35.8577 15.3804 36.4557 14.9017 37.2149 14.0407C35.1295 18.9466 32.4473 22.9381 29.0008 25.7322C29.1119 25.6872 29.2212 25.652 29.3359 25.6097C29.3421 25.6088 29.3448 25.6052 29.3537 25.6007C36.0383 23.3432 44.4319 26.1635 47.0271 24.609L47.0298 24.6054C47.1919 24.5148 47.3285 24.3994 47.444 24.2681C46.9443 27.0771 44.9637 29.9178 40.6276 32.8085C40.9181 33.0162 41.2754 33.084 41.6891 33.0038C37.8727 35.3512 33.3229 36.116 27.6566 34.4662C27.7021 34.5229 27.7477 34.5796 27.7924 34.6301C31.0172 38.5605 33.0746 43.2124 35.3315 44.5604C32.6759 44.6643 29.9551 44.5399 26.4711 41.6346C26.3186 42.0347 26.4036 42.4346 26.6771 42.8479Z"
                  fill="#258F67"></path>
                <path
                  d="M21.6964 27.3339C21.6964 27.3339 16.6815 25.0813 12.6419 22.5125C9.405 17.4567 8.82341 12.8418 9.98562 8.52346C10.0299 8.95377 10.1971 9.28105 10.4873 9.50533C12.0295 4.51719 14.2143 1.83603 16.8028 0.605255C16.8064 0.60798 7.27498 14.1519 21.6964 27.3339Z"
                  fill="#214842"></path>
                <path
                  d="M20.7347 26.7685C20.7347 26.7685 18.8112 24.2889 20.2761 18.3905C22.0786 14.3957 25.1468 10.758 29.1883 7.40349C28.563 8.37328 28.2585 9.07826 28.5221 9.86229C31.5371 6.47721 34.7524 4.352 38.1907 3.61065C30.819 11.8745 24.022 19.9355 20.7347 26.7685Z"
                  fill="#214842"></path>
                <path
                  d="M46.9734 24.4342C38.3251 31.4347 29.6485 31.3625 20.9666 27.3752C22.7954 28.1005 26.1505 27.0664 29.4339 25.6238C29.44 25.6229 29.4427 25.6193 29.4516 25.6147C36.1028 23.294 44.3824 26.0159 46.9734 24.4342Z"
                  fill="#214842"></path>
                <path
                  d="M35.7432 43.9906C28.1977 39.4093 22.5531 34.0408 20.9998 26.9998C20.9998 26.9998 24.4082 31.2641 28.0546 34.2607C31.3346 38.117 33.4955 42.6236 35.7432 43.9906Z"
                  fill="#214842"></path>
                <path
                  d="M20.3668 41.3979C19.9237 36.5216 20.2623 31.7313 21.1995 26.9998C21.389 30.1599 21.57 33.3522 21.8533 36.069C21.8345 36.0107 21.8131 35.9559 21.7944 35.8976C21.6233 38.4267 20.4668 40.0586 20.3668 41.3979Z"
                  fill="#214842"></path>
                <path
                  d="M18.8106 30.5696C16.6844 31.8631 14.6463 32.6483 12.7329 32.6764C13.1445 32.445 13.2725 32.1601 13.2683 31.8585C11.4067 32.3402 9.27681 32.172 6.97768 31.5834C12.1204 30.7173 16.9056 29.3275 21.2743 27.331C20.976 28.0954 19.9814 29.3077 18.8106 30.5696Z"
                  fill="#214842"></path>
                <path
                  d="M20.9696 27.2397C20.732 27.2913 15.5252 28.3696 11.6631 29.0039C8.78877 28.8184 6.38068 27.7577 4.3675 25.9313C4.83726 26.0771 5.25222 26.0465 5.58362 25.7899C1.83231 23.2444 0.966829 20.6567 0.335772 18.0657C0.392925 18.1144 0.450895 18.1693 0.51157 18.2206C6.50769 23.538 13.1637 27.0346 20.9696 27.2397Z"
                  fill="#214842"></path>
                <path
                  d="M22.2931 28.0032C21.7944 28.665 20.8543 28.7971 20.1924 28.2984C19.5306 27.7997 19.3985 26.8595 19.8972 26.1977C20.3959 25.5359 21.336 25.4038 21.9979 25.9025C22.6597 26.4012 22.7918 27.3413 22.2931 28.0032Z"
                  fill="#214842"></path>
              </g>
              <defs>
                <clipPath id="infoLogo">
                  <rect width="48" height="45" fill="white"></rect>
                </clipPath>
              </defs>
            </svg></span>
              <h2 className="info_content-header">Our doctors recommend the best THC to CBD ratio to look for in a
                marijuana strain and suggest the recommended dosage and route of administration</h2>
            </div>
          </div>
        </section>
        <section className="effects section--nopb"><span className="effects_underlay"><span
          className="effects_underlay-circle effects_underlay-circle--accent"></span> <span
            className="effects_underlay-circle effects_underlay-circle--green"></span></span>
          <div className="container d-md-flex flex-wrap flex-xxl-nowrap justify-content-between align-items-center">
            <div className="effects_header d-lg-flex flex-xxl-column col-md-12 col-xxl-auto">
              <div className="main col-lg-6 col-xl-12">
                <h2 className="effects_header-title">Therapeutic Effects of Cannabis and Cannabinoids</h2>
                <p className="effects_header-text">Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris
                  a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere</p><a
                    className="effects_header-btn btn" href="shop.html">Our Products</a>
              </div><span className="effects_header-formula col-lg-6 col-xl-12"><svg width="281" height="157"
                viewBox="0 0 281 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M230.627 115.958C230.309 115.76 229.952 115.76 229.635 115.958L208.956 127.805L188.317 115.879C188 115.72 187.643 115.76 187.325 115.918C187.246 115.958 187.166 115.998 187.127 116.077L166.647 127.805L146.484 116.117L146.524 91.8672L125.369 79.6236V56.9591C125.369 56.4044 124.932 55.9685 124.377 55.9685C123.821 55.9685 123.384 56.4044 123.384 56.9591V79.6632L103.143 91.2728L82.98 79.584L83.0197 54.8987L61.9046 42.6551V19.9906C61.9046 19.4359 61.468 19 60.9124 19C60.3567 19 59.9201 19.4359 59.9201 19.9906V42.6551L38.7653 54.8194L38.7256 80.3368L59.9598 92.62L59.9201 115.76H37.6143C37.0587 115.76 36.6221 116.196 36.6221 116.751C36.6221 117.305 37.0587 117.741 37.6143 117.741H59.9598V140.009C59.9598 140.564 60.3964 141 60.9521 141C61.5077 141 61.9443 140.564 61.9443 140.009V116.751C61.9443 116.711 61.9344 116.671 61.9245 116.632C61.9145 116.592 61.9046 116.552 61.9046 116.513L61.9443 92.937L82.1069 81.367L102.23 93.0162L102.19 116.235L95.919 119.841L96.7128 121.664L103.262 117.9L124.337 130.104L124.853 129.787V129.826L145.611 117.939L166.17 129.826C166.488 129.985 166.845 129.985 167.163 129.826L187.921 117.939L208.48 129.826C208.639 129.905 208.797 129.945 208.996 129.945C209.155 129.945 209.353 129.905 209.472 129.826L230.151 117.979L245.59 127.251L246.622 125.547L230.627 115.958ZM40.6614 56.4608L60.6614 45L80.6221 56.5392L80.5827 79.5392L60.5827 91L40.6221 79.4608L40.6614 56.4608ZM123.661 82L103.661 93.4608L103.622 116.461L123.583 128L143.583 116.539L143.622 93.5392L123.661 82Z"
                  fill="currentColor"></path>
                <path
                  d="M46.3933 12.8228C45.3218 12.2291 44.4487 11.398 43.8534 10.369C43.2581 9.30048 42.9406 8.15276 42.9406 6.84674C42.9406 5.54071 43.2581 4.35342 43.8534 3.32443C44.4487 2.25586 45.3218 1.46433 46.3933 0.870683C47.4649 0.277036 48.6951 0 50.0445 0C51.0366 0 51.9891 0.158306 52.8225 0.514495C53.6956 0.831107 54.41 1.3456 55.0053 1.97883L54.0925 2.88909C53.0209 1.82052 51.7113 1.26645 50.0842 1.26645C49.0126 1.26645 48.0205 1.50391 47.1474 2.0184C46.2743 2.49332 45.5599 3.16612 45.0837 4.0368C44.5678 4.86791 44.3296 5.85732 44.3296 6.88631C44.3296 7.95488 44.5678 8.90471 45.0837 9.73582C45.5996 10.5669 46.2743 11.2397 47.1474 11.7542C48.0205 12.2291 49.0126 12.5062 50.0842 12.5062C51.7113 12.5062 53.0606 11.9521 54.0925 10.8835L55.0053 11.7938C54.41 12.427 53.6956 12.9415 52.8225 13.2581C51.9494 13.6143 51.0366 13.7726 50.0048 13.7726C48.6554 13.6935 47.4649 13.4164 46.3933 12.8228Z"
                  fill="currentColor"></path>
                <path
                  d="M69.4114 0.0395508V13.5747H67.9827V7.32163H59.4898V13.5747H58.0611V0.0395508H59.4898V6.05518H67.9827V0.0395508H69.4114Z"
                  fill="currentColor"></path>
                <path
                  d="M77.1502 14.6037C77.6661 15.1182 77.9439 15.7514 77.9439 16.543C77.9439 17.097 77.8249 17.6115 77.5471 18.0469C77.2693 18.4822 76.8724 18.8384 76.3565 19.0759C75.8406 19.3133 75.1659 19.4716 74.4118 19.4716C73.6975 19.4716 73.0228 19.3529 72.3878 19.1154C71.7529 18.878 71.2369 18.6009 70.8798 18.2052L71.356 17.4136C71.6735 17.7302 72.11 18.0073 72.6656 18.2447C73.2213 18.4426 73.7769 18.5614 74.4118 18.5614C75.2056 18.5614 75.8406 18.4031 76.2771 18.0469C76.7137 17.6907 76.9518 17.2158 76.9518 16.6221C76.9518 16.0285 76.7137 15.5535 76.2771 15.1974C75.8406 14.8412 75.1659 14.6829 74.2928 14.6829H73.5784V13.9309L76.2771 10.5273H71.2766V9.61707H77.5868V10.3294L74.8087 13.8122C75.8406 13.8518 76.6343 14.1288 77.1502 14.6037Z"
                  fill="currentColor"></path>
                <path
                  d="M249.032 141.526C247.96 140.932 247.087 140.101 246.492 139.072C245.896 138.003 245.579 136.856 245.579 135.549C245.579 134.243 245.896 133.056 246.492 132.027C247.087 130.959 247.96 130.167 249.032 129.573C250.103 128.98 251.333 128.703 252.683 128.703C253.675 128.703 254.627 128.861 255.461 129.217C256.334 129.534 257.048 130.048 257.644 130.682L256.731 131.592C255.659 130.523 254.35 129.969 252.723 129.969C251.651 129.969 250.659 130.207 249.786 130.721C248.913 131.196 248.198 131.869 247.722 132.74C247.206 133.571 246.968 134.56 246.968 135.589C246.968 136.658 247.206 137.607 247.722 138.439C248.238 139.27 248.913 139.942 249.786 140.457C250.659 140.932 251.651 141.209 252.723 141.209C254.35 141.209 255.699 140.655 256.731 139.586L257.644 140.497C257.048 141.13 256.334 141.644 255.461 141.961C254.588 142.317 253.675 142.475 252.643 142.475C251.333 142.396 250.143 142.119 249.032 141.526Z"
                  fill="currentColor"></path>
                <path
                  d="M272.089 128.742V142.277H270.661V136.024H262.168V142.277H260.739V128.742H262.168V134.758H270.661V128.742H272.089Z"
                  fill="currentColor"></path>
                <path
                  d="M279.828 143.306C280.344 143.821 280.622 144.454 280.622 145.246C280.622 145.8 280.503 146.314 280.225 146.75C279.947 147.185 279.55 147.541 279.035 147.779C278.519 148.016 277.844 148.174 277.09 148.174C276.376 148.174 275.701 148.056 275.066 147.818C274.431 147.581 273.915 147.304 273.558 146.908L274.034 146.116C274.352 146.433 274.788 146.71 275.344 146.948C275.899 147.145 276.455 147.264 277.09 147.264C277.884 147.264 278.519 147.106 278.955 146.75C279.392 146.393 279.63 145.919 279.63 145.325C279.63 144.731 279.392 144.256 278.955 143.9C278.519 143.544 277.844 143.386 276.971 143.386H276.257V142.634L278.955 139.23H273.955V138.32H280.265V139.032L277.487 142.515C278.519 142.555 279.273 142.832 279.828 143.306Z"
                  fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M107.521 47.6388C108.108 48.6905 108.968 49.54 110.024 50.1468C111.119 50.7535 112.332 51.0367 113.622 50.9963C114.952 50.9963 116.164 50.7131 117.22 50.1063C118.276 49.4995 119.136 th48.6501 119.723 47.5983C120.309 46.5466 120.622 45.333 120.622 43.9982C120.622 42.6633 120.348 41.4902 119.723 40.398C119.136 39.3462 118.276 38.4968 117.22 37.89C116.125 37.2832 114.952 37 113.622 37C112.292 37 111.119 37.3237 110.024 37.9304C108.968 38.5372 108.108 39.3867 107.521 40.4384C106.935 41.4902 106.622 42.7037 106.622 44.0386C106.622 45.3735 106.935 46.587 107.521 47.6388ZM118.896 46.3275C118.438 47.1796 117.789 47.8381 116.948 48.3029C116.108 48.7677 115.192 49 114.16 49C113.129 49 112.174 48.7677 111.334 48.3029C110.494 47.8381 109.844 47.1796 109.348 46.3275C108.851 45.4754 108.622 44.5458 108.622 43.5C108.622 42.4543 108.851 41.5247 109.348 40.6726C109.844 39.8205 110.494 39.162 111.334 38.6972C112.174 38.2324 113.129 38 114.16 38C115.192 38 116.108 38.2324 116.948 38.6972C117.789 39.162 118.438 39.8205 118.896 40.6726C119.393 41.5247 119.622 42.4543 119.622 43.5C119.622 44.5458 119.355 45.4754 118.896 46.3275Z"
                  fill="currentColor"></path>
                <path
                  d="M135.529 37.004V50.5392H134.1V44.2861H125.607V50.5392H124.179V37.004H125.607V43.0197H134.1V37.004H135.529Z"
                  fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M65.5215 126.632C66.1081 127.683 66.9684 128.532 68.0243 129.139C69.1193 129.745 70.2925 130.069 71.6221 129.988C72.9517 129.988 74.164 129.705 75.2198 129.098C76.2757 128.492 77.0969 127.683 77.7226 126.592C78.3092 125.541 78.6221 124.328 78.6221 122.994C78.6221 121.66 78.3483 120.487 77.7226 119.396C77.136 118.345 76.2757 117.496 75.2198 116.889C74.1249 116.283 72.9517 116 71.6221 116C70.2925 116 69.1193 116.323 68.0243 116.93C66.9684 117.536 66.1081 118.385 65.5215 119.436C64.9349 120.487 64.6221 121.7 64.6221 123.034C64.6221 124.368 64.9349 125.581 65.5215 126.632ZM76.8964 125.327C76.438 126.18 75.7887 126.838 74.9485 127.303C74.1082 127.768 73.1533 128 72.1603 128C71.129 128 70.1742 127.768 69.3339 127.303C68.4936 126.838 67.8443 126.18 67.3478 125.327C66.8512 124.475 66.6221 123.546 66.6221 122.5C66.6221 121.454 66.8512 120.525 67.3478 119.673C67.8443 118.82 68.4936 118.162 69.3339 117.697C70.1742 117.232 71.129 117 72.1603 117C73.1915 117 74.1082 117.232 74.9485 117.697C75.7887 118.162 76.438 118.82 76.8964 119.673C77.3929 120.525 77.6221 121.454 77.6221 122.5C77.6221 123.546 77.3547 124.475 76.8964 125.327Z"
                  fill="currentColor"></path>
                <path
                  d="M93.5407 115.84V129.376H92.112V123.123H83.6191V129.376H82.1904V115.84H83.6191V121.856H92.112V115.84H93.5407Z"
                  fill="currentColor"></path>
                <path
                  d="M11.3503 109.864V123.4H9.92158V117.146H1.42871V123.4H0V109.864H1.42871V115.88H9.92158V109.864H11.3503Z"
                  fill="currentColor"></path>
                <path
                  d="M19.7241 123.597C20.24 124.072 20.4781 124.706 20.4781 125.458C20.4781 125.972 20.3591 126.447 20.0813 126.882C19.8035 127.318 19.4463 127.634 18.9304 127.872C18.4144 128.109 17.8192 128.228 17.0651 128.228C16.3904 128.228 15.7555 128.109 15.1602 127.911C14.5649 127.674 14.0886 127.397 13.6918 127.041L14.168 126.289C14.4855 126.605 14.8824 126.882 15.3983 127.08C15.9142 127.278 16.4698 127.397 17.0651 127.397C17.8192 127.397 18.4144 127.238 18.851 126.882C19.2875 126.566 19.486 126.091 19.486 125.497C19.486 124.903 19.2875 124.468 18.851 124.152C18.4144 123.835 17.8192 123.677 16.9461 123.677H16.2714V122.964L18.851 119.719H14.0489V118.848H20.0813V119.521L17.4223 122.845C18.4541 122.845 19.2082 123.123 19.7241 123.597Z"
                  fill="currentColor"></path>
                <path
                  d="M26.0343 122.608C24.9627 122.014 24.0896 121.183 23.4943 120.154C22.899 119.086 22.5815 117.938 22.5815 116.632C22.5815 115.326 22.899 114.139 23.4943 113.11C24.0896 112.041 24.9627 111.25 26.0343 110.656C27.1058 110.062 28.3361 109.785 29.6854 109.785C30.6776 109.785 31.63 109.944 32.4634 110.3C33.3365 110.616 34.0509 111.131 34.6462 111.764L33.7334 112.674C32.6619 111.606 31.3522 111.052 29.7251 111.052C28.6536 111.052 27.6614 111.289 26.7883 111.804C25.9152 112.279 25.2008 112.951 24.7246 113.822C24.2087 114.653 23.9706 115.643 23.9706 116.672C23.9706 117.74 24.2087 118.69 24.7246 119.521C25.2405 120.392 25.9152 121.025 26.7883 121.54C27.6614 122.014 28.6536 122.291 29.7251 122.291C31.3522 122.291 32.7016 121.737 33.7334 120.669L34.6462 121.579C34.0509 122.212 33.3365 122.727 32.4634 123.043C31.5903 123.4 30.6776 123.558 29.6457 123.558C28.3361 123.518 27.1058 123.202 26.0343 122.608Z"
                  fill="currentColor"></path>
                <path
                  d="M54.41 138.636V152.172H52.9813V145.919H44.4884V152.172H43.0597V138.636H44.4884V144.652H52.9813V138.636H54.41Z"
                  fill="currentColor"></path>
                <path
                  d="M62.7838 152.37C63.2997 152.844 63.5378 153.478 63.5378 154.23C63.5378 154.744 63.4188 155.219 63.141 155.654C62.8632 156.05 62.506 156.406 61.9901 156.644C61.4741 156.881 60.8788 157 60.1248 157C59.4501 157 58.8152 156.881 58.2199 156.683C57.6246 156.446 57.1483 156.169 56.7515 155.813L57.2277 155.061C57.5452 155.377 57.9421 155.654 58.458 155.852C58.9739 156.05 59.5295 156.169 60.1248 156.169C60.8788 156.169 61.4741 156.011 61.9107 155.654C62.3472 155.338 62.5457 154.863 62.5457 154.269C62.5457 153.676 62.3472 153.24 61.9107 152.924C61.4741 152.607 60.8788 152.449 60.0057 152.449H59.3311V151.736L61.9107 148.491H57.1086V147.62H63.141V148.293L60.482 151.618C61.5138 151.618 62.2679 151.895 62.7838 152.37Z"
                  fill="currentColor"></path>
                <path
                  d="M69.0939 151.38C68.0224 150.787 67.1493 149.955 66.554 148.926C65.9587 147.858 65.6412 146.71 65.6412 145.404C65.6412 144.098 65.9587 142.911 66.554 141.882C67.1493 140.813 68.0224 140.022 69.0939 139.428C70.1655 138.834 71.3958 138.557 72.7451 138.557C73.7372 138.557 74.6897 138.716 75.5231 139.072C76.3962 139.388 77.1106 139.903 77.7059 140.536L76.7931 141.446C75.7216 140.378 74.4119 139.824 72.7848 139.824C71.7132 139.824 70.7211 140.061 69.848 140.576C68.9749 141.051 68.2605 141.723 67.7843 142.594C67.2684 143.425 67.0303 144.415 67.0303 145.444C67.0303 146.512 67.2684 147.462 67.7843 148.293C68.3002 149.164 68.9749 149.797 69.848 150.312C70.7211 150.787 71.7132 151.064 72.7848 151.064C74.4119 151.064 75.7612 150.509 76.7931 149.441L77.7059 150.351C77.1106 150.984 76.3962 151.499 75.5231 151.816C74.65 152.172 73.7372 152.33 72.7054 152.33C71.3958 152.29 70.1655 151.974 69.0939 151.38Z"
                  fill="currentColor"></path>
              </svg></span>
            </div>
            <div className="effects_media">
              {/* <picture>
                    <source data-srcset="img/index/effects.webp" srcset="img/index/effects.webp" type="image/webp"><img
                        className="lazy entered loaded" data-src="img/index/effects.jpg" src="img/index/effects.jpg"
                        alt="media" data-ll-status="loaded">
                </picture> */}
            </div>
            <ul className="effects_list col-xxl-4">
              <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start aos-init aos-animate"
                data-aos="fade-up"><span className="icon d-flex align-items-center justify-content-center"><i
                  className="icon-flash"></i></span>
                <div className="wrapper">
                  <h4 className="effects_list-item_header">Relief of chronic pain</h4>
                  <p className="effects_list-item_text">Feugiat in fermentum posuere urna nec tincidunt praesent
                    semper feugiat pulvinar proin</p>
                </div>
              </li>
              <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start aos-init aos-animate"
                data-aos="fade-up"><span className="icon d-flex align-items-center justify-content-center"><i
                  className="icon-heartbeat"></i></span>
                <div className="wrapper">
                  <h4 className="effects_list-item_header">Fight cancer</h4>
                  <p className="effects_list-item_text">Feugiat in fermentum posuere urna nec tincidunt praesent
                    semper feugiat pulvinar proin</p>
                </div>
              </li>
              <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start aos-init aos-animate"
                data-aos="fade-up"><span className="icon d-flex align-items-center justify-content-center"><i
                  className="icon-head"></i></span>
                <div className="wrapper">
                  <h4 className="effects_list-item_header">Depression</h4>
                  <p className="effects_list-item_text">Feugiat in fermentum posuere urna nec tincidunt praesent
                    semper feugiat pulvinar proin</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="latest section">
          <div className="container">
            <h2 className="latest_header">Latest News</h2>
            <div className="latest_wrapper d-flex flex-column-reverse flex-lg-row">
              <div className="latest_promo aos-init aos-animate" data-aos="fade-right">
                {/* <picture>
                        <source srcset="img/index/promo.webp" type="image/webp"><img
                            className="lazy latest_promo-bg entered loaded" data-src="img/index/promo.jpg"
                            src="img/index/promo.jpg" alt="promo" data-ll-status="loaded">
                    </picture> */}
                <div className="overlay d-flex d-sm-block flex-column justify-content-center">
                  <h4 className="overlay_header">Buy Marijuana Seeds Online and Get a Gift</h4>
                  <p className="overlay_text">Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat
                    pulvinar proin</p>
                </div>
              </div>
              <ul className="latest_list col-lg-7 col-xl-6">
                <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up"><span
                  className="latest_list-preview">
                  {/* <picture>
                                <source data-srcset="img/index/latest01.webp" srcset="img/index/latest01.webp"
                                    type="image/webp"><img className="lazy preview-img entered loaded"
                                    data-src="img/index/latest01.jpg" src="img/index/latest01.jpg"
                                    alt="Top 15 Best Strain Of Weed For Anxiety" data-ll-status="loaded">
                            </picture> */}
                </span>
                  <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1"><span
                    className="metadata"><span className="metadata_item d-inline-flex align-items-center"><i
                      className="icon-calendar_day icon secondary"></i> September 30, 2021 </span><span
                        className="metadata_item d-inline-flex align-items-center"><i
                          className="icon-comments icon secondary"></i> <span
                            className="number d-md-none">0</span> <span className="text d-none d-md-inline">No
                              Comments</span> </span></span><a className="title" href="post.html">Top 15 Best
                                Strain Of Weed For Anxiety</a>
                    <p className="text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium
                      vulputate sapien nec sagittis</p>
                  </div>
                </li>
                <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up"><span
                  className="latest_list-preview">
                  {/* <picture>
                                <source data-srcset="img/index/latest02.webp" srcset="img/index/latest02.webp"
                                    type="image/webp"><img className="lazy preview-img entered loaded"
                                    data-src="img/index/latest02.jpg" src="img/index/latest02.jpg"
                                    alt="Raw Cannabis Seeds Promote Health" data-ll-status="loaded">
                            </picture> */}
                </span>
                  <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1"><span
                    className="metadata"><span className="metadata_item d-inline-flex align-items-center"><i
                      className="icon-calendar_day icon secondary"></i> September 30, 2021 </span><span
                        className="metadata_item d-inline-flex align-items-center"><i
                          className="icon-comments icon secondary"></i> <span
                            className="number d-md-none">0</span> <span className="text d-none d-md-inline">No
                              Comments</span> </span></span><a className="title" href="post.html">Raw Cannabis
                                Seeds Promote Health</a>
                    <p className="text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium
                      vulputate sapien nec sagittis</p>
                  </div>
                </li>
                <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up"><span
                  className="latest_list-preview">
                  {/* <picture>
                                <source data-srcset="img/index/latest03.webp" srcset="img/index/latest03.webp"
                                    type="image/webp"><img className="lazy preview-img entered loaded"
                                    data-src="img/index/latest03.jpg" src="img/index/latest03.jpg"
                                    alt="How Many Autoflowers In a Tent?" data-ll-status="loaded">
                            </picture> */}
                </span>
                  <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1"><span
                    className="metadata"><span className="metadata_item d-inline-flex align-items-center"><i
                      className="icon-calendar_day icon secondary"></i> September 30, 2021 </span><span
                        className="metadata_item d-inline-flex align-items-center"><i
                          className="icon-comments icon secondary"></i> <span
                            className="number d-md-none">0</span> <span className="text d-none d-md-inline">No
                              Comments</span> </span></span><a className="title" href="post.html">How Many
                                Autoflowers In a Tent?</a>
                    <p className="text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium
                      vulputate sapien nec sagittis</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="instagram">
          <div className="container">
            <div className="instagram_header">
              <h2 className="instagram_header-title">Follow Us on Instagram</h2>
              <p className="instagram_header-text">Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a
                diam maecenas sed enim ut sem</p>
            </div>
          </div>
        </section>

      </div>

      {/* MAIN SECTION ENDS */}

      {/* FOOTER SECTION STARTS */}
      <div>
    <footer className="footer">
        <div className="footer_main section">
            <div
                className="container d-flex flex-column flex-md-row flex-wrap flex-xl-nowrap justify-content-xl-between">
                <div className="footer_main-about footer_main-block col-md-6 col-xl-auto"><a
                        className="brand footer_main-about_brand d-flex align-items-center" href="index.html"><span
                            className="logo"><svg width="48" height="45" viewBox="0 0 48 45" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#logoFooter)">
                                    <circle cx="23.5" cy="23.4998" r="17.5" fill="#EFC368"></circle>
                                    <path
                                        d="M9.79512 42.7418V42.7418C9.34023 42.4033 9.31895 41.6825 9.74864 41.1504L20.897 27.3735L21.6772 27.954L11.3571 42.3414C10.9578 42.9017 10.25 43.0802 9.79512 42.7418Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M26.6771 42.8479C24.3476 41.406 22.6473 39.3633 21.68 36.619C21.6593 36.5586 21.6359 36.5018 21.6151 36.4414C21.4922 39.036 20.3226 40.6907 20.2435 42.0699C19.132 40.0735 18.4588 38.1106 18.4647 36.206C18.1821 36.2953 17.9437 36.5019 17.8208 36.958C17.3874 35.131 17.6447 32.9512 18.3642 30.5317C18.3464 30.5407 18.3321 30.5524 18.317 30.5578C16.2065 31.901 14.1964 32.7376 12.3296 32.8201C12.7376 32.5789 12.8705 32.2927 12.875 31.9938C11.0458 32.5244 8.97337 32.4184 6.74791 31.9002C8.04923 31.4476 9.32012 29.8636 11.7803 29.0303C11.6909 29.0245 11.5988 29.0222 11.5182 29.0119C8.64916 28.8206 6.24349 27.758 4.23021 25.933C4.69937 26.0793 5.11342 26.0499 5.44359 25.7948C1.69403 23.2492 0.824471 20.6681 0.188852 18.0841C0.246001 18.1328 0.303978 18.1877 0.364647 18.239C2.42593 19.949 7.42129 20.651 12.0076 22.6794C11.9954 22.659 11.9796 22.6359 11.9709 22.6182C8.85487 17.65 8.34457 13.0834 9.54543 8.78741C9.58318 9.21335 9.74327 9.53553 10.0257 9.75395C11.6092 4.78897 13.794 2.1021 16.3564 0.847511C14.6956 3.40296 20.6028 11.3757 20.0354 18.9763C20.067 18.905 20.0933 18.8408 20.1285 18.7722C21.8813 14.7689 24.9437 11.1591 29.0134 7.86035C28.3949 8.82752 28.0996 9.53433 28.39 10.3354C31.404 6.98018 34.6553 4.90665 38.1701 4.24101C38.4991 7.80318 37.4021 11.5 35.0076 15.3221C35.8577 15.3804 36.4557 14.9017 37.2149 14.0407C35.1295 18.9466 32.4473 22.9381 29.0008 25.7322C29.1119 25.6872 29.2212 25.652 29.3359 25.6097C29.3421 25.6088 29.3448 25.6052 29.3537 25.6007C36.0383 23.3432 44.4319 26.1635 47.0271 24.609L47.0298 24.6054C47.1919 24.5148 47.3285 24.3994 47.444 24.2681C46.9443 27.0771 44.9637 29.9178 40.6276 32.8085C40.9181 33.0162 41.2754 33.084 41.6891 33.0038C37.8727 35.3512 33.3229 36.116 27.6566 34.4662C27.7021 34.5229 27.7477 34.5796 27.7924 34.6301C31.0172 38.5605 33.0746 43.2124 35.3315 44.5604C32.6759 44.6643 29.9551 44.5399 26.4711 41.6346C26.3186 42.0347 26.4036 42.4346 26.6771 42.8479Z"
                                        fill="#258F67"></path>
                                    <path
                                        d="M21.6964 27.3339C21.6964 27.3339 16.6815 25.0813 12.6419 22.5125C9.405 17.4567 8.82341 12.8418 9.98562 8.52346C10.0299 8.95377 10.1971 9.28105 10.4873 9.50533C12.0295 4.51719 14.2143 1.83603 16.8028 0.605255C16.8064 0.60798 7.27498 14.1519 21.6964 27.3339Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M20.7347 26.7685C20.7347 26.7685 18.8112 24.2889 20.2761 18.3905C22.0786 14.3957 25.1468 10.758 29.1883 7.40349C28.563 8.37328 28.2585 9.07826 28.5221 9.86229C31.5371 6.47721 34.7524 4.352 38.1907 3.61065C30.819 11.8745 24.022 19.9355 20.7347 26.7685Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M46.9734 24.4342C38.3251 31.4347 29.6485 31.3625 20.9666 27.3752C22.7954 28.1005 26.1505 27.0664 29.4339 25.6238C29.44 25.6229 29.4427 25.6193 29.4516 25.6147C36.1028 23.294 44.3824 26.0159 46.9734 24.4342Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M35.7432 43.9906C28.1977 39.4093 22.5531 34.0408 20.9998 26.9998C20.9998 26.9998 24.4082 31.2641 28.0546 34.2607C31.3346 38.117 33.4955 42.6236 35.7432 43.9906Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M20.3668 41.3979C19.9237 36.5216 20.2623 31.7313 21.1995 26.9998C21.389 30.1599 21.57 33.3522 21.8533 36.069C21.8345 36.0107 21.8131 35.9559 21.7944 35.8976C21.6233 38.4267 20.4668 40.0586 20.3668 41.3979Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M18.8106 30.5696C16.6844 31.8631 14.6463 32.6483 12.7329 32.6764C13.1445 32.445 13.2725 32.1601 13.2683 31.8585C11.4067 32.3402 9.27681 32.172 6.97768 31.5834C12.1204 30.7173 16.9056 29.3275 21.2743 27.331C20.976 28.0954 19.9814 29.3077 18.8106 30.5696Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M20.9696 27.2397C20.732 27.2913 15.5252 28.3696 11.6631 29.0039C8.78877 28.8184 6.38068 27.7577 4.3675 25.9313C4.83726 26.0771 5.25222 26.0465 5.58362 25.7899C1.83231 23.2444 0.966829 20.6567 0.335772 18.0657C0.392925 18.1144 0.450895 18.1693 0.51157 18.2206C6.50769 23.538 13.1637 27.0346 20.9696 27.2397Z"
                                        fill="#214842"></path>
                                    <path
                                        d="M22.2931 28.0032C21.7944 28.665 20.8543 28.7971 20.1924 28.2984C19.5306 27.7997 19.3985 26.8595 19.8972 26.1977C20.3959 25.5359 21.336 25.4038 21.9979 25.9025C22.6597 26.4012 22.7918 27.3413 22.2931 28.0032Z"
                                        fill="#214842"></path>
                                </g>
                                <defs>
                                    <clipPath id="logoFooter">
                                        <rect width="48" height="45" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg> </span><span className="accent">Herba</span> <span>list</span></a>
                    <div className="footer_main-about_wrapper">
                        <p className="text">Elementum nisi quis eleifend quam adipiscing. Cursus metus aliquam eleifend
                            mi in nulla posuere sollicitudin</p>
                        <ul className="socials d-flex align-items-center accent">
                            <li className="list-item"><a className="link" href="https://facebook.com" target="_blank"
                                    rel="noopener norefferer"><i className="icon-facebook icon"></i></a></li>
                            <li className="list-item"><a className="link" href="https://instagram.com" target="_blank"
                                    rel="noopener norefferer"><i className="icon-instagram icon"></i></a></li>
                            <li className="list-item"><a className="link" href="https://twitter.com" target="_blank"
                                    rel="noopener norefferer"><i className="icon-twitter icon"></i></a></li>
                            <li className="list-item"><a className="link" href="https://whatsapp.com" target="_blank"
                                    rel="noopener norefferer"><i className="icon-whatsapp icon"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_main-contacts footer_main-block col-md-6 col-xl-auto">
                    <h4 className="footer_main-contacts_header footer_main-header">Contacts information</h4>
                    <ul className="footer_main-contacts_list">
                        <li className="list-item d-flex align-items-center"><span
                                className="icon d-flex justify-content-center align-items-center"><i
                                    className="icon-call"></i></span>
                            <div className="wrapper d-flex flex-column"><a className="link"
                                    href="tel:+1234567890">+1-202-555-0133</a> <a className="link"
                                    href="tel:+1234567890">+1-202-555-0133</a></div>
                        </li>
                        <li className="list-item d-flex align-items-center"><span
                                className="icon d-flex justify-content-center align-items-center"><i
                                    className="icon-location"></i></span>
                            <div className="wrapper d-flex flex-column"><span>192 North Border Street</span>
                                <span>Lithonia, GA 30038</span></div>
                        </li>
                        <li className="list-item d-flex align-items-center"><span
                                className="icon d-flex justify-content-center align-items-center"><i
                                    className="icon-clock"></i></span>
                            <div className="wrapper d-flex flex-column"><span>9:00 am to 5:00 pm</span> <span>Monday to
                                    Saturday</span></div>
                        </li>
                    </ul>
                </div>
                <div className="footer_main-nav footer_main-block col-md-6 col-xl-auto">
                    <h4 className="footer_main-nav_header footer_main-header">Shop Products</h4>
                    <ul className="footer_main-nav_list d-flex flex-wrap flex-md-column">
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Flower</a></li>
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Oils</a></li>
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Edibles</a></li>
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Concentrates</a></li>
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Seeds</a></li>
                        <li className="list-item"><a className="link d-inline-flex align-items-center" href="#"><i
                                    className="icon-caret_right accent icon"></i> Shop All</a></li>
                    </ul>
                </div>
                <div className="footer_main-instagram footer_main-block col-md-6 col-xl-auto">
                    <h4 className="footer_main-instagram_header footer_main-header">Instagram</h4>
                    <ul className="footer_main-instagram_list d-grid">
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/01.webp" srcset="img/footer/01.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/01.jpg" src="img/footer/01.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/02.webp" srcset="img/footer/02.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/02.jpg" src="img/footer/02.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/03.webp" srcset="img/footer/03.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/03.jpg" src="img/footer/03.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/04.webp" srcset="img/footer/04.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/04.jpg" src="img/footer/04.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/05.webp" srcset="img/footer/05.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/05.jpg" src="img/footer/05.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                        <li className="list-item"><a className="link" href="#" target="_blank"
                                rel="noopener norefferer">
                                {/* <picture>
                                    <source data-srcset="img/footer/06.webp" srcset="img/footer/06.webp"
                                        type="image/webp"><img className="lazy preview entered loaded"
                                        data-src="img/footer/06.jpg" src="img/footer/06.jpg" alt="instagram post"
                                        data-ll-status="loaded">
                                </picture> */}
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer_secondary">
            <div
                className="container d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-md-center">
                <p className="footer_secondary-copyright">Merkulove © Herbalist Template <span className="linebreak">All
                        rights reserved Copyrights <span id="currentYear">2025</span></span></p>
                <ul className="footer_secondary-list d-flex justify-content-center align-items-center">
                    <li className="list-item"><span className="vector"><svg width="62" height="20" viewBox="0 0 62 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40.3732 0.0307617C35.9754 0.0307617 32.0453 2.29548 32.0453 6.47972C32.0453 11.2783 39.0155 11.6097 39.0155 14.0203C39.0155 15.0354 37.8447 15.944 35.845 15.944C33.0071 15.944 30.886 14.6744 30.886 14.6744L29.9784 18.8967C29.9784 18.8967 32.4219 19.9692 35.6659 19.9692C40.4742 19.9692 44.2577 17.5932 44.2577 13.3375C44.2577 8.26694 37.2584 7.94535 37.2584 5.70787C37.2584 4.91274 38.2196 4.04153 40.2135 4.04153C42.4633 4.04153 44.2988 4.96487 44.2988 4.96487L45.187 0.886776C45.187 0.886776 43.1898 0.0307617 40.3732 0.0307617V0.0307617ZM0.137251 0.338543L0.0307617 0.954103C0.0307617 0.954103 1.88094 1.29052 3.54733 1.9616C5.69294 2.73113 5.84578 3.17912 6.20714 4.57052L10.1448 19.6518H15.4233L23.5552 0.338543H18.2888L13.0636 13.4697L10.9314 2.33912C10.7358 1.06523 9.74536 0.338543 8.53296 0.338543H0.137251V0.338543ZM25.6729 0.338543L21.5416 19.6518H26.5635L30.6803 0.338543H25.6729V0.338543ZM53.682 0.338543C52.471 0.338543 51.8294 0.982675 51.3586 2.10828L44.0011 19.6518H49.2675L50.2864 16.7279H56.7024L57.322 19.6518H61.9688L57.9149 0.338543H53.682V0.338543ZM54.3669 5.55638L55.9279 12.8037H51.7458L54.3669 5.55638V5.55638Z"
                                    fill="#1434CB"></path>
                            </svg></span></li>
                    <li className="list-item"><span className="vector"><svg width="49" height="30" viewBox="0 0 49 30"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_276_198133)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M18.1489 26.7542H30.9958V3.20239H18.1489V26.7542Z" fill="#FF5F00"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M18.965 14.9784C18.965 10.2003 21.158 5.94476 24.5728 3.20246C22.0752 1.19661 18.9243 0 15.4992 0C7.39105 0 0.818359 6.70616 0.818359 14.9784C0.818359 23.2506 7.39105 29.9568 15.4992 29.9568C18.9243 29.9568 22.0752 28.7602 24.5728 26.7543C21.158 24.0116 18.965 19.7565 18.965 14.9784Z"
                                        fill="#EB001B"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M47.8693 24.26V23.6787H47.7204L47.5495 24.0786L47.3782 23.6787H47.2294V24.26H47.3342V23.8215L47.4949 24.1997H47.6038L47.7645 23.8206V24.26H47.8693ZM46.9268 24.26V23.7778H47.1176V23.6796H46.6323V23.7778H46.8228V24.26H46.9268ZM48.3277 14.9784C48.3277 23.2506 41.7546 29.9568 33.6468 29.9568C30.2218 29.9568 27.0704 28.7602 24.5732 26.7543C27.9881 24.012 30.181 19.7565 30.181 14.9784C30.181 10.2007 27.9881 5.94517 24.5732 3.20246C27.0704 1.19661 30.2218 0 33.6468 0C41.7546 0 48.3277 6.70616 48.3277 14.9784Z"
                                        fill="#F79E1B"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_276_198133">
                                        <rect width="48" height="30" fill="white" transform="translate(0.818359)">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg></span></li>
                    <li className="list-item"><span className="vector"><svg width="79" height="21" viewBox="0 0 79 21"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_276_198139)">
                                    <path
                                        d="M29.6368 4.29468H25.3349C25.1924 4.29459 25.0547 4.34596 24.9464 4.43953C24.8381 4.5331 24.7664 4.66272 24.7442 4.80504L23.0043 15.9649C22.9963 16.0167 22.9995 16.0697 23.0136 16.1201C23.0278 16.1705 23.0526 16.2172 23.0863 16.257C23.12 16.2968 23.1619 16.3287 23.209 16.3506C23.2561 16.3725 23.3073 16.3838 23.3591 16.3837H25.4129C25.5554 16.3837 25.6932 16.3323 25.8015 16.2386C25.9098 16.1449 25.9815 16.0151 26.0035 15.8727L26.4728 12.8627C26.4948 12.7203 26.5664 12.5907 26.6745 12.497C26.7827 12.4033 26.9204 12.3518 27.0628 12.3517H28.4247C31.2585 12.3517 32.8939 10.9644 33.3211 8.21531C33.5135 7.01259 33.3292 6.06759 32.7725 5.40577C32.1611 4.67904 31.0767 4.29468 29.6368 4.29468V4.29468ZM30.1331 8.37059C29.8979 9.93222 28.7184 9.93222 27.578 9.93222H26.9288L27.3843 7.01577C27.3976 6.93044 27.4406 6.85273 27.5055 6.79662C27.5704 6.74051 27.653 6.70968 27.7384 6.70968H28.0359C28.8128 6.70968 29.5456 6.70968 29.9243 7.15768C30.1501 7.42495 30.2193 7.82204 30.1331 8.37059V8.37059ZM42.4961 8.32031H40.436C40.3507 8.32031 40.2681 8.35115 40.2031 8.40726C40.1382 8.46337 40.0952 8.54108 40.0819 8.6264L39.9907 9.20931L39.8466 8.99804C39.4007 8.34322 38.4062 8.12431 37.4135 8.12431C35.1371 8.12431 33.1927 9.86859 32.8141 12.3154C32.6172 13.536 32.8971 14.703 33.5815 15.5169C34.2092 16.2653 35.1075 16.5771 36.1762 16.5771C38.0105 16.5771 39.0276 15.3839 39.0276 15.3839L38.9358 15.963C38.9276 16.0148 38.9306 16.0678 38.9446 16.1183C38.9586 16.1687 38.9833 16.2156 39.0169 16.2555C39.0505 16.2954 39.0922 16.3275 39.1393 16.3495C39.1863 16.3715 39.2375 16.383 39.2893 16.383H41.145C41.2875 16.3831 41.4253 16.3316 41.5336 16.2379C41.6419 16.1442 41.7136 16.0145 41.7356 15.872L42.849 8.73904C42.8572 8.68738 42.8542 8.63454 42.8402 8.58416C42.8263 8.53378 42.8017 8.48707 42.7681 8.44726C42.7346 8.40745 42.6929 8.37548 42.6459 8.35356C42.5989 8.33164 42.5478 8.3203 42.4961 8.32031V8.32031ZM39.6246 12.3765C39.4258 13.5671 38.4917 14.3664 37.3003 14.3664C36.7021 14.3664 36.224 14.1723 35.9171 13.8045C35.6126 13.4392 35.4969 12.9193 35.5938 12.3402C35.7793 11.1598 36.7292 10.3344 37.9023 10.3344C38.4873 10.3344 38.9628 10.531 39.2761 10.902C39.59 11.2769 39.7145 11.7999 39.6246 12.3765V12.3765ZM53.4677 8.32031H51.3976C51.2999 8.32047 51.2038 8.34472 51.1175 8.39096C51.0313 8.43721 50.9575 8.50404 50.9025 8.58568L48.0473 12.8404L46.8371 8.75177C46.7999 8.62707 46.7241 8.51778 46.6208 8.44007C46.5174 8.36237 46.3921 8.32038 46.2634 8.32031H44.2291C44.172 8.32016 44.1157 8.33381 44.0649 8.36012C44.014 8.38643 43.9701 8.42464 43.9368 8.47158C43.9035 8.51852 43.8818 8.57282 43.8735 8.62997C43.8651 8.68711 43.8704 8.74546 43.8888 8.80013L46.169 15.5698L44.0253 18.6313C43.9872 18.6856 43.9646 18.7494 43.96 18.8158C43.9554 18.8823 43.9689 18.9487 43.9991 19.0078C44.0293 19.067 44.075 19.1166 44.1312 19.1512C44.1874 19.1858 44.252 19.2041 44.3178 19.204H46.3854C46.482 19.2042 46.5771 19.1806 46.6627 19.1354C46.7482 19.0902 46.8217 19.0246 46.8767 18.9444L53.7621 8.88986C53.7994 8.83546 53.8213 8.77177 53.8254 8.70568C53.8295 8.6396 53.8156 8.57364 53.7853 8.51496C53.7549 8.45628 53.7093 8.40712 53.6533 8.37281C53.5973 8.3385 53.5332 8.32034 53.4677 8.32031V8.32031Z"
                                        fill="#253B80"></path>
                                    <path
                                        d="M60.3215 4.29483H56.0189C55.8766 4.29489 55.739 4.34632 55.6308 4.43988C55.5227 4.53344 55.451 4.66298 55.4289 4.80519L53.689 15.9651C53.6809 16.0168 53.684 16.0696 53.698 16.12C53.7121 16.1704 53.7367 16.2171 53.7703 16.2569C53.8039 16.2967 53.8457 16.3287 53.8926 16.3506C53.9396 16.3725 53.9908 16.3838 54.0425 16.3838H56.2504C56.35 16.3837 56.4463 16.3476 56.5219 16.282C56.5976 16.2165 56.6476 16.1257 56.663 16.0262L57.1568 12.8628C57.1789 12.7205 57.2504 12.5908 57.3586 12.4971C57.4668 12.4034 57.6045 12.3519 57.7469 12.3518H59.1081C61.9425 12.3518 63.5774 10.9646 64.0051 8.21546C64.1982 7.01273 64.0127 6.06773 63.456 5.40592C62.8452 4.67919 61.7613 4.29483 60.3215 4.29483V4.29483ZM60.8178 8.37073C60.5832 9.93237 59.4037 9.93237 58.2627 9.93237H57.6141L58.0702 7.01592C58.0833 6.93059 58.1261 6.85282 58.1909 6.79667C58.2558 6.74052 58.3384 6.70972 58.4237 6.70983H58.7212C59.4975 6.70983 60.2309 6.70983 60.6096 7.15783C60.8354 7.4251 60.904 7.82219 60.8178 8.37073V8.37073ZM73.1802 8.32046H71.1213C71.036 8.32022 70.9533 8.35098 70.8885 8.40715C70.8236 8.46332 70.7808 8.54117 70.7678 8.62655L70.6766 9.20946L70.5319 8.99819C70.086 8.34337 69.0921 8.12446 68.0995 8.12446C65.823 8.12446 63.8793 9.86873 63.5006 12.3156C63.3044 13.5361 63.583 14.7032 64.2674 15.5171C64.8964 16.2655 65.7934 16.5773 66.8622 16.5773C68.6964 16.5773 69.7136 15.3841 69.7136 15.3841L69.6217 15.9632C69.6135 16.0151 69.6166 16.0681 69.6306 16.1187C69.6447 16.1693 69.6695 16.2162 69.7032 16.2561C69.7369 16.296 69.7789 16.3281 69.826 16.35C69.8732 16.372 69.9246 16.3833 69.9765 16.3832H71.8315C71.9739 16.3831 72.1116 16.3316 72.2198 16.2379C72.328 16.1442 72.3995 16.0145 72.4216 15.8722L73.5356 8.73919C73.5435 8.68737 73.5402 8.63443 73.526 8.58401C73.5117 8.53359 73.4869 8.48689 73.4531 8.44711C73.4193 8.40733 73.3774 8.37541 73.3303 8.35355C73.2832 8.33169 73.232 8.3204 73.1802 8.32046V8.32046ZM70.3086 12.3766C70.1111 13.5673 69.1758 14.3666 67.9844 14.3666C67.3874 14.3666 66.9081 14.1725 66.6011 13.8046C66.2967 13.4394 66.1822 12.9195 66.2778 12.3404C66.4646 11.1599 67.4132 10.3346 68.5863 10.3346C69.1713 10.3346 69.6469 10.5312 69.9602 10.9022C70.2753 11.277 70.3998 11.8001 70.3086 12.3766V12.3766ZM75.6089 4.60092L73.8432 15.9651C73.8351 16.0168 73.8382 16.0696 73.8522 16.12C73.8663 16.1704 73.8909 16.2171 73.9245 16.2569C73.9581 16.2967 73.9999 16.3287 74.0468 16.3506C74.0938 16.3725 74.145 16.3838 74.1967 16.3838H75.9718C76.2668 16.3838 76.5172 16.1675 76.5625 15.8728L78.3036 4.71355C78.3117 4.66183 78.3086 4.60894 78.2946 4.55853C78.2806 4.50813 78.2559 4.46139 78.2223 4.42155C78.1887 4.3817 78.147 4.34968 78.1 4.3277C78.053 4.30571 78.0019 4.29428 77.9501 4.29419H75.9624C75.877 4.2945 75.7946 4.32553 75.7298 4.38173C75.665 4.43794 75.6222 4.51564 75.6089 4.60092Z"
                                        fill="#179BD7"></path>
                                    <path
                                        d="M5.1385 18.5525L5.46748 16.4385L4.73466 16.4213H1.23535L3.66719 0.82216C3.67443 0.774497 3.69836 0.731053 3.73462 0.699748C3.77087 0.668442 3.81704 0.65136 3.86471 0.651614H9.76503C11.7238 0.651614 13.0756 1.06398 13.7814 1.87789C14.1123 2.2597 14.323 2.6587 14.4249 3.0978C14.5318 3.55852 14.5337 4.10898 14.4293 4.78034L14.4218 4.82934V5.25952L14.7526 5.44916C15.0052 5.57862 15.2323 5.75375 15.4225 5.96589C15.7056 6.29234 15.8887 6.70725 15.966 7.19916C16.0459 7.70507 16.0195 8.30707 15.8887 8.98861C15.7377 9.77261 15.4936 10.4554 15.164 11.0142C14.8732 11.5147 14.4822 11.9482 14.016 12.2869C13.5782 12.6013 13.058 12.8399 12.4699 12.9926C11.9 13.1428 11.2502 13.2185 10.5375 13.2185H10.0783C9.74993 13.2185 9.43101 13.3382 9.18066 13.5526C8.93066 13.7694 8.76481 14.0688 8.71266 14.3977L8.67806 14.588L8.09684 18.3139L8.07042 18.4507C8.0635 18.494 8.05155 18.5156 8.03393 18.5302C8.01687 18.5444 7.99558 18.5522 7.97355 18.5525H5.1385Z"
                                        fill="#253B80"></path>
                                    <path
                                        d="M15.0662 4.87891C15.0486 4.99282 15.0285 5.10927 15.0058 5.22891C14.2277 9.27045 11.5656 10.6666 8.16572 10.6666H6.43462C6.01883 10.6666 5.66846 10.9721 5.60367 11.387L4.71736 17.0735L4.46638 18.6855C4.45638 18.7494 4.4602 18.8148 4.47757 18.8771C4.49494 18.9394 4.52544 18.9971 4.56699 19.0464C4.60854 19.0956 4.66014 19.1351 4.71824 19.1622C4.77635 19.1894 4.83957 19.2034 4.90355 19.2035H7.97386C8.33744 19.2035 8.6463 18.9362 8.70354 18.5735L8.73373 18.4156L9.31181 14.7044L9.34893 14.5007C9.40554 14.1367 9.71502 13.8695 10.0786 13.8695H10.5378C13.5125 13.8695 15.8412 12.6476 16.5218 9.112C16.8061 7.635 16.6589 6.40172 15.9066 5.53436C15.6681 5.26605 15.3834 5.04393 15.0662 4.87891V4.87891Z"
                                        fill="#179BD7"></path>
                                    <path
                                        d="M14.2521 4.55059C14.0036 4.47788 13.7509 4.42113 13.4954 4.38069C12.9904 4.30218 12.4802 4.26452 11.9693 4.26805H7.34468C7.16868 4.26791 6.99844 4.33148 6.86473 4.44725C6.73102 4.56303 6.64266 4.72338 6.61563 4.89932L5.63182 11.2031L5.60352 11.3871C5.63416 11.1864 5.7348 11.0034 5.88721 10.8713C6.03962 10.7392 6.23375 10.6666 6.43447 10.6667H8.16556C11.5655 10.6667 14.2275 9.26987 15.0057 5.22896C15.0289 5.10932 15.0484 4.99287 15.066 4.87896C14.8607 4.77003 14.6467 4.67871 14.4263 4.60596C14.3685 4.58656 14.3105 4.5681 14.2521 4.55059V4.55059Z"
                                        fill="#222D65"></path>
                                    <path
                                        d="M6.61582 4.89936C6.64262 4.72338 6.73093 4.56295 6.86471 4.44723C6.99848 4.33151 7.16885 4.26817 7.34487 4.26873H11.9695C12.5174 4.26873 13.0288 4.305 13.4955 4.38136C13.8114 4.43158 14.1229 4.50669 14.4271 4.606C14.6567 4.683 14.87 4.774 15.0669 4.879C15.2984 3.38545 15.065 2.36855 14.2667 1.44773C13.3867 0.434 11.7984 0 9.76601 0H3.86569C3.45053 0 3.09638 0.305455 3.03222 0.721L0.574593 16.4805C0.563146 16.5537 0.567501 16.6285 0.587359 16.6998C0.607217 16.7711 0.642107 16.8372 0.689629 16.8936C0.73715 16.95 0.796175 16.9952 0.862644 17.0263C0.929113 17.0574 1.00145 17.0735 1.07467 17.0736H4.7174L5.63201 11.2032L6.61582 4.89936V4.89936Z"
                                        fill="#253B80"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_276_198139">
                                        <rect width="78" height="21" fill="white" transform="translate(0.568359)">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg></span></li>
                    <li className="list-item"><span className="vector"><svg width="31" height="30" viewBox="0 0 31 30"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_276_198146)">
                                    <path
                                        d="M30.1197 18.6274C28.1155 26.6675 19.9697 31.5548 11.9412 29.5506C3.90097 27.5465 -0.986467 19.4009 1.01773 11.3726C3.02194 3.33254 11.1559 -1.55479 19.1962 0.449365C27.2247 2.4418 32.1239 10.5873 30.1197 18.6274Z"
                                        fill="url(#paint0_linear_276_198146)"></path>
                                    <path
                                        d="M22.7109 13.1309C23.0039 11.1387 21.4922 10.0605 19.4062 9.3457L20.0859 6.63867L18.4453 6.22852L17.7891 8.86523C17.3555 8.75977 16.9102 8.6543 16.4648 8.56055L17.1211 5.91211L15.4805 5.50195L14.8125 8.19727C14.4492 8.11523 14.0977 8.0332 13.7578 7.95117V7.93945L11.4844 7.37695L11.0508 9.13477C11.0508 9.13477 12.2695 9.41602 12.2461 9.42773C12.9141 9.5918 13.0312 10.0371 13.0078 10.3887L12.2344 13.4707C12.2812 13.4824 12.3398 13.4941 12.4102 13.5293C12.3516 13.5176 12.293 13.5059 12.2344 13.4824L11.1562 17.7949C11.0742 17.9941 10.8633 18.2988 10.4062 18.1816C10.418 18.2051 9.21094 17.8887 9.21094 17.8887L8.39062 19.7754L10.5352 20.3145C10.9336 20.4199 11.3203 20.5137 11.707 20.6191L11.0273 23.3496L12.668 23.7598L13.3477 21.0527C13.793 21.1699 14.2383 21.2871 14.6602 21.3926L13.9922 24.0879L15.6328 24.498L16.3125 21.7676C19.125 22.2949 21.2344 22.084 22.1133 19.541C22.8281 17.502 22.0781 16.3184 20.6016 15.5449C21.6914 15.2988 22.5 14.584 22.7109 13.1309ZM18.9492 18.4043C18.4453 20.4434 15 19.3418 13.8867 19.0605L14.7891 15.4395C15.9023 15.7207 19.4883 16.2715 18.9492 18.4043ZM19.4648 13.0957C18.9961 14.959 16.1367 14.0098 15.2109 13.7754L16.0312 10.4941C16.957 10.7285 19.9453 11.1621 19.4648 13.0957Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_276_198146" x1="15.5604" y1="-0.00706574"
                                        x2="15.5604" y2="29.997" gradientUnits="userSpaceOnUse">
                                        <stop offset="1" stopColor="#F7931A"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_276_198146">
                                        <rect width="30" height="30" fill="white" transform="translate(0.568359)">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg></span></li>
                </ul>
            </div>
        </div>
    </footer>
</div>

          {/* FOOTER SECTION ENDS */}

        </div>
          );
}
