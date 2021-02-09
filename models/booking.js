var dbConn=require('../config/db.config');//importing database connection

//creating a constructor 
var Booking= function(book){
    this.first_name=book.first_name;
    this.last_name=book.last_name;
    this.phone=book.phone;
    this.party_size=book.party_size;
    this.booking_time=book.booking_time;
    this.created_at=new Date();
    this.updated_at=new Date();
}

Booking.getAllBookings= (result) =>{
  //querying database to select all rows
    dbConn.query('SELECT * FROM table_booking',(err,res)=>{
        if(err)
        {
            console.log('error while fetching bookings',err);
            result(null,err);
        }
        else{
            console.log('Bookings fetched sucessfully');
            result(null,res);
        }
    })
}
//
Booking.createBooking=(Bookingdata,result)=>{
  //querying database to create a booking
       dbConn.query(
         "INSERT INTO table_booking (first_name, last_name, phone, party_size, booking_time) VALUES (?,?,?,?,?) ",
         [Bookingdata.first_name,Bookingdata.last_name,Bookingdata.phone,Bookingdata.party_size,Bookingdata.booking_time],
         (err, res) => {
           if (err) {
             console.log("error while inserting data");
             result(null, { status: false, message: err });
           } else {
             console.log("booking  created sucessfully!");
             result(null, {
               status: true,
               message: "Booking created sucessfully",
               insertId: res.id,
             });
           }
         }
       );       
}

Booking.deleteBooking=(id,result)=>{
  //querying database to delete booking from specified table
  dbConn.query("DELETE FROM table_booking WHERE id=?",[id],(err,res)=>{
    if (err) {
      console.log("error while deleting data");
      result(null, { status: false, message: err });
    } else {
      console.log("booking deleted sucessfully!");
      result(null, {
        status: true,
        message: "Booking deleted sucessfully",
        deleteId:id,
      });
    }
  })
}

Booking.updateBooking = (id,Bookingdata, result) => {
  dbConn.query(
    "UPDATE table_booking SET first_name=?, last_name=?, phone=?, party_size=?, booking_time=? WHERE id=?",
    [
      Bookingdata.first_name,
      Bookingdata.last_name,
      Bookingdata.phone,
      Bookingdata.party_size,
      Bookingdata.booking_time,
      id
    ],
    (err, res) => {
      if (err) {
        console.log("error while updating data");
        result(null, { status: false, message: err });
      } else {
        console.log("booking updated sucessfully!");
        result(null, {
          status: true,
          message: "Booking updated sucessfully!",
          updateId: id,
        });
      }
    }
  );
};

module.exports= Booking;
