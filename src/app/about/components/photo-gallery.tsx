import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";

export const PhotoGallery = () => {
  const images = [
    "https://img.heroui.chat/places?w=150&h=150&u=place1",
    "https://img.heroui.chat/places?w=150&h=150&u=place2",
    "https://img.heroui.chat/places?w=150&h=150&u=place3",
    "https://img.heroui.chat/places?w=150&h=150&u=place4",
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
        <h2 className="text-xl font-bold">Фото + галерея</h2>
      </CardHeader>
      <CardBody>
        <div className="w-full aspect-video bg-gray-200 mb-4">
          <img 
            src="https://img.heroui.chat/places?w=600&h=400&u=mainplace" 
            alt="Главное фото"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <div key={index} className="aspect-square bg-gray-100 rounded-md overflow-hidden">
              <img 
                src={src} 
                alt={`Фото ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};