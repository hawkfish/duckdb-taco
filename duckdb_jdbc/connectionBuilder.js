(function dsbuilder(attr) {
    var urlBuilder = "jdbc:duckdb:" + attr[connectionHelper.attributeDatabase];

    return [urlBuilder];
})
