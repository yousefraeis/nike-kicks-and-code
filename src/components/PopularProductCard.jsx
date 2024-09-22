import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, rate }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />

            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating icon" width={24} height={24} />

                <p className="font-sansMontserrat text-xl leading-normal text-mutedSlate">
                    {rate}
                </p>
            </div>

            <h3 className="mt-2 text-2xl leading-normal font-semibold font-sansPalanquin">
                {name}
            </h3>

            <p className="mt-2 font-semibold font-sansMontserrat text-vibrantCoral text-2xl leading-normal">
                {price}
            </p>
        </div>
    );
};

export default PopularProductCard;
