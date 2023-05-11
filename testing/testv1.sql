-- pushd ~/Documents/Development/connector-plugin-sdk/tests/datasets/TestV1
-- duckdb taco.db
create schema TestV1;
use taco.TestV1;
.read DDL/calcs.sql
.read DDL/Staples.sql
insert into calcs from read_csv_auto('Calcs_headers.csv');
insert into Staples from read_csv_auto('Staples_utf8.csv', header=False);
