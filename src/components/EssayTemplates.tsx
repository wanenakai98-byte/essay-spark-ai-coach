
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Lightbulb, Target } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  prompt: string;
  icon: React.ComponentType<any>;
  category: string;
}

const templates: Template[] = [
  {
    id: '1',
    title: 'Argumentative Essay',
    description: 'Present and defend a clear position on a controversial topic',
    prompt: 'Write an argumentative essay about a topic you feel strongly about. Present your thesis clearly in the introduction, support it with evidence in the body paragraphs, and address counterarguments.',
    icon: Target,
    category: 'Academic'
  },
  {
    id: '2',
    title: 'Narrative Essay',
    description: 'Tell a compelling personal story with vivid details',
    prompt: 'Write a narrative essay about a significant moment in your life that taught you an important lesson. Use descriptive language and dialogue to bring your story to life.',
    icon: BookOpen,
    category: 'Creative'
  },
  {
    id: '3',
    title: 'Compare and Contrast',
    description: 'Analyze similarities and differences between two subjects',
    prompt: 'Choose two subjects (books, movies, historical figures, etc.) and write an essay comparing and contrasting them. Organize your essay by either discussing each subject separately or by comparing specific aspects.',
    icon: FileText,
    category: 'Academic'
  },
  {
    id: '4',
    title: 'Problem-Solution Essay',
    description: 'Identify a problem and propose practical solutions',
    prompt: 'Identify a problem in your community, school, or society. Describe the problem, explain its causes and effects, and propose realistic solutions with supporting evidence.',
    icon: Lightbulb,
    category: 'Academic'
  }
];

interface EssayTemplatesProps {
  onSelectTemplate: (prompt: string, title: string) => void;
}

const EssayTemplates = ({ onSelectTemplate }: EssayTemplatesProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Essay Templates</h2>
        <p className="text-gray-600">Get started with these proven essay structures</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <template.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription className="text-sm text-primary font-medium">
                    {template.category}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">{template.description}</p>
              <p className="text-xs text-gray-500 italic">{template.prompt}</p>
              <Button
                onClick={() => onSelectTemplate(template.prompt, template.title)}
                className="w-full"
                size="sm"
              >
                Use This Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EssayTemplates;
