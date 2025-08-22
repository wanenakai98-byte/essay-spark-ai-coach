import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Send, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EssaySubmissionProps {
  onSubmit: (essay: string, title: string) => void;
  isAnalyzing: boolean;
  selectedTemplate?: {
    prompt: string;
    title: string;
  } | null;
}

const EssaySubmission = ({ onSubmit, isAnalyzing, selectedTemplate }: EssaySubmissionProps) => {
  const [essay, setEssay] = useState('');
  const [title, setTitle] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (selectedTemplate) {
      setEssay(selectedTemplate.prompt);
      setTitle(selectedTemplate.title);
    }
  }, [selectedTemplate]);

  const handleSubmit = () => {
    if (!essay.trim()) {
      toast({
        title: "Essay Required",
        description: "Please enter your essay content before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (essay.trim().split(' ').length < 50) {
      toast({
        title: "Essay Too Short",
        description: "Please submit an essay with at least 50 words for meaningful analysis.",
        variant: "destructive",
      });
      return;
    }

    onSubmit(essay, title || 'Untitled Essay');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setEssay(content);
        toast({
          title: "File Uploaded",
          description: "Your essay has been loaded successfully.",
        });
      };
      reader.readAsText(file);
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a .txt file only.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <FileText size={48} className="text-primary" />
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
          Submit Your Essay
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Get instant AI-powered feedback to improve your writing
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-gray-700">
            Essay Title (Optional)
          </Label>
          <Input
            id="title"
            placeholder="Enter your essay title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="essay" className="text-sm font-medium text-gray-700">
            Essay Content
          </Label>
          <Textarea
            id="essay"
            placeholder="Paste your essay here or upload a text file..."
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
            className="min-h-[300px] border-gray-300 focus:border-primary focus:ring-primary resize-none"
          />
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Minimum 50 words required</span>
            <span>{essay.trim().split(' ').filter(word => word).length} words</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors">
                <Upload size={20} className="text-gray-500" />
                <span className="text-sm text-gray-600">Upload Text File</span>
              </div>
            </Label>
            <input
              id="file-upload"
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={isAnalyzing || !essay.trim()}
            size="lg"
            className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Send size={20} />
                Get AI Feedback
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EssaySubmission;
