import { Card, Button, Typography } from "antd";

const { Title } = Typography;

interface Component {
  id: string;
  name: string;
  preview: JSX.Element;
}

interface ComponentLibraryProps {
  components: Component[];
  onAddComponent: (componentId: string) => void;
}

export default function ComponentLibrary({
  components,
  onAddComponent,
}: ComponentLibraryProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Component Library</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Card
            key={component.id}
            cover={<div className="p-4">{component.preview}</div>}
            actions={[
              <Button
                type="primary"
                onClick={() => onAddComponent(component.id)}
              >
                Add to Page
              </Button>,
            ]}
          >
            <Card.Meta title={component.name} />
          </Card>
        ))}
      </div>
    </div>
  );
}
