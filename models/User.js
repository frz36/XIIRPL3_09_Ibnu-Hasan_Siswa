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
    },
    noAbsen: { 
        type: String, 
        required: [true, 'Silahkan isikan no. absen'],    
    },
    jenisKelamin: { 
        type: String, 
        required: [true, 'Silahkan isikan jenis kelamin'],  
    },
    nis: { 
        type: String, 
        required: [true, 'Silahkan isikan nis'], 
        unique: true,  
    }
}) 
 
module.exports = mongoose.model('User', UserSchema)