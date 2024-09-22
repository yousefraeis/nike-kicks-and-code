import { useState } from 'react';

import { shoes, statistics } from '../constants';
import { Button, ShoeCard } from '../components';
import { bigShoe1 } from '../assets/images';
import { arrowRight } from '../assets/icons';

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 wide-container "
        >
            <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:sx pt-32">
                <p className="text-xl font-sansMontserrat text-vibrantCoral">
                    Our Summer collections
                </p>

                <h1 className="mt-8 z-10 font-sansPalanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-vibrantCoral inline-block mt-3">
                        Nike
                    </span>
                    Shoes
                </h1>

                <p className="font-sansPalanquin text-mutedSlate text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>

                <Button label="Shop now" iconURL={arrowRight} />

                <div className="flex items-start justify-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-sansPalanquin font-bold ">
                                {stat.value}
                            </p>
                            <p className="leading-7 font-sansMontserrat text-mutedSlate">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-lightPrimary bg-heroBackground bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoes collection"
                    width={540}
                    height={610}
                    className="object-cover relative z-5 w-[540px] h-[610px]"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((image, index) => (
                        <div key={index} className="z-10">
                            <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShoeImage={(shoe) =>
                                    setBigShoeImg(shoe)
                                }
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
