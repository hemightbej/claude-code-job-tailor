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
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    color: colors.accent,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  skillsText: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    color: colors.darkGray,
    lineHeight: 1.2,
  },
});

const CoreCompetencies = ({ resume }: { resume: ResumeSchema }) => {
  if (!resume.skills || resume.skills.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CORE COMPETENCIES</Text>
      <Text style={styles.skillsText}>{resume.skills.join(' • ')}</Text>
    </View>
  );
};

export default CoreCompetencies;
