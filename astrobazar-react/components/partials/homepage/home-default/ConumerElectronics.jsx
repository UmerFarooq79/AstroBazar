import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import CollectionProducts from './modules/CollectionProducts';
class ConsumerElectronics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            currentCollection: 'newArrivals',
        };
    }

    handleChangeProduct(e, currentItem, slug) {
        e.preventDefault();
        const { collections } = this.props;
        const items = getColletionBySlug(collections, slug);
        this.setState({
            currentCollection: currentItem,
            items: items,
        });
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const { currentCollection, items } = this.state;
        const products = getColletionBySlug(collections, collectionSlug);
        const sectionLinks = [
            {
                title: 'New Arrivals',
                name: 'newArrivals',
                slug: 'consumer_electronics',
            },
            {
                title: 'Best seller',
                name: 'bestSeller',
                slug: 'fullwidth-consumer-electronic-best-seller',
            },
            {
                title: 'Most Popular',
                name: 'mostPopular',
                slug: 'fullwidth-consumer-electronic-most-popular',
            },
        ];
        let sectionItems;
        if (currentCollection !== 'newArrivals') {
            sectionItems = <CollectionProducts products={items} />;
        } else {
            if (products && products.length > 0) {
                sectionItems = <CollectionProducts products={products} />;
            } else {
                sectionItems = <p>No Record(s)</p>;
            }
        }
        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>Consumer Electronics</h3>
                        <ul className="ps-section__links">
                            {sectionLinks.map(link => (
                                <li
                                    className={
                                        currentCollection === link.name
                                            ? 'active'
                                            : ''
                                    }
                                    key={link.name}>
                                    <a
                                        onClick={e =>
                                            this.handleChangeProduct(
                                                e,
                                                link.name,
                                                link.slug
                                            )
                                        }>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">{sectionItems}</div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(ConsumerElectronics);
