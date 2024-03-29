import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const FeatureBrands = () => {
    return (
        <section>
        <div className="container mx-auto py-12">
          <p className="text-center text-4xl pb-12 text-gray-600 dark:text-white font-medium ">FEATURE AND MENTIONED ON</p>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
  
              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },
  
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
  
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
  
            }}
            loop={true}
            autoplay={true}
            loopFillGroupWithBlank={true}
            pagination={{
              "clickable": true
            }} navigation={false} className="mySwiper justify-items-center">
  
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BPkPBRCOGxs_ZRnEALwGAE1ODfcCDIp_Eg&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdTaTX5pV2sp-RbRrNk9sgxXfNzaqM1y03g&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GyPZsMgguw24Fs1Qi6ac0GfbM0yNuGkUug&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjRd_Z3iky5HeK9cBnNwHZz8YNFBwzOPXIg&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHa4XwXjj219B7tJ4VburzssJq0ckiE--4w&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8fac58tbH5l18AR1j2JV9-qCGifChwugdQ&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_Bdja_mp1v_CEhGqn80wzIvYkpNdlUxtlw&usqp=CAU" alt="currier company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7CRNTCeAkbrsqZDqHMa_v8hfJJKoZ8MNpw&usqp=CAU" alt="currier Company" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HshjBatbfrBMLzgB3uPzhpEUDl_mM5gULg&usqp=CAU" alt="currier Company" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
};

export default FeatureBrands;