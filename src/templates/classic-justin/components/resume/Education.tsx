import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { tokens } from '@template-core/design-tokens';
import type { ResumeSchema } from '@types';

const { colors, spacing } = tokens.classicJustin;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.pagePadding,
  },
  sectionTitle: {
    color: colors.accent,
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  educationEntry: {
    marginBottom: spacing.pagePadding / 2,
  },
  program: {
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    color: colors.primary,
    marginBottom: 1,
  },
  institutionLine: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    color: colors.mediumGray,
  },
});

const Education = ({ resume, debug = false }: { resume: ResumeSchema; debug?: boolean }) => {
  if (!resume.education || resume.education.length === 0) {
    return null;
  }

  return (
    <View style={styles.container} debug={debug}>
      <Text style={styles.sectionTitle}>EDUCATION</Text>
      {resume.education.map((edu, index) => (
        <View key={index} style={styles.educationEntry}>
          <Text style={styles.program}>{edu.program}</Text>
          <Text style={styles.institutionLine}>
            {edu.institution} • {edu.location} • {edu.duration}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Education;
