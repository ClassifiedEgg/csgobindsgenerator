import { action } from 'easy-peasy'

export const model = {
    theme: 'light',
    currentSelectedKey: 'Click to change',
    currentSelectedCode: null,
    currentSelectedBinds: [],
    allBinds: [],
    copyChangeFromLastTime: true,
    downloadChangeFromLastTime: true,
    changeCurrentKey: action((state, { key, keyCode }) => {
        state.currentSelectedKey = key;
        state.currentSelectedCode = keyCode;
        state.currentSelectedBinds
            = state.allBinds.find(({ keyCode }) => keyCode === state.currentSelectedCode)
                ? state.allBinds.find(({ keyCode }) => keyCode === state.currentSelectedCode).binds : [];
    }),
    addBindToCurrentKey: action((state, payload) => {
        state.currentSelectedBinds = [...state.currentSelectedBinds, payload];
        if (state.allBinds.find(({ keyCode }) => keyCode === state.currentSelectedCode)) {
            state.allBinds.find(({ keyCode }) => keyCode === state.currentSelectedCode).binds
                = state.currentSelectedBinds;
        } else {
            let newKeyBind = {
                key: state.currentSelectedKey,
                keyCode: state.currentSelectedCode,
                binds: [payload]
            };
            state.allBinds.push(newKeyBind);
        }
        state.copyChangeFromLastTime = true;
        state.downloadChangeFromLastTime = true;
    }),
    removeBindFromCurrent: action((state, payload) => {
        state.currentSelectedBinds = state.currentSelectedBinds.filter((cmd) => cmd !== payload);
        state.allBinds.find(({ keyCode }) => keyCode === state.currentSelectedCode).binds
            = state.currentSelectedBinds;

        if (state.currentSelectedBinds.length === 0) {
            state.allBinds = state.allBinds.filter(({ binds }) => binds.length !== 0)
        }
        state.copyChangeFromLastTime = true;
        state.downloadChangeFromLastTime = true;
    }),
    setChangeToFalse: action((state, payload) => {
        payload === "copy" ? 
            state.copyChangeFromLastTime = false :
            state.downloadChangeFromLastTime = false;
    }),
    toggleTheme: action((state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
    })
}