import React, { useEffect, useState } from 'react';
import { getStoresHelper } from '~/utilities/store-helpers';
import StoreDefault from '~/components/elements/stores/StoreDefault';

const StoreItems = () => {
    const [loading, setLoading] = useState(false);
    const [stores, setStores] = useState(null);

    async function getStores() {
        setLoading(true);
        const responseData = await getStoresHelper();
        if (responseData) {
            setLoading(false);
            if (responseData.length > 0) {
                setStores(responseData);
            }
        }
    }

    useEffect(() => {
        getStores();
    }, []);

    // Views

    let storesItemsView;
    if (!loading) {
        if (stores) {
            storesItemsView = stores.map((item) => (
                <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
                    key={item.id}>
                    <StoreDefault source={item} />
                </div>
            ));
        } else {
            storesItemsView = <p>No store found.</p>;
        }
    } else {
        storesItemsView = <p>Loading...</p>;
    }

    return <div className="ps-stores-items row">{storesItemsView}</div>;
};

export default StoreItems;
