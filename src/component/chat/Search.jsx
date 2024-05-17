import React, { useContext, useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../Firebase';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      // Create a query against the 'users' collection where 'displayName' matches 'name'
      const q = query(
        collection(db, 'users'),
        where('displayName', '==', username)
      );
      // Execute the query
      const querySnapshot = await getDocs(q);
      // Map through the documents and get the data
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Do something with the users, e.g., set state or log to console
      setUser(users);
      console.log(users);
      return users;
    } catch (err) {
      console.error('Error getting documents:', err);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  // const handleSelect = async (currentUser) => {
  //   //check whether the group(chats in firestore) exists, if not create
  //   const combinedId =
  //     currentUser.uid > user.uid
  //       ? currentUser.uid + user.uid
  //       : user.uid + currentUser.uid;
  //   try {
  //     const res = await getDoc(doc(db, 'chats', combinedId));

  //     if (!res.exists()) {
  //       //create a chat in chats collection
  //       await setDoc(doc(db, 'chats', combinedId), { messages: [] });

  //       //create user chats
  //       await updateDoc(doc(db, 'userChats', currentUser.uid), {
  //         [combinedId + '.userInfo']: {
  //           uid: user.uid,
  //           displayName: user.displayName,
  //           photoURL: user.photoURL,
  //         },
  //         [combinedId + '.date']: serverTimestamp(),
  //       });

  //       await updateDoc(doc(db, 'userChats', user.uid), {
  //         [combinedId + '.userInfo']: {
  //           uid: currentUser.uid,
  //           displayName: currentUser.displayName,
  //           photoURL: currentUser.photoURL,
  //         },
  //         [combinedId + '.date']: serverTimestamp(),
  //       });
  //     }
  //   } catch (err) {}
  //   setUser(null);
  //   setUsername('');
  // };
  const handleSelect = async (selectedUser) => {
    const combinedId =
      currentUser.uid > selectedUser.uid
        ? currentUser.uid + selectedUser.uid
        : selectedUser.uid + currentUser.uid;

    try {
      // Attempt to retrieve the chat document
      const chatRef = doc(db, 'chats', combinedId);
      const chatSnap = await getDoc(chatRef);

      // Check if the chat already exists
      if (!chatSnap.exists()) {
        // Chat does not exist, create a new chat document
        await setDoc(chatRef, { messages: [] });

        // Update user chats for the current user
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        // Update user chats for the selected user
        await updateDoc(doc(db, 'userChats', selectedUser.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      } else {
        // Chat already exists, handle accordingly
        console.log('Chat already exists');
      }
    } catch (err) {
      console.error('Error in handleSelect:', err);
      // Handle any errors that occur during the process
    }

    // Reset user selection state, if applicable
    setUser(null);
    setUsername('');
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user &&
        user.map((info) => (
          <div
            key={info.id}
            className="userChat"
            onClick={() => handleSelect(info)}
          >
            <img src={info.photoURL} alt="vc" />
            <div className="userChatInfo">
              <span>{info.displayName}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Search;
