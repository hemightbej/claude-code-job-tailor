import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { tokens } from '@template-core/design-tokens';
import type { ExperienceItem, ResumeSchema } from '@types';

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
  experienceEntry: {
    marginBottom: spacing.pagePadding,
  },
  positionTitle: {
    fontFamily: 'Rethink Sans Bold',
    fontSize: 10,
    color: colors.primary,
    marginBottom: 2,
  },
  companyDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  companyLocation: {
    fontFamily: 'Rethink Sans',
    fontSize: 10,
    color: colors.darkGray,
  },
  dateRange: {
    fontSize: 10,
    color: colors.mediumGray,
    textAlign: 'right',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  bullet: {
    fontSize: 10,
    color: colors.darkGray,
    marginRight: 6,
  },
  achievementText: {
    flex: 1,
    fontSize: 10,
    color: colors.darkGray,
    lineHeight: 1.2,
  },
  descriptionText: {
    fontSize: 10,
    color: colors.darkGray,
    lineHeight: 1.2,
    marginBottom: 4,
  },
});

const ExperienceEntry = ({ experience, debug }: { experience: ExperienceItem; debug: boolean }) => {
  const { location, duration, description, achievements, name } = experience as any;

  return (
    <View style={styles.experienceEntry} debug={debug}>
      <Text style={styles.positionTitle}>{name}</Text>
      <View style={styles.companyDateRow}>
        <Text style={styles.companyLocation}>{location}</Text>
        <Text style={styles.dateRange}>{duration}</Text>
      </View>
      {description && <Text style={styles.descriptionText}>{description}</Text>}
      {achievements && achievements.length > 0 && (
        <View>
          {achievements.map((achievement: string, index: number) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const IndependentProjects = ({ resume, debug = false }: { resume: ResumeSchema; debug?: boolean }) => {
  if (!resume.independent_projects?.length) return null;

  return (
    <View style={styles.container} debug={debug}>
      <Text style={styles.sectionTitle}>INDEPENDENT PROJECTS</Text>
      {resume.independent_projects.map((experience, index) => (
        <ExperienceEntry
          key={`${experience.name}-${index}`}
          experience={experience}
          debug={debug}
        />
      ))}
    </View>
  );
};

export default IndependentProjects;
