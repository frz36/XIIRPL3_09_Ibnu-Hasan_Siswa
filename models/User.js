const mongoose = require('mongoose') 
 
const UserSchema = new mongoose.Schema({ 
    nama: { 
        type: String, 
        required: [true, 'Silahkan isikan nama'], 
        unique: true 
    }, 
    kelas: { 
        type: String, 
        required: [true, 'Silahkan isikan kelas'],  
        unique: true,  
    },
    noAbsen: { 
        type: String, 
        required: [true, 'Silahkan isikan no. absen'],   
        unique: true,  
    },
    jenisKelamin: { 
        type: String, 
        required: [true, 'Silahkan isikan jenis kelamin'],  
        unique: true,  
    },
    nis: { 
        type: String, 
        required: [true, 'Silahkan isikan nis'], 
        unique: true,  
    }
}) 
 
module.exports = mongoose.model('User', UserSchema)