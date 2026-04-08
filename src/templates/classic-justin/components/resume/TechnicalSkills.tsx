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
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  categoryLabel: {
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    color: colors.darkGray,
    marginRight: 4,
  },
  categoryContent: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    color: colors.darkGray,
    flex: 1,
  },
});

const TechnicalSkills = ({ resume }: { resume: ResumeSchema }) => {
  if (!resume.technical_expertise || resume.technical_expertise.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
      {resume.technical_expertise.map((category, index) => (
        <View key={index} style={styles.categoryRow}>
          <Text style={styles.categoryLabel}>{category.resume_title}:</Text>
          <Text style={styles.categoryContent}>{category.skills.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
};

export default TechnicalSkills;
