"use client";

import { Card, Typography, Button } from "antd";
import Image from "next/image";
import { useState } from "react";

const { Title } = Typography;

interface Template {
  id: string;
  name: string;
  preview: string;
}

interface TemplatesGalleryProps {
  templates: Template[];
  onSelectTemplate: (templateId: string) => void;
}

export default function TemplatesGallery({
  templates,
  onSelectTemplate,
}: TemplatesGalleryProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
    onSelectTemplate(id);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Templates Gallery</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            cover={<Image alt={template.name} src={template.preview} />}
            actions={[
              <Button
                key={template.id}
                type={selectedTemplate === template.id ? "primary" : "default"}
                onClick={() => handleSelectTemplate(template.id)}
              >
                {selectedTemplate === template.id
                  ? "Selected"
                  : "Select Template"}
              </Button>,
            ]}
          >
            <Card.Meta title={template.name} />
          </Card>
        ))}
      </div>
    </div>
  );
}
