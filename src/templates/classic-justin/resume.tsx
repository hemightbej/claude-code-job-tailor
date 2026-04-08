import React from 'react';
import { Page, View, StyleSheet } from '@react-pdf/renderer';

import { tokens } from '@template-core/design-tokens';
import type { ResumeSchema, ReactPDFProps } from '@types';

import { RESUME_SECTIONS } from './section-registry';
import { getVisibleResumeSections } from '@template-core/section-utils';

const { colors, spacing, typography } = tokens.classicJustin;

export const resumeConfig = {
  getDocumentProps: (data: ResumeSchema) => ({
    title: 'Resume',
    author: data.name,
    subject: `The resume of ${data.name}`,
  }),
  transformData: (data: ResumeSchema) => data,
  emptyStateMessage:
    'No resume data available. Please ensure source files exist or use -C flag to specify a company folder.',
};

export const Resume = ({
  size = 'A4',
  orientation = 'portrait',
  wrap = true,
  debug = false,
  dpi = 72,
  bookmark,
  data,
}: ReactPDFProps) => {
  const resumeData = data as ResumeSchema;
  const visibleSections = getVisibleResumeSections(RESUME_SECTIONS, resumeData);

  return (
    <Page
      size={size}
      orientation={orientation}
      wrap={wrap}
      debug={debug}
      dpi={dpi}
      bookmark={bookmark}
      style={styles.page}
    >
      <View style={styles.container}>
        {visibleSections.map((section) => {
          return (
            <section.component
              key={section.id}
              resume={resumeData}
              debug={debug}
              section={section}
            />
          );
        })}
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: typography.text.fontFamily,
    padding: spacing.documentPadding,
    color: colors.darkGray,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
