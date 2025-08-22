
// Simulated AI analysis function - in a real implementation, this would connect to your AI service
export const analyzeEssay = async (essay: string, title: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const wordCount = essay.trim().split(' ').filter(word => word).length;
  const sentenceCount = essay.split(/[.!?]+/).filter(s => s.trim()).length;
  const avgWordsPerSentence = Math.round(wordCount / sentenceCount);

  // Simulate AI analysis based on basic text metrics
  const grammarScore = Math.min(95, 70 + Math.random() * 25);
  const structureScore = Math.min(90, 65 + Math.random() * 25);
  const coherenceScore = Math.min(88, 68 + Math.random() * 20);
  const styleScore = Math.min(85, 60 + Math.random() * 25);

  const overallScore = Math.round((grammarScore + structureScore + coherenceScore + styleScore) / 4);

  const getStatus = (score: number) => {
    if (score >= 85) return 'excellent';
    if (score >= 70) return 'good';
    return 'needs-improvement';
  };

  return {
    title,
    overallScore,
    feedback: [
      {
        category: 'Grammar & Mechanics',
        score: Math.round(grammarScore),
        status: getStatus(grammarScore),
        feedback: grammarScore >= 85 
          ? 'Excellent grammar and punctuation throughout the essay.' 
          : grammarScore >= 70 
          ? 'Good grammar with minor errors that don\'t impede understanding.'
          : 'Several grammatical errors that may distract from your message.',
        suggestions: grammarScore < 85 ? [
          'Review comma usage in complex sentences',
          'Check subject-verb agreement',
          'Proofread for spelling errors'
        ] : ['Maintain this high standard of grammar']
      },
      {
        category: 'Structure & Organization',
        score: Math.round(structureScore),
        status: getStatus(structureScore),
        feedback: structureScore >= 85 
          ? 'Well-organized with clear introduction, body, and conclusion.' 
          : structureScore >= 70 
          ? 'Good structure with logical flow between paragraphs.'
          : 'Structure could be improved for better readability.',
        suggestions: structureScore < 85 ? [
          'Use topic sentences for each paragraph',
          'Add transition words between ideas',
          'Strengthen your conclusion'
        ] : ['Excellent organizational structure']
      },
      {
        category: 'Coherence & Flow',
        score: Math.round(coherenceScore),
        status: getStatus(coherenceScore),
        feedback: coherenceScore >= 85 
          ? 'Ideas flow smoothly with excellent logical connections.' 
          : coherenceScore >= 70 
          ? 'Good coherence with mostly clear connections between ideas.'
          : 'Some ideas may benefit from clearer connections.',
        suggestions: coherenceScore < 85 ? [
          'Use more transitional phrases',
          'Ensure each paragraph supports your thesis',
          'Review logical sequence of arguments'
        ] : ['Maintain this excellent coherence']
      },
      {
        category: 'Style & Voice',
        score: Math.round(styleScore),
        status: getStatus(styleScore),
        feedback: styleScore >= 85 
          ? 'Engaging writing style with varied sentence structure.' 
          : styleScore >= 70 
          ? 'Good writing style with appropriate tone for the topic.'
          : 'Writing style could be more engaging and varied.',
        suggestions: styleScore < 85 ? [
          'Vary sentence length and structure',
          'Use more descriptive language',
          'Develop a stronger authorial voice'
        ] : ['Excellent writing style and voice']
      }
    ],
    strengths: [
      `Essay length of ${wordCount} words is appropriate for detailed analysis`,
      avgWordsPerSentence >= 15 && avgWordsPerSentence <= 25 
        ? 'Good sentence length variety' 
        : 'Clear and concise writing style',
      'Addresses the topic effectively',
      overallScore >= 80 ? 'Strong overall writing quality' : 'Shows good writing fundamentals'
    ],
    improvements: [
      wordCount < 300 ? 'Consider expanding your analysis with more examples' : 'Consider adding more supporting evidence',
      'Strengthen transitions between paragraphs',
      'Review and refine your thesis statement',
      'Add more specific examples to support your arguments'
    ]
  };
};
