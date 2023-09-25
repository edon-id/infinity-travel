import test from "node:test";
import React from "react";
import testimonials from "src/styles/Testimonials.module.css";
import { TestimonialsType } from "src/types/data";

interface Props {
  data: TestimonialsType[];
}

const Testimonials: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className={testimonials.header}>
        <div className={testimonials.leftLine}></div>
        <h3>Тестимониал</h3>
        <div className={testimonials.rightLine}></div>
      </div>

      <div className={testimonials.container}>
        <div className={testimonials.testimonial}>
          <div className={testimonials.cardGrid}>
            {data.map((testimonial) => {
              return (
                <div key={testimonial.id} className={testimonials.card}>
                  <img
                    src={`/${testimonial.img}.png`}
                    alt={`${testimonial.img}`}
                  />
                  <div className={testimonials.cardInfo}>
                    <h2>{testimonial.hotelname}</h2>
                    <p>
                      {Array(testimonial.stars)
                        .fill(null)
                        .map((_, index) => {
                          return (
                            <i
                              key={index}
                              aria-hidden
                              className="fa fa-star"
                            ></i>
                          );
                        })}
                    </p>
                    <p>{testimonial.description}</p>
                    <h3>{testimonial.hotelname}</h3>
                    <img
                      className={testimonials.hotelDecoration}
                      src="/hotelDecoration.png"
                      alt="hotelDecoration"
                    />
                    <img
                      className={testimonials.cardHeader1}
                      src="/cardHeader.png"
                      alt="cardHeader"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
