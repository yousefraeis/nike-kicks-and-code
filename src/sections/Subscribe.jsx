import { Button } from '../components';

const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className="wide-container flex justify-between items-center max-lg:flex-col gap-10"
        >
            <h3 className="text-4xl leading-[68px] lg:max-w-md font-sansPalanquin font-bold">
                Sign Up for
                <span className="text-vibrantCoral"> Updates </span>& Newsletter
            </h3>

            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-mutedSlate rounded-full">
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className="input-field "
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="Sign Up" fullWidth />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
