const express = require('express');
const cors = require('cors');
const connection = require('./Connection');
const queries = require('./Queries');

const app = express();

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('query some other directory')
});

app.get('/kits', (req, res) => {
    connection.query(queries.SELECT_KITS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
});

app.get('/kits/add', (req, res) => {
    const { name } = req.query;
    const INSERT_KITS_QUERY = `INSERT INTO kits (kit_id, kit_name) VALUES (null, '${name}')`
    connection.query(INSERT_KITS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('successfully added kit')
        }
    })
});

app.get('/locations', (req, res) => {
    connection.query(queries.SELECT_LOCATIONS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
});

app.get('/kitlocations', (req, res) => {
    connection.query(queries.KIT_LOCATIONS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
});

app.get('/people', (req, res) => {
    connection.query(queries.SELECT_PEOPLE_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
});

app.get('/groups', (req, res) => {
    connection.query(queries.SELECT_GROUPS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
});

app.listen(4000, () => {
    console.log("Listening on 4000")
});
