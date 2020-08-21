import terminalsReducer, {addTerminalAC, deleteTerminalAC} from "./terminals-reducer";

let initialState = {
    terminalsData: [
        {id: 0, terminalId: 0, name: "Terminal 1", desc: "None Desc"},
        {id: 1, terminalId: 1, name: "Terminal 2", desc: "None Desc"},
        {id: 2, terminalId: 2, name: "Terminal 3", desc: "None Desc Desc"},
        {id: 3, terminalId: 3, name: "Terminal 4", desc: ""},
    ]
}

it('length of terminalsData should be incremented', () => {
    let action = addTerminalAC("Terminal 5", "Description for terminal 5");
    let state = terminalsReducer(initialState, action);
    expect(state.terminalsData.length).toBe(5);
})

it('length of terminalsData should be decremented', () => {
    let action = deleteTerminalAC(2);
    let state = terminalsReducer(initialState, action);
    expect(state.terminalsData.length).toBe(3);
})

export default terminalsReducer;