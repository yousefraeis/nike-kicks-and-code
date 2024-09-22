const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    };

    return (
        <div
            className={`border-2 rounded-lg ${
                bigShoeImg === imgURL.bigShoe
                    ? 'border-vibrantCoral '
                    : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-cardBackground bg-center bg-cover sw:w-40 sm:h-40 rounded-lg max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103.34}
                    className="object-cover w-[130px] h-[160px] rounded-lg"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
