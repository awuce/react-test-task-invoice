const ADD_TERMINAL = "ADD_TERMINAL"
const DELETE_TERMINAL = "DELETE_TERMINAL"

let initialState = {
    terminalsData: [
        {id: 0, terminalId: 0, name: "Terminal 1", desc: "None Desc"},
        {id: 1, terminalId: 1, name: "Terminal 2", desc: "None Desc"},
        {id: 2, terminalId: 2, name: "Terminal 3", desc: "None Desc Desc"},
        {id: 3, terminalId: 3, name: "Terminal 4", desc: null},
    ]
}

const terminalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TERMINAL:
            return {
                ...state,
                terminalsData: [
                    ...state.terminalsData,
                    {
                        id: state.terminalsData.length,
                        terminalId: Date.now(),
                        name: action.terminalName,
                        desc: action.terminalDesc,
                    }
                ]
            };
        case DELETE_TERMINAL:
            return {
                ...state,
                terminalsData: state.terminalsData.filter(t => t.terminalId !== action.terminalId)
            }
        default:
            return state;
    }
}

export const addTerminalAC = (terminalName, terminalDesc) => ({ type: ADD_TERMINAL, terminalName, terminalDesc})
export const deleteTerminalAC = (terminalId) => ({ type: DELETE_TERMINAL, terminalId })

export default terminalsReducer;