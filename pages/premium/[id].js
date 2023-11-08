// pages/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from "@/firebase";

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    if (id) {
      const documentRef = doc(db, 'about', id);

      const fetchData = async () => {
        try {
          const documentSnapshot = await getDoc(documentRef);
          if (documentSnapshot.exists()) {
            setDocumentData(documentSnapshot.data());
          } else {
            console.error('Document not found.');
          }
        } catch (error) {
          console.error('Error getting document: ', error);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h1>Details Page</h1>
      {documentData && (
        <div>
          <h2>Document Details:</h2>
          <pre>{JSON.stringify(documentData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
