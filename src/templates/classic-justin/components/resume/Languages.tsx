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
  languagesText: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    color: colors.darkGray,
    lineHeight: 1.2,
  },
});

const Languages = ({ resume }: { resume: ResumeSchema }) => {
  if (!resume.languages || resume.languages.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>LANGUAGES</Text>
      <Text style={styles.languagesText}>
        {resume.languages.map((lang) => `${lang.language} (${lang.proficiency})`).join(' • ')}
      </Text>
    </View>
  );
};

export default Languages;
