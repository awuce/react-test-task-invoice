const SET_CURRENT_BUYERS_DATA = "SET_CURRENT_BUYERS_DATA"
const SORT_BY_ID = "SORT_BY_ID"
const SORT_BY_NAME = "SORT_BY_NAME"
const SORT_BY_AVERAGE_CHECK = "SORT_BY_AVERAGE_CHECK"
const SORT_BY_NUMBER_PURCHASES = "SORT_BY_NUMBER_PURCHASES"
const SORT_BY_TOTAL_PROCEEDS = "SORT_BY_TOTAL_PROCEEDS"

let initialState = {
    buyersData: [
        {id: 0, buyerId: 1, buyerName: "_", averageCheck: Math.round(1250/3), checks: [1000, 250], numberPurchases: 2, totalProceeds: 1250},
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

const buyersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_BUYERS_DATA:
            return {
                ...state,
                currentBuyersData: action.data,
            }
        case SORT_BY_ID:
            return {
                ...state,
                currentBuyersData: state.buyersData.sort(function(a,b) {
                    if (action.toggle) return a.buyerId - b.buyerId
                    return b.buyerId - a.buyerId
                }).slice(action.indexes[0], action.indexes[1]),
            }
        case SORT_BY_NAME:
            return {
                ...state,
                currentBuyersData: state.buyersData.sort(function(a,b) {
                    if (action.toggle) return a.buyerName - b.buyerName
                    return b.buyerName - a.buyerName
                }).slice(action.indexes[0], action.indexes[1]),
            }
        case SORT_BY_AVERAGE_CHECK:
            return {
                ...state,
                currentBuyersData: state.buyersData.sort(function(a,b) {
                    if (action.toggle) return a.averageCheck - b.averageCheck
                    return b.averageCheck - a.averageCheck
                }).slice(action.indexes[0], action.indexes[1]),
            }
        case SORT_BY_NUMBER_PURCHASES:
            return {
                ...state,
                currentBuyersData: state.buyersData.sort(function(a,b) {
                    if (action.toggle) return a.numberPurchases - b.numberPurchases
                    return b.numberPurchases - a.numberPurchases
                }).slice(action.indexes[0], action.indexes[1]),
            }
        case SORT_BY_TOTAL_PROCEEDS:
            return {
                ...state,
                currentBuyersData: state.buyersData.sort(function(a,b) {
                    if (action.toggle) return a.totalProceeds - b.totalProceeds
                    return b.totalProceeds - a.totalProceeds
                }).slice(action.indexes[0], action.indexes[1]),
            }
        default:
            return state;
    }
}

export const setCurrentBuyersDataAC = (data) => ({ type: SET_CURRENT_BUYERS_DATA, data })
export const sortByIdAC = (toggle, indexes) => ({ type: SORT_BY_ID, toggle, indexes })
export const sortByNameAC = (toggle, indexes) => ({ type: SORT_BY_NAME, toggle, indexes })
export const sortByAverageCheckAC = (toggle, indexes) => ({ type: SORT_BY_AVERAGE_CHECK, toggle, indexes })
export const sortByNumberPurchasesAC = (toggle, indexes) => ({ type: SORT_BY_NUMBER_PURCHASES, toggle, indexes })
export const sortByTotalProceedsAC = (toggle, indexes) => ({ type: SORT_BY_TOTAL_PROCEEDS, toggle, indexes })

export default buyersReducer;