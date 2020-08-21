
const SORT_BY_ID = "SORT_BY_BUYER_ID"
const SORT_BY_NAME = "SORT_BY_NAME"
const SORT_BY_AVERAGE_CHECK = "SORT_BY_AVERAGE_CHECK"
const SORT_BY_NUMBER_PURCHASES = "SORT_BY_NUMBER_PURCHASES"
const SORT_BY_TOTAL_PROCEEDS = "SORT_BY_TOTAL_PROCEEDS"

let initialState = {
    buyersData: [
        {id: 0, buyerId: 1, buyerName: "_", averageCheck: 0, checks: [1000, 250], numberPurchases: 2, totalProceeds: 0},
        {id: 1, buyerId: 2, buyerName: "_", averageCheck: 0, checks: [100, 300], numberPurchases: 2, totalProceeds: 0},
        {id: 2, buyerId: 3, buyerName: "_", averageCheck: 0, checks: [200], numberPurchases: 1, totalProceeds: 0},
        {id: 3, buyerId: 4, buyerName: "_", averageCheck: 0, checks: [100, 400], numberPurchases: 2, totalProceeds: 0},
        {id: 4, buyerId: 5, buyerName: "_", averageCheck: 0, checks: [], numberPurchases: 0, totalProceeds: 0},
        {id: 5, buyerId: 6, buyerName: "_", averageCheck: 0, checks: [250], numberPurchases: 1, totalProceeds: 0},
        {id: 6, buyerId: 7, buyerName: "_", averageCheck: 0, checks: [100], numberPurchases: 1, totalProceeds: 0},
        {id: 7, buyerId: 8, buyerName: "_", averageCheck: 0, checks: [300], numberPurchases: 1, totalProceeds: 0},
        {id: 8, buyerId: 9, buyerName: "_", averageCheck: 0, checks: [500], numberPurchases: 1, totalProceeds: 0},
        {id: 9, buyerId: 10, buyerName: "_", averageCheck: 0, checks: [50], numberPurchases: 1, totalProceeds: 0},
        {id: 10, buyerId: 11, buyerName: "_", averageCheck: 0, checks: [1000, 200], numberPurchases: 2, totalProceeds: 0},
        {id: 11, buyerId: 12, buyerName: "_", averageCheck: 0, checks: [], numberPurchases: 0, totalProceeds: 0},
        {id: 12, buyerId: 13, buyerName: "_", averageCheck: 0, checks: [300], numberPurchases: 1, totalProceeds: 0},
        {id: 13, buyerId: 14, buyerName: "_", averageCheck: 0, checks: [100, 50, 200], numberPurchases: 3, totalProceeds: 0},
        {id: 14, buyerId: 15, buyerName: "_", averageCheck: 0, checks: [200], numberPurchases: 1, totalProceeds: 0},
    ],
}


const buyersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_ID:
            return {
                ...state,
                buyersData: [...state.buyersData].sort(function(a,b) {
                    if (action.toggle) return a.buyerId - b.buyerId
                    return b.buyerId - a.buyerId
                }),
            }
        case SORT_BY_NAME:
            return {
                ...state,
                buyersData: [...state.buyersData].sort(function(a,b) {
                    if (action.toggle) return a.buyerName - b.buyerName
                    return b.buyerName - a.buyerName
                }),
            }
        case SORT_BY_AVERAGE_CHECK:
            return {
                ...state,
                buyersData: [...state.buyersData].sort(function(a,b) {
                    if (action.toggle) return a.averageCheck - b.averageCheck
                    return b.averageCheck - a.averageCheck
                }),
            }
        case SORT_BY_NUMBER_PURCHASES:
            return {
                ...state,
                buyersData: [...state.buyersData].sort(function(a,b) {
                    if (action.toggle) return a.numberPurchases - b.numberPurchases
                    return b.numberPurchases - a.numberPurchases
                }),
            }
        case SORT_BY_TOTAL_PROCEEDS:
            return {
                ...state,
                buyersData: [...state.buyersData].sort(function(a,b) {
                    if (action.toggle) return a.totalProceeds - b.totalProceeds
                    return b.totalProceeds - a.totalProceeds
                }),
            }
        default:
            return state;
    }
}

export const sortByIdAC = (toggle) => ({ type: SORT_BY_ID, toggle })
export const sortByNameAC = (toggle) => ({ type: SORT_BY_NAME, toggle })
export const sortByAverageCheckAC = (toggle) => ({ type: SORT_BY_AVERAGE_CHECK, toggle })
export const sortByNumberPurchasesAC = (toggle) => ({ type: SORT_BY_NUMBER_PURCHASES, toggle })
export const sortByTotalProceedsAC = (toggle) => ({ type: SORT_BY_TOTAL_PROCEEDS, toggle })

export default buyersReducer;