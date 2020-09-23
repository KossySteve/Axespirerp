module.exports = {
    Item: ['code', 'name', 'description', 'type', 'group', 'isGroup', 'company', 'brand', 'model', 'isBatch', 'isAuto', 
    'isFavorite', 'base', 'hsn', 'standardCost', 'saleRate', 'purchaseRate', 'minRate','maxRate', 'saleRev', 'purchaseRev'],
    ItemKit: ['code', 'name', 'description', 'type', 'company', 'kitPricingMethod', 'minAddonCount', 'minComponentCount', 'isKit'],
    ItemGroup: ['code', 'name', 'description', 'groupType', 'taxGroup', 'taxAuthority', 'percentage', 'refCode', 'isGtsGroup', 'isGroup', 'vatGtsType'],
    ItemPrice: ['code', 'name', 'description', 'type'],

    
    ItemSettings: ['code', 'name', 'description', 'type', 'company'],
    Location: ['code', 'name', 'description', 'color', 'refCode', 'isGroup', 'additionalCode', 'additionalName', 'additionalDescription', 'group', 'otherRefCode'],
    StockAdjustment: ['no', 'date', 'branch', 'purchaseRequest', 'adjustedBy', 'remarks', 'refNo'],
    StockConfirmation: ['no', 'date', 'branch', 'stockCount', 'confirmedBy', 'remarks'],
    StockCount: ['no', 'date', 'cycleCountBy','remarks', 'group', 'item','itemLike', 'noOfItems', 'location','variant1', 'variant2', 
    'variant3','make', 'fromStockQuantity', 'toStockQuantity','includeZeroOrNegativeStock', 'showOnlyZeroStockItem', 'abcCategory',
    'fsnCategory'],
    StockOpening: ['no', 'date', 'branch', 'adjustedBy', 'remark'],
    StockTransferInward: ['no', 'date', 'outward', 'tax', 'inwardedBy', 'toBranch', 'fromBranch', 'lorryNo', 
    'expectedDeliveryDate', 'headerCharges', 'distributeCharges'],
    StockTransferOutward:  ['no', 'date', 'purchaseRequest', 'tax', 'issuedBy', 'fromBranch', 'toBranch', 'transporterName', 'shipmentType', 'transferRemarks', 'deliveryToBranch'],
    Variant: ['code', 'name', 'description', 'variantType', 'color', 'thirdVariant', 'refCode'],
}