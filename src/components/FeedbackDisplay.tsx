
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, XCircle, TrendingUp, BookOpen, PenTool } from 'lucide-react';

interface FeedbackItem {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement';
  feedback: string;
  suggestions: string[];
}

interface FeedbackDisplayProps {
  title: string;
  overallScore: number;
  feedback: FeedbackItem[];
  strengths: string[];
  improvements: string[];
}

const FeedbackDisplay = ({ title, overallScore, feedback, strengths, improvements }: FeedbackDisplayProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'good':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'needs-improvement':
        return <XCircle className="w-5 h-5 text-red-500" />;
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
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Overall Score Card */}
      <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Essay Analysis: {title}
          </CardTitle>
          <CardDescription className="text-lg">
            AI-Powered Writing Assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">{overallScore}%</div>
            <Progress value={overallScore} className="w-full max-w-md mx-auto" />
            <p className="text-gray-600">Overall Writing Quality</p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Feedback */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedback.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {item.category}
                </CardTitle>
                {getStatusIcon(item.status)}
              </div>
              <div className="flex items-center gap-2">
                <Progress value={item.score} className="flex-1" />
                <span className="text-sm font-medium text-gray-600">{item.score}%</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge className={getStatusColor(item.status)}>
                {item.status.replace('-', ' ').toUpperCase()}
              </Badge>
              <p className="text-sm text-gray-700 leading-relaxed">{item.feedback}</p>
              {item.suggestions.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    Suggestions:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {item.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Strengths and Improvements */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Key Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-800 flex items-center gap-2">
              <PenTool className="w-5 h-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-orange-700">
                  <span className="text-orange-500 mt-0.5">→</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDisplay;
