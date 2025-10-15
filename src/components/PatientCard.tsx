import { Patient } from "../types/patient";

interface PatientCardProps {
  patient: Patient;
  onViewDetails: (patient: Patient) => void;
}

const PatientCard = ({ patient, onViewDetails }: PatientCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in hover:-translate-y-1">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src={patient.picture.large}
            alt={`${patient.name.first} ${patient.name.last}`}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
          />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center border-2 border-white">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="text-center space-y-2 w-full">
          <h3 className="text-xl font-bold text-gray-800">
            {patient.name.first} {patient.name.last}
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Age: {patient.dob.age} years</span>
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
              <svg
                className="w-4 h-4 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="truncate">{patient.phone}</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(patient)}
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
