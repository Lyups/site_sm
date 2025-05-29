import React from "react";
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import { FaFileAlt } from 'react-icons/fa';

interface ContentSectionProps {
  title: string;
  content: string;
  hasLinks?: boolean;
}

export const ContentSection = ({ title, content, hasLinks = false }: ContentSectionProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
        <h2 className="text-xl font-bold">{title}</h2>
      </CardHeader>
      <CardBody>
        <p className="text-gray-700">{content}</p>
        
        {hasLinks && (
          <div className="mt-4 space-y-2">
            <Link href="#" className="flex items-center text-blue-600">
              <FaFileAlt className="mr-2" />
              Документ 1
            </Link>
            <Link href="#" className="flex items-center text-blue-600">
              <FaFileAlt className="mr-2" />
              Документ 2
            </Link>
            <Link href="#" className="flex items-center text-blue-600">
              <FaFileAlt className="mr-2" />
              Документ 3
            </Link>
          </div>
        )}
      </CardBody>
    </Card>
  );
};