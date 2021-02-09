const BookingModel=require('../models/booking');
//to create a booking first_name,last_name,phone,party_size,booking_time is required
exports.createBooking=function(req,res){
    
        const bookingReqData= new BookingModel(req.body);//calling constructor to create a object with re.body details
        if( Object.keys(req.body).length <5) // checking all details are entered or not
        res.json({
            success: false,
            message: 'Please fill all details'
        }) 
        else
        {
              //calling createBooking function to book a table
                BookingModel.createBooking(bookingReqData,(err,booking) =>{
                    if(err)
                    {
                        //res.send(err);
                        res.json({status:false,message:'error in creating booking'})
                    }
                    else
                    {
                        res.json({
                        status: true,
                        message: "booking created sucessfully",
                        data: booking,
                        });
                    }
                });
        }
};
//to update a booking first_name,last_name,time are required 
exports.updateBooking=function(req ,res)
{   
     const updatingReqData = new BookingModel(req.body);
     if ( Object.keys(req.body).length < 3)
       res.json({
         success: false,
         message: "Please fill all details",
       });
     else {
       //console.log("valid data");
       //return;
       BookingModel.updateBooking(req.params.id,updatingReqData, (err, booking) => {
         if (err) {
           res.json({ status: false, message: "error in updating booking" });
         } else {
           res.json({
             status: true,
             message: "booking updated sucessfully",
             data: booking,
           });
         }
       });
     }
};
//to delete a booking first name,last name,booking_time are required
exports.deleteBooking = function (req, res) {

    const deletingReqData = new BookingModel(req.body);
     if ( Object.keys(req.body).length <3 )
       res.json({
         success: false,
         message: "Please fill all details",
       });
     else {
       //console.log("valid data");
       //return;
       BookingModel.deleteBooking(req.params.id,(err, booking) => {
           if (err) {
             res.json({ status: false, message: "error in deleting booking" });
           } else {
             res.json({
               status: true,
               message: "booking deleted sucessfully",
               data: booking,
             });
           }
         }
       );
     }
};

//to list all bookings
exports.listBooking = function (req, res)
{
    BookingModel.getAllBookings((err,bookings) =>{
        if(err)
        res.send(err);
        else 
        res.send(bookings);
    })
};

