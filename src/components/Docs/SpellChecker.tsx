import { useState } from "react";
import { List, Button, Typography } from "antd";

const { Title } = Typography;

interface SpellCheckerProps {
  content: string;
  onContentChange: (newContent: string) => void;
}

interface Suggestion {
  word: string;
  suggestions: string[];
}

export default function SpellChecker({
  content,
  onContentChange,
}: SpellCheckerProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const checkSpelling = () => {
    // Example: simple spell-check with mock data
    const mockSuggestions = [
      { word: "teh", suggestions: ["the", "ten", "tech"] },
      { word: "recieve", suggestions: ["receive", "retrieve"] },
    ];
    setSuggestions(mockSuggestions);
  };

  const replaceWord = (oldWord: string, newWord: string) => {
    const updatedContent = content.replace(
      new RegExp(`\\b${oldWord}\\b`, "g"),
      newWord
    );
    onContentChange(updatedContent);
    setSuggestions(suggestions.filter((s) => s.word !== oldWord));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Spell Checker</Title>
      <Button onClick={checkSpelling} className="mb-4">
        Check Spelling
      </Button>
      <List
        dataSource={suggestions}
        renderItem={(suggestion) => (
          <List.Item>
            <Typography.Text>Incorrect: {suggestion.word}</Typography.Text>
            {suggestion.suggestions.map((suggestionWord) => (
              <Button
                key={suggestionWord}
                onClick={() => replaceWord(suggestion.word, suggestionWord)}
                className="ml-2"
              >
                {suggestionWord}
              </Button>
            ))}
          </List.Item>
        )}
      />
    </div>
  );
}
