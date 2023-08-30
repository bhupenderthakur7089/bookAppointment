const Appointment = require('../models/appointment');
exports.fetchAll = (req, res, next) => {
    Appointment.findAll()
        .then(appointments => {
            // res.redirect('/admin/products');
            demo = [{ name: 'yash' }, { name: 'vaibhav' }];
            res.json(appointments);
        })
        .catch(err => console.log(err));
}

exports.saveApointment = (req, res, next) => {
    const apmnt = req.body;
    // console.log('object received',apmnt);
    const name = apmnt.name;
    const email = apmnt.email;
    const contact = apmnt.contact;
    Appointment
        .create({
            name: name,
            email: email,
            contact: contact
        })
        .then(result => {
            console.log('Booked successfully', result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

exports.deleteAppointment = (req, res, next) => {
    const apmntId = req.params.apmntId;
    console.log(apmntId);
    Appointment.findAll({ where: { id: apmntId } })
        .then((appointment) => {
            return appointment[0].destroy();
        })
        .then(result => {
            if (result) {
                console.log('appointment deleted');
            }
        })
        .catch(err => {
            console.log(err)
        });
}