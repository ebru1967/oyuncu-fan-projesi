// src/data/photoData.js

export const archivePhotos = Array.from({ length: 190 }, (_, i) => ({
  id: i + 1,
  url: `/gallery/h1 (${i + 1}).jpeg` 
}));
export const wallpapers = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  url: `/wallpapers/duvarkagidi${i + 1}.jpeg` 
}));

export const headers = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  url: `/headers/h${i + 1}.jpeg`
}));

export const gifs = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  url: `/gifs/g (${i + 1}).mp4` 
}));

export const stickers = [
  { 
    id: 1, 
    name: "Videolu Stickerlar", 
    url: "https://sticker.ly/s/KAM14C" 
  },
  { 
    id: 2, 
    name: "Aytek Şayan Stickerları", 
    url: "https://sticker.ly/s/EFQKUZ" 
  }
];
export const profilePics = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  url: `/profile/p${i + 1}.jpeg` 
}));

export const btsVideos = Array.from({ length: 53 }, (_, i) => ({
  id: `v-${i + 1}`,
  url: `/kamera-arkasi/v (${i + 1}).mp4` 
}));

export const btsPhotos = Array.from({ length: 20 }, (_, i) => ({
  id: `f-${i + 1}`,
  url: `/kamera-arkasi/f (${i + 1}).jpeg` 
}));