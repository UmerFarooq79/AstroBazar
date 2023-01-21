import React from 'react';
import StoreItems from '~/components/partials/stores/StoreItems';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const StoreListPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Stores',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Store list">
            <div className="ps-page--single ps-page--vendor">
                <BreadCrumb breacrumb={breadCrumb} />
                <section className="ps-store-list">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>Store list</h3>
                        </div>
                        <div className="ps-section__content">
                            <div className="ps-section__search row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <button>
                                            <i className="icon-magnifier"></i>
                                        </button>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search vendor..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <StoreItems />
                        </div>
                    </div>
                </section>
            </div>
            <Newsletters layout="container" />
        </PageContainer>
    );
};

export default StoreListPage;
