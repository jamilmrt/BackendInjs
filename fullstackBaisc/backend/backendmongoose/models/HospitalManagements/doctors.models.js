import mongoose from 'mongoose'


const doctorsSchema = new mongoose.Schema({
  name: {
    tpye: String,
    required: true
  },
  slary: {
    type: Number,
    required: true,
  },
  qualifications: {
    type: String,
    required: true
  },
  experienceInYears: {
    Type: Number,
    default: 0,
  },
  worksInHospital: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    }
  ]
}, {timestamps: true})

export const Doctors = mongoose.model('Doctors', doctorsSchema)