import buyersReducer, {
    setCurrentBuyersDataAC,
    sortByAverageCheckAC,
    sortByIdAC,
    sortByNumberPurchasesAC,
    sortByTotalProceedsAC
} from "./buyers-reducer";

let initialState = {
    buyersData: [
        {id: 0, buyerId: 1, buyerName: "_", averageCheck: Math.round(1250/2), checks: [1000, 250], numberPurchases: 2, totalProceeds: 1250},
        {id: 1, buyerId: 2, buyerName: "_", averageCheck: Math.round(400/2), checks: [100, 300], numberPurchases: 2, totalProceeds: 400},
        {id: 2, buyerId: 3, buyerName: "_", averageCheck: 200, checks: [200], numberPurchases: 1, totalProceeds: 0},
        {id: 3, buyerId: 4, buyerName: "_", averageCheck: Math.round(500/2), checks: [100, 400], numberPurchases: 2, totalProceeds: 500},
        {id: 4, buyerId: 5, buyerName: "_", averageCheck: 0, checks: [], numberPurchases: 0, totalProceeds: 0},
        {id: 5, buyerId: 6, buyerName: "_", averageCheck: 250, checks: [250], numberPurchases: 1, totalProceeds: 250},
        {id: 6, buyerId: 7, buyerName: "_", averageCheck: 100, checks: [100], numberPurchases: 1, totalProceeds: 100},
        {id: 7, buyerId: 8, buyerName: "_", averageCheck: 300, checks: [300], numberPurchases: 1, totalProceeds: 300},
        {id: 8, buyerId: 9, buyerName: "_", averageCheck: 500, checks: [500], numberPurchases: 1, totalProceeds: 500},
        {id: 9, buyerId: 10, buyerName: "_", averageCheck: 50, checks: [50], numberPurchases: 1, totalProceeds: 50},
        {id: 10, buyerId: 11, buyerName: "_", averageCheck: Math.round(1200/2), checks: [1000, 200], numberPurchases: 2, totalProceeds: 1200},
        {id: 11, buyerId: 12, buyerName: "_", averageCheck: 0, checks: [], numberPurchases: 0, totalProceeds: 0},
        {id: 12, buyerId: 13, buyerName: "_", averageCheck: 300, checks: [300], numberPurchases: 1, totalProceeds: 300},
        {id: 13, buyerId: 14, buyerName: "_", averageCheck: Math.round(1600/3), checks: [1000, 400, 200], numberPurchases: 3, totalProceeds: 1600},
        {id: 14, buyerId: 15, buyerName: "_", averageCheck: 200, checks: [200], numberPurchases: 1, totalProceeds: 200},
    ],
    currentBuyersData: [],
}

it('currentBuyersData should be equal buyersData', () => {
    let action = setCurrentBuyersDataAC(initialState.buyersData);
    let state = buyersReducer(initialState, action);
    expect(state.currentBuyersData[0].buyerId).toBe(state.buyersData[0].buyerId);
})

it('sorting of buyersData by Id in ascending order should be correct', () => {
    let action = sortByIdAC(false, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].buyerId).toBe(15);
})
it('sorting of buyersData by Id in descending order should be correct', () => {
    let action = sortByIdAC(true, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].buyerId).toBe(1);
})


it('sorting of buyersData by AverageCheck in ascending order should be correct', () => {
    let action = sortByAverageCheckAC(false, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].averageCheck).toBe(625);
})
it('sorting of buyersData by AverageCheck in descending order should be correct', () => {
    let action = sortByAverageCheckAC(true, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].averageCheck).toBe(0);
})


it('sorting of buyersData by NumberPurchases in ascending order should be correct', () => {
    let action = sortByNumberPurchasesAC(false, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].numberPurchases).toBe(3);
})
it('sorting of buyersData by NumberPurchases in descending order should be correct', () => {
    let action = sortByNumberPurchasesAC(true, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].numberPurchases).toBe(0);
})


it('sorting of buyersData by TotalProceeds in ascending order should be correct', () => {
    let action = sortByTotalProceedsAC(false, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].totalProceeds).toBe(1600);
})
it('sorting of buyersData by TotalProceeds in descending order should be correct', () => {
    let action = sortByTotalProceedsAC(true, [0, 15]);
    let state = buyersReducer(initialState, action);
    expect(state.buyersData[0].totalProceeds).toBe(0);
})