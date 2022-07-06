\echo 'Delete and recreate Vaccine_Hub db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE Vaccine_Hub;
CREATE DATABASE Vaccine_Hub;
\connect vaccine_hub;

\i 'vaccine-hub-schema.sql'
