const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require( '../routes/pool' );

// GET
koalaRouter.get( '/', ( req, res )=>{
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
koalaRouter.post( '/', ( req, res )=>{
    console.log( 'in koala POST:', req.body );
    const queryString = `INSERT INTO koala ( name, gender, age, ready_to_transfer, notes ) VALUES ( $1, $2, $3, $4, $5 );`;
    const values = [ req.body.name, req.body.gender, req.body.age, req.body.readyForTransfer, req.body.notes  ];
    pool.query( queryString, values ).then( ( result )=>{
        res.sendStatus( 201 ); // 201 = CREATED
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})



// PUT
koalaRouter.put( '/', ( req, res )=>{
    console.log( 'in /koalaRouter', req.query );
    let queryString = `UPDATE koala SET ready_to_transfer=true WHERE id=$1;`
    let values = [ req.query.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})


// DELETE
koalaRouter.delete( '/', ( req, res )=>{
    console.log('/koalaRouter DELETE', req.query );
    let queryString = `DELETE FROM koala WHERE id=$1;`
    let values = [ req.query.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

module.exports = koalaRouter;