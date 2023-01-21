import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import DemoLayouts from '~/components/shared/switcher-demo/modules/DemoLayouts';
import { switchDemoPanel } from '~/store/app/action';
class SwicherDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggleDemoPanel() {
        const { isShowDemoPanel } = this.props;
        this.props.dispatch(switchDemoPanel(!isShowDemoPanel));
    }

    render() {
        const { isShowDemoPanel } = this.props;
        return (
            <div className="ps-demo-area">
                <button
                    className="ps-btn--demo"
                    onClick={this.handleToggleDemoPanel.bind(this)}>
                    <span>More Demos</span>
                </button>
                <section
                    className={`ps-section--switcher-demo ${
                        isShowDemoPanel === true ? 'active' : ''
                    }`}>
                    <button
                        className="ps-section__close"
                        onClick={this.handleToggleDemoPanel.bind(this)}>
                        <i className="icon-cross"></i>
                    </button>
                    <div className="ps-container">
                        <div className="ps-section__header text-center">
                            <h3>Martfury Theme Demos</h3>
                            <p>
                                Check homepage demos, shop and single product
                                page layouts!
                            </p>
                        </div>
                        <div className="ps-section__content">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Homepages" key="1">
                                    <DemoLayouts />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(state => state.app)(SwicherDemo);
