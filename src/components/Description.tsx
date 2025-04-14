import React, { useState } from 'react';

const ImageDescriptionForm = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result); // Base64 string
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((base64Images) => {
        setImages([...images, ...base64Images]);
      })
      .catch((err) => {
        console.error('Error reading images:', err);
        setError('Failed to read one or more images.');
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setDescription('');

    try {
      const response = await fetch('/api/generative-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imageFiles: images }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate description.');
      }

      const data = await response.json();
      setDescription(data.description);
    } catch (err) {
      console.error('Error sending data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div>
      <h2>Generate Image Description with Gemini</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Upload Images:</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            accept="image/*"
          />
          {images.length > 0 && (
            <div>
              <h3>Uploaded Images:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                  <div key={index} style={{ margin: '5px', position: 'relative' }}>
                    <img src={image} alt={`Uploaded ${index + 1}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Description'}
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {description && (
          <div>
            <h3>Generated Description:</h3>
            <p>{description}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ImageDescriptionForm;