import type { ResumeSectionConfig, CoverLetterSectionConfig } from '@/types';

// Resume section components
import Header from './components/resume/Header';
import Summary from './components/resume/Summary';
import IndependentProjects from './components/resume/IndependentProjects';
import WorkExperience from './components/resume/WorkExperience';
import TechnicalSkills from './components/resume/TechnicalSkills';
import CoreCompetencies from './components/resume/CoreCompetencies';
import Education from './components/resume/Education';
import Languages from './components/resume/Languages';

// Cover letter section components
import CoverLetterHeader from './components/cover-letter/Header';
import DateLine from './components/cover-letter/DateLine';
import Title from './components/cover-letter/Title';
import Body from './components/cover-letter/Body';
import Signature from './components/cover-letter/Signature';

// Utility functions
export {
  getVisibleResumeSections,
  isResumeSectionVisible,
  getVisibleCoverLetterSections,
  isCoverLetterSectionVisible,
  getElementVisibility,
} from '@template-core/section-utils';

export const RESUME_SECTIONS: ResumeSectionConfig[] = [
  {
    documentType: 'resume',
    id: 'header',
    component: Header,
    isVisible: () => true,
    elements: [
      {
        id: 'profile-picture',
        isVisible: (data) => {
          if ('profile_picture' in data) {
            return (data.profile_picture?.trim().length ?? 0) > 0;
          }
          return false;
        },
      },
    ],
    order: 0,
    description: 'Name and contact information',
  },
  {
    documentType: 'resume',
    id: 'summary',
    component: Summary,
    isVisible: (data) => {
      return (data.summary?.trim().length ?? 0) > 0;
    },
    order: 1,
    description: 'Professional summary - Profile',
  },
  {
    documentType: 'resume',
    id: 'independent-projects',
    component: IndependentProjects,
    isVisible: (data) => (data.independent_projects?.length ?? 0) > 0,
    order: 2,
    description: 'Independent projects',
  },
  {
    documentType: 'resume',
    id: 'work-experience',
    component: WorkExperience,
    isVisible: (data) => (data.professional_experience?.length ?? 0) > 0,
    order: 3,
    description: 'Professional work experience',
  },
  {
    documentType: 'resume',
    id: 'technical-skills',
    component: TechnicalSkills,
    isVisible: (data) => (data.technical_expertise?.length ?? 0) > 0,
    order: 4,
    description: 'Technical expertise and skills',
  },
  {
    documentType: 'resume',
    id: 'education',
    component: Education,
    isVisible: (data) => (data.education?.length ?? 0) > 0,
    order: 5,
    description: 'Educational background',
  },
  {
    documentType: 'resume',
    id: 'languages',
    component: Languages,
    isVisible: (data) => (data.languages?.length ?? 0) > 0,
    order: 6,
    description: 'Language proficiencies',
  },
  {
    documentType: 'resume',
    id: 'core-competencies',
    component: CoreCompetencies,
    isVisible: (data) => (data.skills?.length ?? 0) > 0,
    order: 7,
    description: 'Soft skills and competencies',
  },
];

export const COVER_LETTER_SECTIONS: CoverLetterSectionConfig[] = [
  {
    documentType: 'cover-letter',
    id: 'header',
    component: CoverLetterHeader,
    isVisible: () => true,
    order: 0,
    description: 'Contact information and company name',
  },
  {
    documentType: 'cover-letter',
    id: 'date',
    component: DateLine,
    isVisible: () => true,
    order: 1,
    description: 'Letter date',
  },
  {
    documentType: 'cover-letter',
    id: 'title',
    component: Title,
    isVisible: (data) => {
      const hasPosition = (data.position?.length ?? 0) > 0;
      const hasLetterTitle = (data.content.letter_title?.length ?? 0) > 0;
      return hasPosition || hasLetterTitle;
    },
    order: 2,
    description: 'Cover letter title with position',
  },
  {
    documentType: 'cover-letter',
    id: 'body',
    component: Body,
    isVisible: () => true,
    order: 3,
    description: 'Letter opening and body paragraphs',
  },
  {
    documentType: 'cover-letter',
    id: 'signature',
    component: Signature,
    isVisible: () => true,
    order: 4,
    description: 'Closing signature',
  },
];
