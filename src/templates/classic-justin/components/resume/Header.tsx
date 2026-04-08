import React from 'react';
import { Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer';
import { tokens } from '@template-core/design-tokens';
import { getElementVisibility } from '@template-core/section-utils';
import type { ResumeSchema, ResumeSectionConfig } from '@types';

const { colors, spacing } = tokens.classicJustin;

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    marginBottom: spacing.pagePadding,
  },

  // Full-width accent bar at top
  accentBar: {
    width: '100%',
    height: 5,
    backgroundColor: colors.accent,
    marginBottom: 10,
  },

  // Profile picture - absolute positioned top-right
  profileImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: spacing.profileImageSize,
    height: spacing.profileImageSize,
  },

  // Left-aligned header content
  headerContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },

  name: {
    color: colors.primary,
    fontSize: 22,
    fontFamily: 'Rethink Sans Bold',
    marginBottom: 3,
    lineHeight: 1.1,
  },

  contactLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 9,
    fontFamily: 'Rethink Sans',
    color: colors.darkGray,
    justifyContent: 'flex-start',
  },

  contactItem: {
    marginHorizontal: 0,
  },

  contactSeparator: {
    marginHorizontal: 3,
    color: colors.mediumGray,
  },

  contactLink: {
    color: colors.darkGray,
    textDecoration: 'none',
  },
});

const Header = ({ resume, section }: { resume: ResumeSchema; section?: ResumeSectionConfig }) => {
  const { name, contact } = resume;

  const showProfilePicture =
    section &&
    getElementVisibility(section, 'profile-picture', resume) &&
    spacing.profileImageSize > 0 &&
    resume.profile_picture;

  const contactItems: React.ReactNode[] = [];

  if (contact.address) {
    contactItems.push(
      <Text key="address" style={styles.contactItem}>
        {contact.address}
      </Text>,
    );
  }

  contactItems.push(
    <Link
      key="email"
      src={`mailto:${contact.email}`}
      style={[styles.contactItem, styles.contactLink]}
    >
      {contact.email}
    </Link>,
  );

  contactItems.push(
    <Text key="phone" style={styles.contactItem}>
      {contact.phone}
    </Text>,
  );

  if (contact.linkedin) {
    const linkedinDisplay = contact.linkedin.replace(/^https?:\/\/(www\.)?/, '');
    contactItems.push(
      <Link key="linkedin" src={contact.linkedin} style={[styles.contactItem, styles.contactLink]}>
        {linkedinDisplay}
      </Link>,
    );
  }

  if (contact.github) {
    const githubDisplay = contact.github.replace(/^https?:\/\/(www\.)?/, '');
    contactItems.push(
      <Link key="github" src={contact.github} style={[styles.contactItem, styles.contactLink]}>
        {githubDisplay}
      </Link>,
    );
  }

  return (
    <View style={styles.outerContainer}>
      {/* Accent bar — full width at top */}
      <View style={styles.accentBar} />

      {/* Left-aligned header content */}
      <View style={styles.headerContainer}>
        {showProfilePicture && <Image src={resume.profile_picture} style={styles.profileImage} />}

        <Text style={styles.name}>{name}</Text>

        <View style={styles.contactLine}>
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index < contactItems.length - 1 && (
                <Text style={styles.contactSeparator}>•</Text>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Header;
