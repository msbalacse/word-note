'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '@/firebase/config';

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'today'));
      const documents = querySnapshot.docs.map(doc => doc.data());
      setData(documents);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
    </div>
  );
};

export default Home;
