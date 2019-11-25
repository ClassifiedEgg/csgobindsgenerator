import { action } from 'easy-peasy'

export const model = {
    displaySelectedKey: 'Click to change',
    currentSelectedKey: '',
    currentSelectedCode: '',
    currentSelectedBinds: [],
    allbinds: [],
    changeCurrentKey: action((state, {display, key, keyCode}) => {
        state.displaySelectedKey = display;
        state.currentSelectedKey = key;
        state.currentSelectedCode = keyCode;
    })
}