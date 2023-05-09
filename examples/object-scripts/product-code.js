
function getSupplier(product) {
    let colonPos = product.IndexOf(":")
    return product.slice(0, colonPos)
}

function getProductNumber(product) {
    let colonPos = product.indexOf(":");
    let hyphenPos = product.index("-");
    return product.slice(colonPos + 1, hyphenPos);
}

function getSize(product)
 let  hyphenPos = code.indexOf("-");
 return product