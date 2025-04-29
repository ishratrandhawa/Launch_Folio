import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewCard from './newCard';

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const fetchUserInfo = async () => {
    const code = searchParams.get('code');

    if (!localStorage.getItem('studName') && code) {
      await getToken(code);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    document.body.classList.add('disable-scrolling');
  }, []);

  const handleLogOut = async () => {
    localStorage.removeItem('studName');
    localStorage.removeItem('studId');
    localStorage.removeItem('studRoll');
    localStorage.removeItem('studJob');
    await logOut();
  };

  return (
    <div className="h-full">
      <div className="w-full h-1/3 bg-gray-900">
        <div className="w-full h-fit text-white">
          <div className="flex justify-end items-center mr-4">
            {/* Future Feedback button can be added here */}
            <button
              className="cursor-pointer text-white py-2 rounded-md my-2 mx-3 text-lg"
              onClick={handleLogOut}
            >
              <div className="flex items-center">
                <span className="material-symbols-outlined">person</span>
                <span className="hover:underline ml-1">Log Out</span>
              </div>
            </button>
          </div>
          <div className="py-6 px-8" style={{ fontFamily: 'Raleway' }}>
            <div className="text-3xl font-extrabold p-1">Welcome Ishrat Randhawa👋</div>
            <div className="text-2xl font-medium px-1 pt-1">Computer Science</div>
            <div className="text-2xl font-medium px-1 pb-2">210103016</div>
          </div>
        </div>
      </div>
      <div className="w-full h-2/3 px-10 pt-10 pb-28 bg-gray-200">
        <div className="text-xl font-medium text-gray-800 mb-8 flex items-center">
          <span className="material-symbols-outlined">history</span>
          <span className="ml-1 text-xl">New Activity:</span>
        </div>
        <div className="flex gap-4">
          <NewCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
