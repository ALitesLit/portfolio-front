import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useCallback } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";

import BaseUrl from "../../../service/url";
import { fetchCertefiesService } from "../../../service/service";

import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const mock = process.env.REACT_APP_MOCK_ENV;

const Sertefies = () => {
    const [sertefies, setSertefies] = useState([]);
    

    const fetchCertefies = useCallback(
        async () => {
            try {
                const data = await fetchCertefiesService();

                setSertefies(data);
            } catch (error) {
                console.log(error);
            }
        }, []
    );

    useEffect(
        () => {
            fetchCertefies();
        }, []
    );


    return (
        <section className="sertefies" id="sertefies">
            <div className="sertefies-content">
                <h1 className="sertefies-header"><span className="hesteg" /> Мои сертификаты</h1>
                
                <div className="sertefies-content">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="sertefies_swapper"
                >
                    {
                            sertefies.length && (
                                sertefies.map(
                                    i => (
                                        <SwiperSlide key={i.id} className="swiper-slide">
                                            <a href={ i.site ? `${i.site}` : mock ? i.site : `${BaseUrl}/${i.photo}` }>
                                                <img src={`${ mock ? i.photo : `${BaseUrl}/${i.photo}` }`} />
                                            </a>
                                        </SwiperSlide>
                                    )
                                )
                            )
                        }
                </Swiper>
                </div>
            </div>
        </section>
    )
}


export default Sertefies;