(function dsbuilder(attr) {
    var urlBuilder = "jdbc:duckdb:" + attr['v-dbfile'];

    return [urlBuilder];
})
