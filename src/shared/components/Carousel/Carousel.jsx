import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export function DemoCarousel(){

        return (
           <Carousel>

                <div>
                    <img src="/assets/images/1.jpg" alt="image1" width="10%" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/assets/images/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/assets/images/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );

}


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>