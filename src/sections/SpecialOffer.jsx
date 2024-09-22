import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

const SpecialOffer = () => {
    return (
        <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 wide-container">
            <div className="flex-1">
                <img
                    src={offer}
                    alt="Shoe Promotion"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-sansPalanquin font-bold">
                    <span className="text-vibrantCoral">Special </span>
                    Offer
                </h2>
                <p className="mt-4 text-inf0">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 text-info">
                    Navigate a realm of possibilities designed to fulfill your
                    unique desires, surpassing the loftiest expectations. Your
                    journey with us is nothing short of exceptional.
                </p>
                <div className="mt-11 flex flex-wrap gap-4 ">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button
                        label="Learn more"
                        backgroundColor="bg-white"
                        borderColor="border-mutedSlate"
                        textColor="text-mutedSlate"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
