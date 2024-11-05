"use client";

import WebBuilderCanvas from "@/components/WebBuilder/WebBuilderCanvas";
import Sidebar from "@/components/WebBuilder/Sidebar";
import Toolbar from "@/components/WebBuilder/Toolbar";

export default function WebBuilderPage() {
  // Define the functions to pass as props
  const onAddElement = (element: string) => {
    console.log("Element added:", element);
    // Logic for adding an element to the canvas
  };

  const onThemeChange = (theme: string) => {
    console.log("Theme changed to:", theme);
    // Logic for changing the theme
  };

  const onLayoutChange = (layout: string) => {
    console.log("Layout changed to:", layout);
    // Logic for changing the layout
  };

  return (
    <div className="flex">
      <Sidebar onAddElement={onAddElement} />
      <div className="flex-1">
        <Toolbar
          onThemeChange={onThemeChange}
          onLayoutChange={onLayoutChange}
        />
        <WebBuilderCanvas />
      </div>
    </div>
  );
}
