import { Nav } from './components';

import {
    Hero,
    PopularProducts,
    SuperQuality,
    Services,
    SpecialOffer,
    CustomerReviews,
    Subscribe,
    Footer,
} from './sections';

const App = () => {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:sl wideScreen:sr sb">
                <Hero />
            </section>

            <section className="s">
                <PopularProducts />
            </section>

            <section className="s">
                <SuperQuality />
            </section>

            <section className="sx py-10">
                <Services />
            </section>

            <section className="s">
                <SpecialOffer />
            </section>

            <section className="bg-softPaleBlue s">
                <CustomerReviews />
            </section>

            <section className="sx sm:py-32 py-16 w-full">
                <Subscribe />
            </section>

            <section className="bg-black sx st pb-8">
                <Footer />
            </section>
        </main>
    );
};

export default App;
