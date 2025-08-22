import { Plus, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FloatingActionButtonProps {
  onNewEssay?: () => void;
  onHelp?: () => void;
  onFeedback?: () => void;
}

const FloatingActionButton = ({ onNewEssay, onHelp, onFeedback }: FloatingActionButtonProps) => {
  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {onHelp && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={onHelp}
                className="rounded-full shadow-elegant interactive-hover"
                variant="secondary"
              >
                <HelpCircle className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Get Help</p>
            </TooltipContent>
          </Tooltip>
        )}

        {onFeedback && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={onFeedback}
                className="rounded-full shadow-elegant interactive-hover"
                variant="secondary"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Send Feedback</p>
            </TooltipContent>
          </Tooltip>
        )}

        {onNewEssay && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={onNewEssay}
                className="rounded-full shadow-glow pulse-glow w-14 h-14"
              >
                <Plus className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>New Essay</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
};

export default FloatingActionButton;