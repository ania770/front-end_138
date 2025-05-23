import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <section className='header'>
      <div className="container header__container">
        <div className="title_content header__title_content">
          <h2 className='title header__title'>Bhromaon</h2>
        </div>
        <ul className='nav header__nav'>
          <li className='li header__li'>Who We Are</li>
          <li className='li header__li'>What We Do</li>
          <li className='li header__li'>Travel With Us</li>
          <li className='li header__li'>Contact Us</li>
        </ul>
      </div>
    </section>
    <section className='hero'>
      <div className="container hero__container">
        <div className="text hero__text">
          <h1 className='title hero__title'>Bhromaon</h1>
          <h3 className='subtitle hero__subtitle'>Safe Travel Anywhere</h3>
        </div>
        <div className="search hero__search">
          <label htmlFor="inp_search">Search Your Travel Destination</label>
          <input className='inp_search' type="text" id='inp_search' />
          <div className="btn_content hero__btn_content">
            <button className='btn hero__btn'>search</button>
          </div>
        </div>
      </div>
    </section>
    <section className='why'>
      <div className="container why__container">
        <div className="text_content why__text_content">
          <h2 className='title why__title'>Why Choose Us</h2>
          <p className='text why__text'>Tion and dislike men who are so beguiled and demoralized by desire by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
            <br />
            Ddislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that.
          </p>
          <div className="btn_content">
            <button className='btn why__btn'>Explore Places </button>
          </div>
        </div>
        <div className="img_content why__img_content">
          <img className='img why__img' src="/img/Image1.jpg" alt="" />
          <img className='img why__img' src="/img/Image2.jpg" alt="" />
        </div>
      </div>
    </section>
    <section className='steps'>
      <div className="container steps__container">
        <div className="content steps__content">
          <div className='svg_content steps__svg_content'>
            {/* svg */}
            <svg className='svg steps__svg' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_63_2779)">
                <path d="M63.1296 55.3321L50.6662 42.8708C50.1037 42.3084 49.3411 41.9959 48.5411 41.9959H46.5034C49.9537 37.5838 52.0038 32.0344 52.0038 25.9975C52.0038 11.6364 40.3655 0 26.0019 0C11.6384 0 0 11.6364 0 25.9975C0 40.3586 11.6384 51.9949 26.0019 51.9949C32.0398 51.9949 37.5903 49.9451 42.0031 46.4955V48.5328C42.0031 49.3327 42.3156 50.0951 42.8781 50.6576L55.3416 63.1188C56.5166 64.2937 58.4168 64.2937 59.5794 63.1188L63.1171 59.5817C64.2922 58.4068 64.2922 56.507 63.1296 55.3321ZM26.0019 41.9959C17.1638 41.9959 10.0007 34.8466 10.0007 25.9975C10.0007 17.1608 17.1513 9.99902 26.0019 9.99902C34.84 9.99902 42.0031 17.1483 42.0031 25.9975C42.0031 34.8341 34.8526 41.9959 26.0019 41.9959Z" fill="#5373FD" />
              </g>
              <defs>
                <clipPath id="clip0_63_2779">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='subtitle steps__subtitles'>Search Places</p>
          </div>
          <div className='svg_content steps__svg_content'>
            {/* svg */}
            <svg className='svg steps__svg' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 1C14.8791 1 1 14.8791 1 32C1 49.1209 14.8791 63 32 63C49.1209 63 63 49.1209 63 32C63 14.8791 49.1209 1 32 1ZM32 7C45.8165 7 57 18.1814 57 32C57 45.8165 45.8186 57 32 57C18.1835 57 7 45.8186 7 32C7 18.1835 18.1814 7 32 7ZM49.5255 23.2834L46.7085 20.4436C46.1251 19.8555 45.1754 19.8516 44.5872 20.4351L26.9182 37.9621L19.4443 30.4275C18.8609 29.8394 17.9111 29.8355 17.323 30.4189L14.4831 33.2359C13.895 33.8192 13.8911 34.769 14.4746 35.3573L25.8223 46.7967C26.4056 47.3849 27.3554 47.3887 27.9435 46.8052L49.5171 25.4048C50.1051 24.8213 50.1089 23.8715 49.5255 23.2834V23.2834Z" fill="#FF6363" />
            </svg>

            <p className='subtitle steps__subtitles'>Select Places</p>
          </div>
          <div className='svg_content steps__svg_content'>
            {/* svg */}
            <svg className='svg steps__svg' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M58.2837 35.8363C59.38 33.98 60 32 60 29.6063C60 24.1044 55.3477 18.9088 49.2725 18.9088H44.7125C45.3275 17.3075 45.8187 15.3925 45.8187 13.0913C45.8187 3.992 41.1075 0 33.91 0C26.2091 0 26.6484 11.8666 24.94 13.575C22.0966 16.4184 18.7381 21.8809 16.345 24H4C1.79087 24 0 25.7909 0 28V58C0 60.2091 1.79087 62 4 62H12C13.8616 62 15.426 60.7282 15.8722 59.0062C21.4359 59.1314 25.2548 63.9987 38.0975 63.9987C39 63.9987 40 64 40.875 64C50.5146 64 54.8733 59.0721 54.9925 52.0838C56.6574 49.7806 57.5299 46.6935 57.16 43.71C58.3917 41.4035 58.868 38.6671 58.2837 35.8363ZM50.565 42.565C52.135 45.2062 50.7225 48.7412 48.8225 49.7612C49.785 55.8587 46.6215 57.9987 42.1825 57.9987H37.455C28.5001 57.9987 22.7014 53.2713 16 53.2713V30H17.365C20.91 30 25.8625 21.1387 29.1825 17.8175C32.7275 14.2725 31.5462 8.36375 33.91 6C39.8187 6 39.8187 10.1225 39.8187 13.0913C39.8187 17.9875 36.2738 20.1813 36.2738 24.9088H49.2725C51.9112 24.9088 53.9887 27.2725 54 29.6362C54.0113 31.9987 52.3975 34.3625 51.2163 34.3625C52.9024 36.1819 53.2626 40.017 50.565 42.565V42.565ZM11 54C11 55.6569 9.65688 57 8 57C6.34312 57 5 55.6569 5 54C5 52.3431 6.34312 51 8 51C9.65688 51 11 52.3431 11 54Z" fill="#00A2FF" />
            </svg>

            <p className='subtitle steps__subtitles'>Book & Enjoy</p>
          </div>
        </div>
        <div className="line">
          <img src="/img/Line.png" alt="" />
        </div>
      </div>
    </section>
    <section className='booknow'>
      <div className="container booknow__container">
        <div className="content booknow__content">
          <h3 className='subtitle booknow__subtitle'>Spain</h3>
          <h2 className='title booknow__title'>Grand Spain Madrid</h2>
          <p className='text booknow__text'>But I must explain to you how all this mistaken idea of account to denouncing pleasure and praising pain was account  born and I account will give you a complete account of the system</p>
          <div className="btn_content booknow__btn_content">
            <button className='btn booknow__btn'>book now</button>
          </div>
        </div>
      </div>
    </section>
    <section className='booknow2'>
      <div className="container booknow2__container">
        <div className="content booknow2__content">
          <h3 className='subtitle booknow2__subtitle'>Spain</h3>
          <h2 className='title booknow2__title'>Grand Spain Madrid</h2>
          <p className='text booknow2__text'>But I must explain to you how all this mistaken idea of account to denouncing pleasure and praising pain was account  born and I account will give you a complete account of the system</p>
          <div className="btn_content booknow2__btn_content">
            <button className='btn booknow2__btn'>book now</button>
          </div>
        </div>
      </div>
    </section>
    <section className='tourists'>
      <div className="container tourists__container">
        <h2 className='title tourists__title'>What Our  Tourists Say</h2>
        <div className="content tourists__content">
          <img src="/img/ReviewPhoto.jpg" alt="" />
          <div className="text_content tourists__text_content">
            <h3 className='subtitle tourists__subtitle'>Sam Sumon</h3>
            <p className='text tourists__text'>     But I must explain to you how all this mistaken idea of account to denouncinpleasure and praising pain  But I must explain to you how all this mistaken idea of account to nai denouncing pleasure and praising pain was account  born and I account will give you a complete account of the system was account  born and I account will give you a nai the complete account of the system</p>
          </div>
        </div>
      </div>
    </section>
    <section className='footer'>
      <div className="container footer__container">
        <h2 className='title footer__title'>Bhromaon</h2>
        <p className='test footer__text'>Safe Travel Anywhere</p>
        <div className="box footer__box">
          <svg className='svg footer__svg' width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4463 18L18.335 12.2087H12.7782V8.45063C12.7782 6.86625 13.5544 5.32188 16.0432 5.32188H18.5694V0.39125C18.5694 0.39125 16.2769 0 14.085 0C9.50879 0 6.51754 2.77375 6.51754 7.795V12.2087H1.43066V18H6.51754V32H12.7782V18H17.4463Z" />
          </svg>

          <svg className='svg footer__svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7106 9.48298C28.7309 9.76723 28.7309 10.0515 28.7309 10.3358C28.7309 19.0058 22.132 28.9957 10.0711 28.9957C6.35531 28.9957 2.90356 27.9195 0 26.0515C0.527937 26.1124 1.0355 26.1327 1.58375 26.1327C4.64969 26.1327 7.47206 25.0972 9.72587 23.3307C6.84262 23.2698 4.42637 21.3815 3.59387 18.7825C4 18.8434 4.40606 18.884 4.8325 18.884C5.42131 18.884 6.01019 18.8027 6.55837 18.6607C3.55331 18.0515 1.29944 15.4119 1.29944 12.2241V12.1429C2.1725 12.6302 3.18781 12.9348 4.26388 12.9754C2.49738 11.7977 1.34006 9.78755 1.34006 7.51342C1.34006 6.29517 1.66488 5.17842 2.23344 4.2038C5.46187 8.18348 10.3147 10.7824 15.7563 11.0667C15.6548 10.5794 15.5938 10.0719 15.5938 9.56423C15.5938 5.94998 18.5177 3.00586 22.1522 3.00586C24.0405 3.00586 25.7461 3.79773 26.9441 5.07692C28.4263 4.79267 29.8476 4.24442 31.1065 3.49317C30.6191 5.01605 29.5836 6.29523 28.2232 7.10736C29.5431 6.9653 30.8222 6.59973 31.9999 6.09217C31.1066 7.39161 29.9898 8.54892 28.7106 9.48298V9.48298Z" />
          </svg>

          <svg className='svg footer__svg' width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 2H1.99375C0.89375 2 0 2.90625 0 4.01875V27.9813C0 29.0938 0.89375 30 1.99375 30H26C27.1 30 28 29.0938 28 27.9813V4.01875C28 2.90625 27.1 2 26 2ZM8.4625 26H4.3125V12.6375H8.46875V26H8.4625ZM6.3875 10.8125C5.05625 10.8125 3.98125 9.73125 3.98125 8.40625C3.98125 7.08125 5.05625 6 6.3875 6C7.7125 6 8.79375 7.08125 8.79375 8.40625C8.79375 9.7375 7.71875 10.8125 6.3875 10.8125V10.8125ZM24.0187 26H19.8687V19.5C19.8687 17.95 19.8375 15.9563 17.7125 15.9563C15.55 15.9563 15.2188 17.6438 15.2188 19.3875V26H11.0688V12.6375H15.05V14.4625H15.1062C15.6625 13.4125 17.0188 12.3062 19.0375 12.3062C23.2375 12.3062 24.0187 15.075 24.0187 18.675V26V26Z" />
          </svg>

          <svg className='svg footer__svg' width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3534 7.75519C33.9608 6.27706 32.8042 5.11294 31.3356 4.71788C28.6737 4 17.9999 4 17.9999 4C17.9999 4 7.32616 4 4.66423 4.71788C3.19567 5.113 2.03904 6.27706 1.64648 7.75519C0.933228 10.4344 0.933228 16.0243 0.933228 16.0243C0.933228 16.0243 0.933228 21.6141 1.64648 24.2933C2.03904 25.7714 3.19567 26.8871 4.66423 27.2821C7.32616 28 17.9999 28 17.9999 28C17.9999 28 28.6737 28 31.3356 27.2821C32.8042 26.8871 33.9608 25.7714 34.3534 24.2933C35.0666 21.6141 35.0666 16.0243 35.0666 16.0243C35.0666 16.0243 35.0666 10.4344 34.3534 7.75519V7.75519ZM14.509 21.0994V10.9491L23.4302 16.0244L14.509 21.0994V21.0994Z" />
          </svg>

          <svg className='svg footer__svg' width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_63_2744)">
              <path d="M31 16C31 24.5625 24.0625 31.5 15.5 31.5C13.9 31.5 12.3625 31.2562 10.9125 30.8062C11.5438 29.775 12.4875 28.0875 12.8375 26.7437C13.025 26.0187 13.8 23.0562 13.8 23.0562C14.3063 24.0187 15.7813 24.8375 17.35 24.8375C22.025 24.8375 25.3937 20.5375 25.3937 15.1938C25.3937 10.075 21.2125 6.24375 15.8375 6.24375C9.15 6.24375 5.59375 10.7312 5.59375 15.625C5.59375 17.9 6.80625 20.7313 8.7375 21.6313C9.03125 21.7688 9.1875 21.7062 9.25625 21.425C9.30625 21.2125 9.56875 20.1563 9.6875 19.6688C9.725 19.5125 9.70625 19.375 9.58125 19.225C8.95 18.4438 8.4375 17.0187 8.4375 15.6875C8.4375 12.2687 11.025 8.9625 15.4375 8.9625C19.2438 8.9625 21.9125 11.5563 21.9125 15.2688C21.9125 19.4625 19.7938 22.3687 17.0375 22.3687C15.5188 22.3687 14.375 21.1125 14.7437 19.5688C15.1812 17.725 16.025 15.7375 16.025 14.4062C16.025 13.2188 15.3875 12.225 14.0625 12.225C12.5063 12.225 11.2563 13.8313 11.2563 15.9875C11.2563 17.3625 11.7188 18.2875 11.7188 18.2875C11.7188 18.2875 10.1875 24.775 9.90625 25.9875C9.59375 27.325 9.71875 29.2125 9.85 30.4375C4.0875 28.1813 0 22.5687 0 16C0 7.4375 6.9375 0.5 15.5 0.5C24.0625 0.5 31 7.4375 31 16Z" />
            </g>
            <defs>
              <clipPath id="clip0_63_2744">
                <rect width="31" height="32" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>

        </div>
      </div>
    </section>
  </div>
);

