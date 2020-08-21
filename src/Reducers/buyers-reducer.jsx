
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
    ]
}

const buyersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default buyersReducer;