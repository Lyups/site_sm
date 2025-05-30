import React, { useState } from "react";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { getCategoryData } from "../data/category-data";
import { ImageModal } from "../../about/components/ImageModal";

const PenIcon = () => (
  <svg 
    className="w-full h-full opacity-10" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25Z" 
      fill="currentColor"
    />
  </svg>
);

interface CategoryContentProps {
  category: string;
}

export const CategoryContent: React.FC<CategoryContentProps> = ({ category }) => {
  const categoryData = getCategoryData(category);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  if (!categoryData) return null;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {categoryData.laureates.map((laureate, idx) => (
          <Card 
            key={idx}
            className="bg-white text-black rounded-3xl shadow-lg min-h-[350px]"
          >
            <CardBody className="flex flex-col items-center px-6 py-8">
              <div 
                className="mb-6 w-full flex justify-center relative h-60 bg-white rounded-lg cursor-pointer"
                onClick={() => setSelectedImage({ src: laureate.image, alt: `Фотография ${laureate.name}` })}
              >
                <Image
                  src={laureate.image}
                  alt={`Фотография ${laureate.name}`}
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-lg mb-2">{laureate.name}</div>
                <div className="text-sm font-medium mb-1">{laureate.role}</div>
                <div className="text-sm">{laureate.title}</div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-6 text-white shadow-lg">
        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-4 text-center">
            <p className="text-base leading-relaxed italic" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.2)' }}>{categoryData.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16">
              <PenIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};