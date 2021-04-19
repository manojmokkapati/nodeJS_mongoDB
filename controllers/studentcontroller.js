const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const student = mongoose.model("student");


router.get('/', (rwq, res) => {

    res.render("student/addOrEdit", {
        viewTitle: "insert student"
    })
})

router.post('/', (req, res) => {
    if (req.body._id == '') {
        insertRecord(req, res);
    } else {
        updateRecord(req, res);
    }
});
function insertRecord(req, res) {
    var student = new student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((err, doc) => {
        if (!err) {
            res.redirect('student/list')
        } else {
            console.log('Error during insert: ' + err)
        }
    })
}


function updateRecord(req, res) {
    student.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true },
        (err, doc) => {
            if (!err) {
                res.redirect("student/list");
            } else {
                console.log("Error during update:" + err)
            }

        }

    );
}

router.get("/list", (req, res) => {
    student.find((err, docs) => {
        if (!err) {
            res.render("student/list", {
                list: docs,
            });
        } else {
            console.log("Error in retrivel:" + err);

        }
    });

});

router.get("/:id", (req, res) => {
    student.findById(req.params.id, (err, doc) => {

        if (!err) {
            res.render("student/addOrEdit", {
                viewTitle: "update Student",
                student: doc,
            });
        } else {
            console.log(doc);

        }
    });

});


router.get("delete/:id", (req, res) => {
    student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect("student/list");

        } else {
            console.log("Error in delation" + err);

        }
    });

});
module.exports = router;