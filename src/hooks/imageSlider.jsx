import { useState, useEffect } from 'react';

const imageSlider = (intervalTime) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(prevState => !prevState);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return showImage
}
export default imageSlider;