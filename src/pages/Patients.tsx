import { useState, useEffect } from "react";
import Header from "../components/Header";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import ShimmerCard from "../components/ShimmerCard";
import { Patient, ApiResponse } from "../types/patient";

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter((patient) => {
      const fullName = `${patient.name.first} ${patient.name.last}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://randomuser.me/api/?results=12");
      
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }

      const data: ApiResponse = await response.json();
      setPatients(data.results);
      setFilteredPatients(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddPatient = (newPatient: Patient) => {
    setPatients([newPatient, ...patients]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Patient Records
              </h1>
              <p className="text-gray-600 mt-2">
                {filteredPatients.length} patients found
              </p>
            </div>
            <button
              onClick={() => setIsAddFormOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-teal-600 flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add Patient</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-lg"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 animate-scale-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-800">Error Loading Patients</h3>
                  <p className="text-red-600">{error}</p>
                  <button
                    onClick={fetchPatients}
                    className="mt-2 text-red-700 font-medium hover:text-red-800 underline"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <ShimmerCard key={i} />
              ))}
            </div>
          ) : filteredPatients.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-md animate-scale-in">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Patients Found</h3>
              <p className="text-gray-600">Try adjusting your search or add a new patient</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPatients.map((patient, index) => (
                <div
                  key={patient.id || `patient-${index}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PatientCard
                    patient={patient}
                    onViewDetails={setSelectedPatient}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {isAddFormOpen && (
        <AddPatientForm
          onAddPatient={handleAddPatient}
          onClose={() => setIsAddFormOpen(false)}
        />
      )}
    </div>
  );
};

export default Patients;
