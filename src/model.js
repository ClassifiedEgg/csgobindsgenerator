import { action } from 'easy-peasy'

export const model = {
    currentSelectedKey: 'Click to change',
    currentSelectedCode: null,
    currentSelectedBinds: [],
    allBinds: [],
    changeCurrentKey: action((state, { key, keyCode }) => {
        state.currentSelectedKey = key;
        state.currentSelectedCode = keyCode;
        state.currentSelectedBinds
            = state.allBinds.find(({ key }) => key === state.currentSelectedKey)
                ? state.allBinds.find(({ key }) => key === state.currentSelectedKey).binds : [];
    }),
    addBindToCurrentKey: action((state, payload) => {
        state.currentSelectedBinds = [...state.currentSelectedBinds, payload];
        if (state.allBinds.find(({ key }) => key === state.currentSelectedKey)) {
            state.allBinds.find(({ key }) => key === state.currentSelectedKey).binds
                = state.currentSelectedBinds;
        } else {
            let newKeyBind = {
                key: state.currentSelectedKey,
                keyCode: state.currentSelectedCode,
                binds: [payload]
            };
            state.allBinds.push(newKeyBind);
        }
    }),
    removeBindFromCurrent: action((state, payload) => {
        state.currentSelectedBinds = state.currentSelectedBinds.filter((cmd) => cmd !== payload);
        state.allBinds.find(({ key }) => key === state.currentSelectedKey).binds
            = state.currentSelectedBinds;
    })
}