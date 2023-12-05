import { useEffect, useState } from 'react';
import SDK from '../../../api';

const useRootConfiguration = () => {
  const [notificationObserver, setNotificationObserver] = useState(0);
  const [pulledStorageData, setPulledStorageData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const pullStorageData = async () => {
    if (selectedOption) {
      const { items }: any = (
        await SDK.getCollectionConfiguration(selectedOption, selectedOption)
      ).data();
      setPulledStorageData(items);
    }
  };

  const updateStorage = async () => {
    await SDK.addItemToCollection('Phrasal-Verbs', 'Phrasal-Verbs');
    setNotificationObserver((prev) => prev + 1);
  };

  useEffect(() => {
    pullStorageData();
  }, [notificationObserver, selectedOption]);

  return {
    pulledStorageData,
    setSelectedOption
  };
};

export default useRootConfiguration;
