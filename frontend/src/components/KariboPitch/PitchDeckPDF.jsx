import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font, pdf } from '@react-pdf/renderer';
import { brandData, heroData, problemData, ideaData, experienceJourney, strategyPoints, agencyData, pricingTiers, pricingNote, closingData, permissionsData } from '../../data/mock';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', fontWeight: 300 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff2', fontWeight: 500 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2', fontWeight: 700 },
  ]
});

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fffef2',
    padding: 0,
    fontFamily: 'Inter',
  },
  darkPage: {
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 40,
    fontFamily: 'Inter',
  },
  heroPage: {
    flexDirection: 'column',
    backgroundColor: '#8b3a4c',
    padding: 50,
    fontFamily: 'Inter',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbbb4',
  },
  logo: {
    width: 80,
    height: 40,
    objectFit: 'contain',
  },
  agencyText: {
    fontSize: 10,
    color: '#666666',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 300,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: 400,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 14,
    fontWeight: 300,
    color: '#ffffff',
    opacity: 0.8,
    textAlign: 'center',
    maxWidth: 400,
  },
  campaignInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
  },
  campaignItem: {
    fontSize: 11,
    color: '#ffffff',
    opacity: 0.7,
  },
  sectionLabel: {
    fontSize: 10,
    color: '#8b3a4c',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 300,
    color: '#333333',
    marginBottom: 20,
  },
  darkSectionTitle: {
    fontSize: 32,
    fontWeight: 300,
    color: '#ffffff',
    marginBottom: 10,
  },
  accentText: {
    color: '#8b3a4c',
  },
  lightAccentText: {
    color: '#d4a5a5',
  },
  bodyText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 1.7,
  },
  whiteBodyText: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.7,
    lineHeight: 1.7,
  },
  problemPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbbb4',
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8b3a4c',
    marginRight: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 20,
  },
  gridItem: {
    width: '30%',
    backgroundColor: '#f6f5e8',
    padding: 20,
    marginBottom: 15,
  },
  gridItemTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#333333',
    marginBottom: 8,
  },
  gridItemText: {
    fontSize: 10,
    color: '#666666',
    lineHeight: 1.5,
  },
  journeyItem: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  journeyNumber: {
    width: 40,
    height: 40,
    backgroundColor: '#8b3a4c',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
    lineHeight: 40,
    marginRight: 20,
  },
  journeyContent: {
    flex: 1,
  },
  journeyTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: '#333333',
    marginBottom: 5,
  },
  journeyText: {
    fontSize: 12,
    color: '#666666',
  },
  pricingCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#bcbbb4',
    padding: 25,
  },
  pricingTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#333333',
    marginBottom: 8,
  },
  pricingDescription: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 15,
  },
  pricingPrice: {
    fontSize: 24,
    fontWeight: 300,
    color: '#333333',
    marginBottom: 15,
  },
  pricingFeature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  checkmark: {
    fontSize: 10,
    color: '#8b3a4c',
    marginRight: 8,
  },
  featureText: {
    fontSize: 10,
    color: '#666666',
    flex: 1,
  },
  serviceItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 15,
  },
  serviceName: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 10,
    color: '#ffffff',
    opacity: 0.6,
    lineHeight: 1.5,
  },
  permissionCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#bcbbb4',
  },
  permissionTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: '#333333',
    marginBottom: 3,
  },
  permissionAuthority: {
    fontSize: 9,
    color: '#8b3a4c',
    marginBottom: 5,
  },
  permissionText: {
    fontSize: 9,
    color: '#666666',
  },
  closingTitle: {
    fontSize: 36,
    fontWeight: 300,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#999999',
  },
  pageNumber: {
    fontSize: 8,
    color: '#999999',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 40,
  },
  column: {
    flex: 1,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 30,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 300,
    color: '#333333',
  },
  statLabel: {
    fontSize: 10,
    color: '#666666',
  },
});

// PDF Document Component
const PitchDeckPDF = () => (
  <Document>
    {/* Page 1: Hero/Title */}
    <Page size="A4" orientation="landscape" style={styles.heroPage}>
      <View style={{ alignItems: 'center' }}>
        <Image src={brandData.logoUrl} style={{ width: 120, height: 60, marginBottom: 30 }} />
        <Text style={styles.heroTitle}>{heroData.headline}</Text>
        <Text style={styles.heroSubtitle}>{heroData.subheadline}</Text>
        <Text style={styles.heroDescription}>{heroData.description}</Text>
        <View style={styles.campaignInfo}>
          <Text style={styles.campaignItem}>{brandData.campaign.location}</Text>
          <Text style={styles.campaignItem}>•</Text>
          <Text style={styles.campaignItem}>{brandData.campaign.duration}</Text>
          <Text style={styles.campaignItem}>•</Text>
          <Text style={styles.campaignItem}>{brandData.campaign.period}</Text>
        </View>
        <Text style={{ fontSize: 10, color: '#ffffff', opacity: 0.5, marginTop: 40 }}>
          A Proposal by {brandData.agencyName}
        </Text>
      </View>
    </Page>

    {/* Page 2: The Problem */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionLabel}>The Challenge</Text>
            {problemData.points.map((point, index) => (
              <View key={index} style={styles.problemPoint}>
                <View style={styles.bulletPoint} />
                <Text style={{ fontSize: 14, color: '#666666' }}>{point}</Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>
              {problemData.headline}{'\n'}
              <Text style={styles.accentText}>{problemData.headlineAccent}</Text>
            </Text>
            <Text style={styles.bodyText}>{problemData.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>2</Text>
      </View>
    </Page>

    {/* Page 3: The Concept */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <Text style={styles.sectionLabel}>The Concept</Text>
        <Text style={styles.sectionTitle}>{ideaData.headline}</Text>
        <Text style={{ ...styles.bodyText, maxWidth: 500, marginBottom: 30 }}>{ideaData.description}</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Days</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Location</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>∞</Text>
            <Text style={styles.statLabel}>Memories</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>3</Text>
      </View>
    </Page>

    {/* Page 4: Experience Journey */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <Text style={styles.sectionLabel}>The Journey</Text>
        <Text style={styles.sectionTitle}>The Experience Flow</Text>
        
        <View style={{ marginTop: 20 }}>
          {experienceJourney.map((item, index) => (
            <View key={index} style={styles.journeyItem}>
              <Text style={styles.journeyNumber}>{String(item.id).padStart(2, '0')}</Text>
              <View style={styles.journeyContent}>
                <Text style={styles.journeyTitle}>{item.title}</Text>
                <Text style={styles.journeyText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>4</Text>
      </View>
    </Page>

    {/* Page 5: Strategy */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <Text style={styles.sectionLabel}>The Strategy</Text>
        <Text style={styles.sectionTitle}>Why This Works</Text>
        
        <View style={styles.grid}>
          {strategyPoints.map((point, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.gridItemTitle}>{point.title}</Text>
              <Text style={styles.gridItemText}>{point.description}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>5</Text>
      </View>
    </Page>

    {/* Page 6: Our Role */}
    <Page size="A4" orientation="landscape" style={styles.darkPage}>
      <View>
        <Text style={styles.sectionLabel}>Our Role</Text>
        <Text style={styles.darkSectionTitle}>
          {agencyData.headline}{'\n'}
          <Text style={styles.lightAccentText}>{agencyData.headlineAccent}</Text>
        </Text>
        <Text style={{ ...styles.whiteBodyText, marginBottom: 25 }}>{agencyData.description}</Text>
        
        <View>
          {agencyData.services.map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ ...styles.footer, borderTopColor: 'rgba(255,255,255,0.1)' }}>
        <Text style={{ ...styles.footerText, color: '#666666' }}>{brandData.agencyName} | Confidential</Text>
        <Text style={{ ...styles.pageNumber, color: '#666666' }}>6</Text>
      </View>
    </Page>

    {/* Page 7: Investment */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <Text style={styles.sectionLabel}>Investment</Text>
        <Text style={styles.sectionTitle}>Experience Tiers</Text>
        <Text style={{ ...styles.bodyText, marginBottom: 25, maxWidth: 500 }}>{pricingNote}</Text>
        
        <View style={{ flexDirection: 'row', gap: 15 }}>
          {pricingTiers.map((tier, index) => (
            <View key={index} style={styles.pricingCard}>
              <Text style={styles.pricingTitle}>{tier.name}</Text>
              <Text style={styles.pricingDescription}>{tier.description}</Text>
              <Text style={styles.pricingPrice}>{tier.price}</Text>
              {tier.features.map((feature, fIndex) => (
                <View key={fIndex} style={styles.pricingFeature}>
                  <Text style={styles.checkmark}>✓</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>7</Text>
      </View>
    </Page>

    {/* Page 8: Permissions */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image src={brandData.logoUrl} style={styles.logo} />
          <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
        </View>
        
        <Text style={styles.sectionLabel}>Compliance</Text>
        <Text style={styles.sectionTitle}>Permissions & Approvals</Text>
        <Text style={{ ...styles.bodyText, marginBottom: 20, maxWidth: 600 }}>{permissionsData.intro}</Text>
        
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {permissionsData.permissions.map((permission, index) => (
            <View key={index} style={styles.permissionCard}>
              <Text style={styles.permissionTitle}>{permission.title}</Text>
              <Text style={styles.permissionAuthority}>{permission.authority}</Text>
              <Text style={styles.permissionText}>{permission.description}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.pageNumber}>8</Text>
      </View>
    </Page>

    {/* Page 9: Closing */}
    <Page size="A4" orientation="landscape" style={styles.darkPage}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.closingTitle}>
          {closingData.headline}{'\n'}
          <Text style={styles.lightAccentText}>{closingData.headlineAccent}</Text>
        </Text>
        <Text style={{ ...styles.whiteBodyText, textAlign: 'center', maxWidth: 450, marginTop: 15 }}>
          {closingData.description}
        </Text>
        
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Image src={brandData.logoUrl} style={{ width: 100, height: 50, marginBottom: 15 }} />
          <Text style={{ fontSize: 12, color: '#ffffff', opacity: 0.5 }}>× {brandData.agencyName}</Text>
        </View>
      </View>
      <View style={{ ...styles.footer, borderTopColor: 'rgba(255,255,255,0.1)' }}>
        <Text style={{ ...styles.footerText, color: '#666666' }}>{brandData.agencyName} | Confidential</Text>
        <Text style={{ ...styles.pageNumber, color: '#666666' }}>9</Text>
      </View>
    </Page>
  </Document>
);

// Function to generate and download PDF
export const generatePitchDeckPDF = async () => {
  const blob = await pdf(<PitchDeckPDF />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Karibo_x_Carter_Road_Pitch_Deck_${brandData.agencyName}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default PitchDeckPDF;
