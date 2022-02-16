"use strict"

const db = require("../db")

module.exports = {
    index: (req, res) => {
        const sql = 'select * from nik'
        db.query(sql, (err,result) => {
            if(err) throw (err)
            res.json({
                message: "Data Showed",
                data: result
            })
        })
    },
    add: (req, res) => {
        let data = {
            nama: req.body.nama,
            alamat: req.body.alamat,
            no_tlpn: req.body.no_tlpn
        }
        let sql = "insert into nik SET ?";
        if(data.alamat && data.nama && data.no_tlpn){
            db.query(sql, data, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: "Added succes",
                        data
                    })
                }
            })
        }
    },
    delete: (req, res) => {
        let id = req.body.id;
        let data;
        if(id){
            let sql = "SELECT * from nik where id = ?"
            db.query(sql, [id], (err,result) => {
                if(err){
                    throw err;
                }else{
                    data = result;
                }
            })
        }
        if(id){
            let sql = "DELETE from nik where id = ?";
            db.query(sql, id, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: `ID ${id} deleted.`,
                        data: data[0]
                    })
                }
            })
        }
    },
    put: (req, res) => {
        let id = req.body.id;
        let new_dt = {
            nama: req.body.nama,
            alamat: req.body.alamat,
            no_tlpn: req.body.no_tlpn
        }
        let old_dt;

        if(id){
            let sql = "SELECT nama,alamat,no_tlpn FROM nik WHERE id = ?";
            db.query(sql, [id], (err,result) => {
                if(err){
                    throw err;
                }else{
                    old_dt = result;
                }
            })
        }        
        setTimeout(update, 1);
        function update (){
            if(old_dt){
                let sql = "UPDATE nik SET ? WHERE id = ?";
                db.query(sql, [new_dt, id], (err,result) => {
                    if(err){
                        throw err;
                    }else{
                        res.json({
                            message: `Succes update where id = ${id}`,
                            old_data: old_dt[0],
                            new_data: new_dt
                        })
                    }
                })
            }
        }
    }
}
