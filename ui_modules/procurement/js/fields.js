let fields = {
    carrierModel: ['code','name','searchName','contactType','taxAuthorities', 'payTo','logisticsProvider','inactive'],
    purchaseOrderModel: ['code', 'no', 'date','branch', 'serviceOrder', 'tax', 'validTillDate', 'supplierName', 'purchaseMgr', 'priceColumn', 'requirementDate'],
    purchaseReturnModel: ['code', 'no', 'date','branch','invoiceSupplier', 'tax','purchaseMgr', 'paymentType','account','supplier', 'paymentType2', 'priceColumn', 'supInvNo', 'cancelInvoice'],
    supplierModel: ['code', 'salutation', 'name', 'middleName', 'lastName', 'company', 'contactType', 'foreignCurrency', 'defaultExecutive', 'payTo', 'inactive', 'creditPurAllow', 'isSmsAllowed', 'isEmailAllowed'],
    purchaseRequisitionModel: ['code', 'no', 'date','branch', 'requirementDate', 'validTillDate', 'purchaseMgr'],
    purchaseReturnRequestModel: ['code', 'no', 'date', 'branch','invoiceSupplier', 'purchaseInvoice','tax', 'purchaseMgr','returnRequestRemark'], 
    purchaseReceiptModel: ['code', 'no', 'date','importNo', 'branch', 'orderInvoice', 'tax', 'purchaseMgr', 'supplierName', 'dmNo', 'dmDate'],
    purchaseInvoiceModel: ['code', 'no', 'date','branch', 'purchaseReceiptOrder', 'tax', 'validTillDate', 'supplierName', 'billingAddress', 'paymentType'],
}
