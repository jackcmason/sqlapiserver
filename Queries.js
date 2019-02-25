module.exports = Object.freeze({
    SELECT_KITS_QUERY: 'SELECT * FROM kits',
    SELECT_LOCATIONS_QUERY: 'SELECT * FROM locations',
    SELECT_GROUPS_QUERY: 'SELECT * FROM persongroup',
    SELECT_PEOPLE_QUERY: 'SELECT * FROM persons',
    KIT_LOCATIONS_QUERY: 'SELECT kits.kit_name, locations.location_name FROM kits JOIN kitlocations ON kits.kit_id = kitlocations.kit_id JOIN locations ON locations.location_id = kitlocations.location_id',
});
