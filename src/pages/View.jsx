import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../app/features/getAlldata'
const view = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users)
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const Card = ({ onClose }) => (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      <div className=" bg-gray-800 p-6 rounded-lg shadow-lg ">
        <div className="text-lg font-bold mb-4  ">
          <p>ID : {selectedUser.id}</p>
          <p>Title : {selectedUser.title}</p>
          <p>Title : {' '}
          {selectedUser.description.length > 20
            ? `${selectedUser.description.substring(0, 20)}...`
            : selectedUser.description}</p>
          <img src={selectedUser.image} className="w-52 h-52 object-cover rounded-md mb-4"  />
          <p>Title : {selectedUser.rating.rate}</p>
          <p>Title : {selectedUser.rating.counte}</p>
          <p>Title : {selectedUser.category}</p>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className='max-w-2xl mx-auto'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>            
              <ul>
                {users && users.length > 0 ? (
                  users.map((user) => (
                    <div key={user.id}>
                      <li
                        onClick={() => handleUserClick(user)}
                        className="p-4 border rounded-lg shadow-md bg-gray-700 hover:bg-gray-950 transition cursor-pointer" >
                        {user.title}
                      </li>
                      <br />
                    </div>
                  ))
                ) : (
                  <p>No users available</p>
                )}
              </ul>
            

            
          </>
        )
        }
      </div>
      {
        selectedUser &&
          <Card user={selectedUser} onClose={() => setSelectedUser(null)} />
      }
    </>
  )
}

export default view