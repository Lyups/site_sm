'use client'

import React from "react";
import { Tabs, Tab, Card, CardBody, Image } from "@heroui/react";
import { CategoryContent } from "./components/category-content";
import { starsStyles } from "./styles";
import { Global } from '@emotion/react';
import { 
  TheaterComedy, 
  Rocket, 
  SportsSoccer, 
  LocalHospital, 
  Science, 
  Gavel, 
  Groups, 
  Security, 
  School, 
  AccountBalance, 
  Museum, 
  Public, 
  Business 
} from '@mui/icons-material';

export default function App() {
  const [selected, setSelected] = React.useState("Space");

  const handleSelectionChange = (key: React.Key) => {
    setSelected(key.toString());
  };

  const categories = [
    { key: "Culture", title: "Культура", icon: TheaterComedy },
    { key: "Space", title: "Космонавтика", icon: Rocket },
    { key: "Sport", title: "Спорт", icon: SportsSoccer },
    { key: "Medicine", title: "Медицина", icon: LocalHospital },
    { key: "Science", title: "Наука", icon: Science },
    { key: "Politics", title: "Политика", icon: Gavel },
    { key: "Collective", title: "Творческий коллектив", icon: Groups },
    { key: "Economy", title: "Мировая экономика и безопасность", icon: Security },
    { key: "Education", title: "Просветительная организация", icon: School },
    { key: "Institution", title: "Образовательное учреждение", icon: AccountBalance },
    { key: "Heritage", title: "Всемирное историческое наследие", icon: Museum },
    { key: "International", title: "Международная организация", icon: Public },
    { key: "Corporation", title: "Корпорация", icon: Business }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col relative">
      <Global styles={starsStyles} />
      <div className="container mx-auto px-4 py-6 relative flex-grow">
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="star" />
          ))}
          {[...Array(200)].map((_, i) => (
            <div key={`static-${i}`} className="static-star" />
          ))}
        </div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Лауреаты премии Спутник Мира в номинации</h1>
          <div className="w-full max-w-3xl mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8 animate-pulse"></div>
          
          <Tabs 
            aria-label="Номинации" 
            selectedKey={selected} 
            onSelectionChange={handleSelectionChange}
            variant="light"
            color="default"
            classNames={{
              tabList: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
              tab: "flex items-center gap-2 text-blue-200 hover:text-white hover:bg-blue-700 rounded-lg p-3 transition-all duration-200 data-[selected=true]:bg-blue-600 data-[selected=true]:text-white",
              cursor: "hidden",
            }}
          >
            {categories.map(({ key, title, icon: Icon }) => (
              <Tab key={key} title={
                <div className="flex items-center gap-2">
                  <Icon className="text-xl" />
                  <span>{title}</span>
                </div>
              }>
                <CategoryContent category={key} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}