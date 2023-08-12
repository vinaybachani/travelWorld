import Booking from "../models/Booking.js";

// create booking
export const createBooking = async(req, res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save();
        res.status(200).json({success: true, message: "Your tour is booked", data:savedBooking});
    }catch(err){
        res.status(500).json({success:false, message: "internal server error"});
    }
};

// get single booking
export const getBooking = async (req, res)=>{
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);
        res.status(200).json({success: true, message: "successfully fetched", data: book});
    } catch (error) {
        res.status(404).json({success: false, message: "not found"});
    }
}

// get all bookings
export const getAllBooking = async (reeq, res)=>{
    try {
        const books = await Booking.find();
        res.status(200).json({success: true, message: "successfully fetched", data: books});
    } catch (error) {
        res.status(500).json({success: false, message: "internal server error"});
    }
}