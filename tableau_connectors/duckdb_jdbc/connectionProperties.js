(function propertiesbuilder(attr) {
    // These are the DBClientConfig properties
    var props = {};
    props['duckdb.read_only'] = (attr[connectionHelper.attributeServer] != ':memory:');
    
    return props;
})
