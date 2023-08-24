(function dsbuilder(attr) {
    // MotherDuck connections require that a database be specified
    // (without a database, any tables dragged in with the Tableau UI are lacking the 
    // database. For example, they are treated as my_schema.my_table instead of the valid my_database.my_schema.my_table)
    if (String(attr[connectionHelper.attributeServer]).startsWith('md:')) {
        // Anything after the first : and before the first ? should be the database name. 
        // If it is blank or non-existent, throw an error to request a database be specified.
        var databaseAndParameters = String(attr[connectionHelper.attributeServer]).split(':',2)[1];
        var database = databaseAndParameters.split('?')[0].trim();
        if (database == '') {
            var errorMessage = 'Please specify a database when connecting using MotherDuck.';
            errorMessage += '\n' + 'A connection string should begin with "md:my_database_name",';
            errorMessage += 'and may be optionally followed by parameters in the format "?parameter1=value1&parameter2=value2".';
            errorMessage += '\n' + 'For details, visit https://motherduck.com/docs/integrations/jdbc-driver.';

            return connectionHelper.ThrowTableauException(errorMessage);
        }
    }
    var urlBuilder = "jdbc:duckdb:" + attr[connectionHelper.attributeServer];

    return [urlBuilder];
})
