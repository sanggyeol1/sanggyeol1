import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './SlideCard.style.css'

const SlideCard = ({ imageList }) => {

    console.log(imageList)
    const responsive = {
        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 3
        // },
        // desktop: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 3
        // },
        // tablet: {
        //     breakpoint: { max: 1024, min: 464 },
        //     items: 2
        // },
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive}>
            {
                imageList.map((item) => (
                    <div>
                        <img className='project-image' src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjRfNjgg%2FMDAxNzEzOTIzNTM4MTAw.qnP3d52lS-FMBhJ9Wv2Voou_K5AOrP7cjx6Xet377scg.5TvnehkXbi_FHRESbYIvbgw1-NuqaB8w2yr9g7CoDK4g.JPEG%2F%25C7%25D1%25C4%25B7%25BD%25BA%25B4%25DE%25C0%25E5%25C7%25CE%25C0%25CE-20240419_%252841%2529.jpg&type=a340'} />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default SlideCard