
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, XCircle, TrendingUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

interface FeedbackItem {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement';
  feedback: string;
  suggestions: string[];
}

interface CompactFeedbackDisplayProps {
  title: string;
  overallScore: number;
  feedback: FeedbackItem[];
  strengths: string[];
  improvements: string[];
}

const CompactFeedbackDisplay = ({ title, overallScore, feedback, strengths, improvements }: CompactFeedbackDisplayProps) => {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  const toggleCard = (category: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'good':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'needs-improvement':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'good':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'needs-improvement':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Compact Overall Score */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {title}
              </h2>
              <p className="text-sm text-gray-600">Overall Score</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{overallScore}%</div>
              <Progress value={overallScore} className="w-24 mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compact Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {feedback.map((item, index) => (
          <Collapsible key={index} open={expandedCards[item.category]} onOpenChange={() => toggleCard(item.category)}>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CollapsibleTrigger asChild>
                <CardHeader className="p-3 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <CardTitle className="text-sm font-medium">{item.category}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{item.score}%</span>
                    </div>
                  </div>
                  <Progress value={item.score} className="mt-2" />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="p-3 pt-0 space-y-2">
                  <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                    {item.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <p className="text-xs text-gray-700">{item.feedback}</p>
                  {item.suggestions.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Tips:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {item.suggestions.slice(0, 2).map((suggestion, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {/* Compact Strengths and Improvements */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="p-3">
            <CardTitle className="text-sm font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <ul className="space-y-1">
              {strengths.slice(0, 3).map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-green-700">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{strength}</span>
                </li>
              ))}
              {strengths.length > 3 && (
                <li className="text-xs text-green-600 font-medium">
                  +{strengths.length - 3} more strengths
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="p-3">
            <CardTitle className="text-sm font-semibold text-orange-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Improvements
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <ul className="space-y-1">
              {improvements.slice(0, 3).map((improvement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-orange-700">
                  <span className="text-orange-500 mt-0.5">→</span>
                  <span>{improvement}</span>
                </li>
              ))}
              {improvements.length > 3 && (
                <li className="text-xs text-orange-600 font-medium">
                  +{improvements.length - 3} more suggestions
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompactFeedbackDisplay;
