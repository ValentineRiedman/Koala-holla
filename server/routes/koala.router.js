const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require( '../routes/pool' );

// GET
router.get( '/', ( req, res )=>{
    console.log( 'in /koala GET' );
    // test query
    const queryString = `SELECT * FROM koala`;
    pool.query( queryString ).then( ( result )=>{
        res.send( result.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    }) // end query
})

// POST
router.post( '/', ( req, res )=>{
    console.log( 'in koala POST:', req.body );
    /// - replace array push with db table INSERT
    const queryString = `INSERT INTO koala ( name, gender, age, ready_to_transfer, notes ) VALUES ( 'Valentine', 'M', '38','N', 'Likes tacos' );`;
    const values = [ req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes  ];
    pool.query( queryString, values ).then( ( result )=>{
        res.sendStatus( 201 ); // 201 = CREATED
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})



// PUT


// DELETE

module.exports = koalaRouter;