import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function HomeGallery() {
  return (
    <div>
      {/* IMAGES */}
      {/* RIGHT */}

      <Avatar
        style={{
          zIndex: 3,
          position: 'absolute',
          top: 620,
          right: '35vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
        sx={{ width: 120, height: 120 }}
        alt="user"
        src="/images/pexels-pixabay-278890.jpg"
      />

      <Avatar
        style={{
          zIndex: 3,
          position: 'absolute',
          top: 820,
          right: '31vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
        sx={{ width: 220, height: 220 }}
        alt="user"
        src="/images/pexels-cottonbro-4569857.jpg"
      />
      {/* LEFT */}

      <Avatar
        style={{
          zIndex: 3,
          position: 'absolute',
          top: 720,
          right: '48vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
        sx={{ width: 170, height: 170 }}
        alt="user"
        src="/images/pexels-cottonbro-4691516.jpg"
      />

      <Avatar
        style={{
          zIndex: 3,
          position: 'absolute',
          top: 920,
          right: '57vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
        sx={{ width: 170, height: 170 }}
        alt="user"
        src="/images/pexels-cottonbro-4691565.jpg"
      />

      {/* CREAM CIRCLES */}
      {/* BACK */}

      <div
        style={{
          zIndex: 2,
          height: 100,
          width: 100,
          backgroundColor: '#f0eee9',
          borderRadius: '50%',
          position: 'absolute',
          top: 750,
          right: '33vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      ></div>

      <div
        style={{
          zIndex: 2,
          height: 230,
          width: 230,
          backgroundColor: '#f0eee9',
          borderRadius: '50%',
          position: 'absolute',
          top: 770,
          right: '40vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      ></div>

      {/* FRONT */}

      <div
        style={{
          zIndex: 2,
          height: 130,
          width: 130,
          backgroundColor: '#f0eee9',
          borderRadius: '50%',
          position: 'absolute',
          top: 650,
          right: '40vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      ></div>

      <div
        style={{
          zIndex: 2,
          height: 90,
          width: 90,
          backgroundColor: '#f0eee9',
          borderRadius: '50%',
          position: 'absolute',
          top: 860,
          right: '52vw',
          boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      ></div>

      {/* RINGS */}
      {/* LEFT */}
      <div
        style={{
          zIndex: 1,
          backgroundColor: '#E3EBE8',
          height: 250,
          width: 250,
          borderRadius: '50%',
          position: 'absolute',
          top: 670,
          right: '46vw',
          border: '2px solid #BC7D34',
        }}
      ></div>

      <div
        style={{
          zIndex: 1,
          height: 150,
          width: 150,
          borderRadius: '50%',
          position: 'absolute',
          top: 870,
          right: '52vw',
          border: '2px solid #BC7D34',
        }}
      ></div>
      {/* RIGHT*/}
      <div
        style={{
          zIndex: 1,
          height: 220,
          width: 220,
          borderRadius: '50%',
          position: 'absolute',
          top: 630,
          right: '36vw',
          border: '2px solid #BC7D34',
        }}
      ></div>

      <div
        style={{
          zIndex: 1,
          height: 200,
          width: 200,
          borderRadius: '50%',
          position: 'absolute',
          top: 770,
          right: '30vw',
          border: '2px solid #BC7D34',
        }}
      ></div>
    </div>
  );
}
