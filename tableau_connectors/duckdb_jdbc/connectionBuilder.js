(function dsbuilder(attr) {
    var urlBuilder = "jdbc:duckdb:" + attr[connectionHelper.attributeServer];

    return [urlBuilder];
})
