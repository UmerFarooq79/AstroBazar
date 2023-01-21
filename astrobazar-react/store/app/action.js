export const actionTypes = {
    SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
    SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS',
};

export function switchDemoPanel(payload) {
    return { type: actionTypes.SWITCH_DEMO_PANEL, payload };
}

export function switchDemoPanelSuccess(payload) {
    return { type: actionTypes.SWITCH_DEMO_PANEL_SUCCESS, payload };
}
