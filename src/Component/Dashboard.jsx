
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <button 
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center gap-2"
                    onClick={handleLogout}
                >
                    <FiLogOut /> Logout
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
                <div className="bg-gray-700 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold">Profile</h3>
                    <p className="text-gray-400 mt-2">Manage your account details</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold">Settings</h3>
                    <p className="text-gray-400 mt-2">Customize your preferences</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold">Notifications</h3>
                    <p className="text-gray-400 mt-2">Check recent alerts</p>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
