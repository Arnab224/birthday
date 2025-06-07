import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = ['/images/pic1.jpeg', '/images/pic2.jpeg', '/images/pic3.jpeg'];

export default function MemoriesCarousel() {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <Swiper spaceBetween={20} slidesPerView={1} loop>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="rounded-2xl shadow-xl w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}