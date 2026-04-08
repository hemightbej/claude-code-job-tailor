import React from 'react';
import { type TailorThemeProps, type ResumeSchema, type CoverLetterSchema } from '@/types';
import { registerFonts } from '@template-core/fonts-register';
import { WithPDFWrapper } from '@template-core/with-pdf-wrapper';
import { Resume, resumeConfig } from './resume';
import { CoverLetter, coverLetterConfig } from './cover-letter';

const ResumeDocument = ({ data }: { data?: ResumeSchema }): React.ReactElement => (
  <WithPDFWrapper data={data} config={resumeConfig}>
    {(transformedData) => <Resume data={transformedData} />}
  </WithPDFWrapper>
);

const CoverLetterDocument = ({ data }: { data?: CoverLetterSchema }): React.ReactElement => (
  <WithPDFWrapper data={data} config={coverLetterConfig}>
    {(transformedData) => <CoverLetter data={transformedData} />}
  </WithPDFWrapper>
);

const classicJustinTheme: TailorThemeProps = {
  id: 'classic-justin',
  name: 'Classic Justin',
  description: 'A personalized classic template variant',
  documents: ['resume', 'cover-letter'] as const,
  components: {
    resume: ResumeDocument,
    coverLetter: CoverLetterDocument,
  },
  initialize: () => {
    registerFonts();
  },
};

classicJustinTheme.initialize?.();

export default classicJustinTheme;
