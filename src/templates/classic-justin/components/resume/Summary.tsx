import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { tokens } from '@template-core/design-tokens';
import type { ResumeSchema } from '@types';

const { colors, spacing } = tokens.classicJustin;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.pagePadding,
  },
  titleText: {
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    color: colors.primary,
    marginBottom: 4,
  },
  summaryText: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    lineHeight: 1.2,
    color: colors.darkGray,
  },
});

const Summary = ({ resume }: { resume: ResumeSchema }) => {
  if (!resume.summary || resume.summary.trim() === '') {
    return null;
  }

  return (
    <View style={styles.container}>
      {resume.title && <Text style={styles.titleText}>{resume.title}</Text>}
      <Text style={styles.summaryText}>{resume.summary}</Text>
    </View>
  );
};

export default Summary;
