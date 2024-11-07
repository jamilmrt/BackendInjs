import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Paitents',
      required: true,
    },
    diagnosis: {
      type: String,
      default: false,
    },
    Surgeries: {
      type: String,
      default: false,
    },
    DoctorsVisits: {
      type: String,
      default: false,
    },
    EmergencyRoomVisits: {
      type: String,
      default: false,
    },
    X_Rays: {
      type: String,
      default: false,
    },
    DoctorsVMRI_and_CT_scansisits: {
      type: String,
      default: false,
    },
    Allergies: {
      type: String,
      default: false,
    },
    PrescribedMedications: {
      type: String,
      default: false,
    },
    MedicalTests: {
      type: String,
      default: false,
    },
    DischargeSummary: {
      type: String,
      default: false,
    },
    DoctorsVisits: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
