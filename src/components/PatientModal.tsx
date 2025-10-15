import { Patient } from "../types/patient";

interface PatientModalProps {
  patient: Patient | null;
  onClose: () => void;
}

const PatientModal = ({ patient, onClose }: PatientModalProps) => {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Patient Details</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={patient.picture.large}
              alt={`${patient.name.first} ${patient.name.last}`}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">
                {patient.name.title} {patient.name.first} {patient.name.last}
              </h3>
              <p className="text-gray-500 mt-1 capitalize">{patient.gender}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Age</p>
                  <p className="text-lg font-bold text-gray-800">{patient.dob.age} years</p>
                  <p className="text-xs text-gray-500 mt-1">
                    DOB: {new Date(patient.dob.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Phone</p>
                  <p className="text-lg font-bold text-gray-800">{patient.phone}</p>
                  <p className="text-xs text-gray-500 mt-1">{patient.cell}</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-sm font-bold text-gray-800 break-all">{patient.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Nationality</p>
                  <p className="text-lg font-bold text-gray-800">{patient.nat}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-xl">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p className="text-gray-800 font-medium">
                  {patient.location.street.number} {patient.location.street.name}
                </p>
                <p className="text-gray-600">
                  {patient.location.city}, {patient.location.state}
                </p>
                <p className="text-gray-600">
                  {patient.location.country} - {patient.location.postcode}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
