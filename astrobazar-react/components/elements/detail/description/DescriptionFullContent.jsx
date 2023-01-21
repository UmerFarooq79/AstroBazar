import React from 'react';
import PartialReview from '~/components/elements/detail/description/PartialReview';

const DescriptionFullContent = () => (
    <div className="ps-product__content">
        <h3 className="ps-product__heading">Description</h3>
        <div className="ps-document">
            <h5>Embodying the Raw, Wayward Spirit of Rock 'N' Roll</h5>
            <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
            </p>
            <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
            </p>
            <img
                className="mb-30"
                src="/static/img/products/description.jpg"
                alt="martfury"
            />
            <h5>What do you get</h5>
            <p>
                Sound of Marshall, unplugs the chords, and takes the show on the
                road.
            </p>
            <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
            </p>
            <p>
                The FM radio is perhaps gone for good, the assumption apparently
                being that the jury has ruled in favor of streaming over the
                internet. The IR blaster is another feature due for retirement –
                the S6 had it, then the Note5 didn’t, and now with the S7 the
                trend is clear.
            </p>
            <h5>Perfectly Done</h5>
            <p>
                Meanwhile, the IP68 water resistance has improved from the S5,
                allowing submersion of up to five feet for 30 minutes, plus
                there’s no annoying flap covering the charging port
            </p>
            <ul className="pl-0">
                <li>
                    No FM radio (except for T-Mobile units in the US, so far)
                </li>
                <li>No IR blaster</li>
                <li>No stereo speakers</li>
            </ul>
            <p>
                If you’ve taken the phone for a plunge in the bath, you’ll need
                to dry the charging port before plugging in. Samsung hasn’t
                reinvented the wheel with the design of the Galaxy S7, but it
                didn’t need to. The Gala S6 was an excellently styled device,
                and the S7 has managed to improve on that.
            </p>
        </div>
        <h3 className="ps-product__heading">Specification</h3>
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    <tr>
                        <td>Color</td>
                        <td>Black, Gray</td>
                    </tr>
                    <tr>
                        <td>Style</td>
                        <td>Ear Hook</td>
                    </tr>
                    <tr>
                        <td>Wireless</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>5.5 x 5.5 x 9.5 inches</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>6.61 pounds</td>
                    </tr>
                    <tr>
                        <td>Battery Life</td>
                        <td>20 hours</td>
                    </tr>
                    <tr>
                        <td>Bluetooth</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 className="ps-product__heading">Vendor</h3>
        <h4>GoPro</h4>
        <p>
            Digiworld US, New York’s no.1 online retailer was established in May
            2012 with the aim and vision to become the one-stop shop for retail
            in New York with implementation of best practices both online
        </p>
        <a href="#">More Products from gopro</a>
        <PartialReview />
        <h3 className="ps-product__heading">Questions and Answers</h3>
        <div className="ps-block--questions-answers">
            <h3>Questions and Answers</h3>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Have a question? Search for answer?"
                />
            </div>
        </div>
        <h3 className="ps-product__heading">More Offers</h3>
        <p>Sorry no more offers available</p>
    </div>
);

export default DescriptionFullContent;
